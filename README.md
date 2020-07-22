# LDAP Importer

Plugin pour nextcloud LDAP Importer

Tester sous nextcloud version 18
Tester avec le plugin "CAS Authentication backend" version : 1.8.1

## Installation

A placer dans le dossier apps/ de nextcloud

## Utilisation

###La commande pour importer les utilisateurs du LDAP à la BDD :

```
sudo -u www-data php occ ldap:import-users-ad
```

###La commande pour désactiver les utilisateurs qui sont dans la BDD mais plus dans le LDAP :

```
sudo -u www-data php occ ldap:disable-deleted-user
```

Il y a 3 paramètres pour précisé les utilisteurs à désactivé :

- Un ou plusieurs utilisateurs : `-u` avec la liste des UID à désactivé, exemple : `sudo -u www-data php occ ldap:disable-deleted-user -u 'FK001it,FK001ir'`
- Un ou plusieurs établissements basé sur l'uai : `-uai` avec la liste des uai à désactivé, exemple : `sudo -u www-data php occ ldap:disable-deleted-user -uai '154896548,154896549'`
- Un ou plusieurs établissements basé sur le siren : `-s` avec la liste des siren à désactivé, exemple : `sudo -u www-data php occ ldap:disable-deleted-user -siren '111111111,111111112'`


###La commande pour supprimer tous les utilisateurs désactivés :

```
sudo -u www-data php occ ldap:remove-disabled-user 
```

# School Sharing

Plugin pour nextcloud School Sharing

Tester sous nextcloud version 18

## Installation

Remplacer TOTALEMENT le dossier files_sharing dans le dossier apps/ à la racine du projet.

Aller dans la configuration des plugins nextcloud via l'interface et activer le plugin 'School Sharing' si il n'est pas déjà activé.

# CSS JS Loader

Plugin pour nextcloud CSSJSLoader qui surcharge le css et le js de toutes les pages

Tester sous nextcloud version 18

## Installation

A placer dans le dossier apps/ de nextcloud

## Utilisation

- Placer les ficher js dans le dossier `apps/cssjsloader/inputs/js`
- Placer les ficher css dans le dossier `apps/cssjsloader/inputs/css`
