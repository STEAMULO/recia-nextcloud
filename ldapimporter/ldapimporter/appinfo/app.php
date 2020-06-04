<?php

$app = new \OCA\LdapImporter\AppInfo\Application();
$c = $app->getContainer();

$requestUri = (isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '');

if (\OCP\App::isEnabled($c->getAppName()) && !\OC::$CLI) {

    $userService = $c->query('UserService');
    $appService = $c->query('AppService');

    # Check for valid setup, only enable app if we have at least a CAS host, port and path
    if ($appService->isSetupValid()) {

        // Register User Backend
        $userService->registerBackend($c->query('Backend'));

        if ($requestUri === '/' || (strpos($requestUri, '/login') !== FALSE && strpos($requestUri, '/apps/ldapimporter/login') === FALSE)) {

            if ($_SERVER['REQUEST_METHOD'] !== 'POST') { // POST is used for single logout requests

                // Register UserHooks
                $c->query('UserHooks')->register();

                // URL params and redirect_url cookie
                setcookie("ldap_importer_enforce_authentication", "0", null, '/');
                $urlParams = '';

                if (isset($_REQUEST['redirect_url'])) {

                    $urlParams = $_REQUEST['redirect_url'];
                    // Save the redirect_rul to a cookie
                    $cookie = setcookie("ldap_importer_redirect_url", "$urlParams", null, '/');
                }/*
                else {

                    setcookie("ldap_importer_redirect_url", '/', null, '/');
                }*/

                // Register alternative LogIn
                $appService->registerLogIn();

                // Check for enforced authentication
                if ($appService->isEnforceAuthentication($_SERVER['REMOTE_ADDR']) && (!isset($_COOKIE['ldap_importer_enforce_authentication']) || (isset($_COOKIE['ldap_importer_enforce_authentication']) && $_COOKIE['ldap_importer_enforce_authentication'] === '0'))) {

                    $loggingService = $c->query("LoggingService");

                    $loggingService->write(\OCA\LdapImporter\Service\LoggingService::DEBUG, 'Enforce Authentication was: ' . $appService->isEnforceAuthentication($_SERVER['REMOTE_ADDR']));
                    setcookie("ldap_importer_enforce_authentication", '1', null, '/');

                    // Initialize app
                    if (!$appService->isCasInitialized()) {

                        try {

                            $appService->init();

                            //if (!\phpCAS::isAuthenticated()) {

                                $loggingService->write(\OCA\LdapImporter\Service\LoggingService::DEBUG, 'Enforce Authentication was on and phpCAS is not authenticated. Redirecting to CAS Server.');

                                $cookie = setcookie("ldap_importer_redirect_url", urlencode($requestUri), null, '/');

                                header("Location: " . $appService->linkToRouteAbsolute($c->getAppName() . '.authentication.casLogin'));
                                die();
                            //}

                        } catch (\OCA\LdapImporter\Exception\PhpCas\PhpUserCasLibraryNotFoundException $e) {

                            $loggingService->write(\OCA\LdapImporter\Service\LoggingService::ERROR, 'Fatal error with code: ' . $e->getCode() . ' and message: ' . $e->getMessage());
                        }
                    }
                }
            }
        } else {

            // Register UserHooks
            $c->query('UserHooks')->register();
        }
    } else {

        $appService->unregisterLogIn();
    }
}