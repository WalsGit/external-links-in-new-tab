# External Links In New Tab

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/walsgit/external-links-in-new-tab.svg)](https://packagist.org/packages/walsgit/external-links-in-new-tab) [![Total Downloads](https://img.shields.io/packagist/dt/walsgit/external-links-in-new-tab.svg)](https://packagist.org/packages/walsgit/external-links-in-new-tab) [![Donate here](https://img.shields.io/badge/donate-here-%23008e97)](https://walsgit.github.io/Donations/)

A [Flarum](https://flarum.org) extension. 

Opens all external links in a new tab: 
* Links inside posts are handled on the backend (`target="_blank" rel="noopener noreferrer"` is added when posts are rendered).
* Other external links on the forum frontend (menus, navigation bar, etc.) are opened in a new tab on click event.
* When Flarum is installed in a subfolder (example.tld/flarum), links to other paths (example.tld/blog) are considered external.

## Versions
Starting with the version `2.0.0` of this extension, it will only be compatible with `Flarum v2.*`.
Latest version of the extension compatible with `Flarum v1.8.*` is `walsgit/external-links-in-new-tab:"1.2.0"`.

## Installation

Install with composer:

```sh
composer require walsgit/external-links-in-new-tab:"*"
```

## Updating

```sh
composer update walsgit/external-links-in-new-tab:"*"
php flarum cache:clear
```

## Notes
- Thanks to [@luceos](https://discuss.flarum.org/u/luceos) for [pointing out another way of doing this](https://discuss.flarum.org/d/39033-open-links-in-new-tab-a-flarum-20-extension/2) (version 2.2.0).
- Made with the help of AI.

## Links

- [Packagist](https://packagist.org/packages/walsgit/external-links-in-new-tab)
- [GitHub](https://github.com/walsgit/external-links-in-new-tab)
- [Issues](https://github.com/WalsGit/external-links-in-new-tab/issues)
- [Discuss](https://discuss.flarum.org/d/36348-external-links-in-new-tab)
- [Donate](https://walsgit.github.io/Donations/)
