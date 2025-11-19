# External Links In New Tab

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/walsgit/external-links-in-new-tab.svg)](https://packagist.org/packages/walsgit/external-links-in-new-tab) [![Total Downloads](https://img.shields.io/packagist/dt/walsgit/external-links-in-new-tab.svg)](https://packagist.org/packages/walsgit/external-links-in-new-tab) [![Donate here](https://img.shields.io/badge/donate-here-%23008e97)](https://walsgit.github.io/Donations/)

A [Flarum](https://flarum.org) extension. Opens all external links in a new tab

Adds `target="_blank" rel="noopener noreferrer"` to every external link on the forum frontend (excluding the admin frontend). As of version 1.1.0, it no longer overrides existing rel attributes, but adds the `noopener noreferrer` if not found in them (Thanks to [@clarkwinkelmann](https://discuss.flarum.org/d/36348-external-links-in-new-tab/2) for pointing that out).

## Versions
Starting with the version `2.0.0` of this extension, it will only be compatible with `Flarum v2.*`.
Lastest version of the extension compatible with `Flarum v1.8.*` is `walsgit/external-links-in-new-tab:"1.1.2"`.

## Installation

Install with composer:

```sh
composer require walsgit/external-links-in-new-tab:"*"
```

## Updating

```sh
composer update walsgit/external-links-in-new-tab:"*"
php flarum migrate
php flarum cache:clear
```

## Links

- [Packagist](https://packagist.org/packages/walsgit/external-links-in-new-tab)
- [GitHub](https://github.com/walsgit/external-links-in-new-tab)
- [Issues](https://github.com/WalsGit/external-links-in-new-tab/issues)
- [Discuss](https://discuss.flarum.org/d/36348-external-links-in-new-tab)
- [Donate](https://walsgit.github.io/Donations/)
