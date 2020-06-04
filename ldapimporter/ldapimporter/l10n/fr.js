OC.L10N.register(
    "ldapimporter",
    {
        "CAS Authentication backend": "Authentification CAS",
        "CAS Server": "Serveur CAS",
        "Basic": "Basic",
        "Mapping": "Mapping",
        "phpCAS Library": "Librairie phpCAS",
        "CAS Server Version": "Version du serveur CAS",
        "CAS Server Hostname": "Nom d’hôte du serveur CAS",
        "CAS Server Port": "Port du serveur CAS",
        "CAS Server Path": "Chemin du serveur CAS",
        "Service URL": "URL du service",
        "Certification file path (.crt).": "Chemin du fichier de certification (.crt).",
        "Leave empty if you don’t want to validate your CAS server instance": "Laissez vide si vous ne voulez pas valider votre instance de serveur CAS",
        "Use CAS proxy initialization": "Utiliser l'initialisation du proxy CAS",
        "Force user login using CAS?": "Forcer la connexion de l'utilisateur en utilisant CAS?",
        "Don’t use force login on these client-IPs": "N'utilisez pas la connexion forcée sur ces adresses IP client",
        "Comma separated list of client IP addresses (or address ranges), which won’t be forced to login if \"Force user login\" is enabled (e.g. 192.168.1.1-254,192.168.2.5)": "Liste des adresses IP (ou plages d'adresses) séparées par des virgules, qui ne sera pas obligée de se connecter si \"Forcer la connexion utilisateur\" est activé (par exemple 192.168.1.1-254, 192.168.2.5)",
        "Disable CAS logout (do only OwnCloud logout)": "Désactiver la déconnexion CAS (déconnexion d'Owncloud uniquement)",
        "Logout Servers": "Serveurs de déconnexion",
        "Comma separated list of servers which can send logout requests (leave empty if you do not want to restrict logout to defined servers)": "Liste des serveurs séparés par des virgules pouvant envoyer des demandes de déconnexion (laissez vide si vous ne souhaitez pas limiter la déconnexion aux serveurs définis)",
        "Autocreate user after first CAS login?": "Créer l'utilisateur automatiquement après la connexion CAS?",
        "Link CAS authentication with LDAP users and groups backend": "Lier l'authentification CAS avec les utilisateurs et groupe de l'authentification LDAP?",
        "Update user data after each CAS login?": "Mettre à jour les données utilisateurs après la connexion?",
        "Locked Groups": "Groupes protégés",
        "Groups that will not be unlinked from the user when sync the CAS server and the owncloud": "Groupes de l'utilisateur qui seront pas supprimés lors de la synchronisation entre le serveur CAS et Owncloud",
        "Multivalued field, use comma to separate values": "Champ multivalué, utilisez des virgules pour séparer les valeurs",
        "Default Group": "Groupe par défaut",
        "Default group when autocreating users and no group data was found for the user": "Groupe par défaut lors de la création automatique des utilisateurs ownCloud quand aucun groupe n'est trouvé pour l'utilisateur",
        "Authorized CAS Groups": "Groupes autorisés CAS",
        "Users in the following groups will be able to log into ownCloud, users not in one of the groups will be logged out immediately": "Les utilisateurs des groupes suivants pourront se connecter à ownCloud, les utilisateurs ne faisant pas partie d'un groupe seront déconnectés immédiatement",
        "Group Quotas": "Quotas de groupe",
        "Use ECAS Attribute Parser?": "Utiliser ECAS Attribute Parser?",
        "Request full user details?": "Demander des informations complètes sur l'utilisateur?",
        "ECAS Strength": "ECAS Strength",
        "Not set": "Pas encore défini",
        "ECAS AssuranceLevel": "ECAS AssuranceLevel",
        "Query ECAS groups": "ECAS groupes de requêtes",
        "Note down all groups which you want to receive from your ECAS instance, * returns all groups": "Notez tous les groupes que vous souhaitez recevoir de votre instance ECAS, * renvoie tous les groupes",
        "Don’t use Multi-Factor-Authentication on these client-IPs": "N'utilisez pas l'authentification multi-facteurs sur ces IP client",
        "Comma separated list of client IP addresses (or address ranges), which won’t be forced to use Multi-Factor-Authentication if \"ECAS AssuranceLevel\" is at least MEDIUM (e.g. 192.168.1.1-254,192.168.2.5)": "Liste d'adresses IP client (ou plages d'adresses), séparées par des virgules, qui ne seront pas obligées d'utiliser l'authentification à plusieurs facteurs si \"ECAS AssuranceLevel\" est au moins de MEDIUM (par exemple 192.168.1.1-254, 192.168.2.5)",
        "Email": "Email",
        "Display Name": "Nom affiché",
        "Groups": "Groupes",
        "Overwrite phpCAS path (CAS.php file)": "Chemin PHP CAS (fichier CAS.php)",
        "Optional: Overwrite phpCAS path (CAS.php file) if you want to use your own version. Leave blank to use the shipped version.": "Optionnel: Chemin PHP CAS (fichier CAS.php). Laissez vide pour utiliser la version expédiée.",
        "PHP CAS debug file": "Chemin du fichier de debug de PHP CAS",
        "Save": "Enregistrer",
        "Your CAS settings have been updated.": "Vos paramètres CAS ont été mis à jour.",
        "Your CAS settings could not be updated. Please try again.": "Vos paramètres CAS n'ont pas pu être mis à jour. Veuillez réessayer.",
        "Forbidden. You do not have access to this application. Please refer to your administrator if something feels wrong to you.": "Interdit. Vous n'avez pas accès à cette application. Veuillez vous adresser à votre administrateur si quelque chose vous semble incorrect.",
        "You do not have access to the JRCbox application. Please contact the JRCbox administrator if something feels wrong to you.": "Vous n'avez pas accès à cette application JRCbox. Veuillez vous adresser à votre administrateur JRCbox si quelque chose vous semble incorrect.",
        "Internal Server Error. The server encountered an error. Please try again.": "Erreur Interne du Serveur. Le serveur a rencontré une erreur. Veuillez réessayer.",
        "Go back to the login page": "Retourner à la page d'accueil",

        "Import CLI": "Import CLI",
        "ActiveDirectory (LDAP)": "ActiveDirectory (LDAP)",
        "LDAP Host": "Hôte LDAP",
        "LDAP User and Domain": "Utilisateur et domaine LDAP",
        "LDAP User Password": "Mot de passe utilisateur LDAP",
        "LDAP Base DN": "LDAP Base DN",
        "LDAP Sync Filter": "Filtre de synchronisation LDAP",
        "LDAP Sync Pagesize (1–1500)": "LDAP Sync Pagesize (1–1500)",
        "CLI Attribute Mapping": "Mappage d'attributs CLI",
        "UID/Username": "UID/Nom d'utilisateur",
        "Group Name Field": "Nom du groupe",
        "Group Pedagogic": "Nom des groupes pédagogique séparés par des virgules",
        "Group Name Filter": "Filtre de nom de groupe",
        "Attention: You must use PHP (PCRE) Regex syntax for the filter.": "Attention: Vous devez utiliser la syntaxe PHP (PCRE) Regex pour le filtre.",
        "Group Name Replace Umlauts": "Nom du groupe - Remplacer les trémas",
        "Enable": "Activer",
        "Calculate Enable Attribute Bitwise AND with": "Calculer Activer Attribut Bitwise AND avec",
        "Merge Accounts": "Fusionner des comptes",
        "Prefer Enabled over Disabled Accounts on Merge": "Préférer activé sur les comptes désactivés lors de la fusion",
        "Merge Two Active Accounts by": "Fusionner deux comptes actifs par",
        "Merge Two Active Accounts by: Filterstring": "Fusionner deux comptes actifs par: Filtres"
    },
    "nplurals=2; plural=(n != 1);");