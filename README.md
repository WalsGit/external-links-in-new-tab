# External Links In New Tab

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/walsgit/external-link-in-new-tab.svg)](https://packagist.org/packages/walsgit/external-link-in-new-tab) [![Total Downloads](https://img.shields.io/packagist/dt/walsgit/external-link-in-new-tab.svg)](https://packagist.org/packages/walsgit/external-link-in-new-tab)

A [Flarum](https://flarum.org) extension. Opens all external links in a new tab

Adds `target="_blank" rel="noopener noreferrer"` to every external link on the forum frontend (excluding the admin frontend).

## Installation

Install with composer:

```sh
composer require walsgit/external-link-in-new-tab:"*"
```

## Updating

```sh
composer update walsgit/external-link-in-new-tab:"*"
php flarum migrate
php flarum cache:clear
```

## Links

- [Packagist](https://packagist.org/packages/walsgit/external-link-in-new-tab)
- [GitHub](https://github.com/walsgit/external-link-in-new-tab)
- [Issues](https://github.com/WalsGit/external-links-in-new-tab/issues)
