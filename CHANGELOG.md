# Changelog

## [2.2.0] - 2026-10-17
### Changed
- In Post external links are now handled in the backend (Thanks to [@luceos](https://discuss.flarum.org/d/39033-open-links-in-new-tab-a-flarum-20-extension/2) for the idea.)
- Other external links on the forum frontend (menus, navigation bar, etc.) are now handled with click event, without overriding the element.
- Updated composer.json and other cleanup.

### Fixed
- typos

## [2.1.0] - 2026-03-05
### Fixed
- freeze due to infinite loop when adding a link via the insert link button of the `askvortsov/flarum-rich-text`extension as reported in this [issue](https://github.com/WalsGit/external-links-in-new-tab/issues/10)
- typos
### Changed
- updated README & CHANGELOG

## [2.0.0] - 2025-11-19
### Changed
- Upgraded to be compatible with Flarum V2 (as of v2.0.0-beta.3)

## [1.1.2] - 2025-05-26
### Fixed
- using flarum's ``baseUrl`` attribute instead of ``window.location.host`` to identify internal links so that it could work with flarum sites installed in a subfolder (mysite.tld/flarum)

## [1.1.1] - 2024-11-22
### Added
- A donation link

## [1.1.0] - 2024-11-17
### Fixed
- no longer overrides ``rel`` attribute but adds ``noopener noreferer`` to its values only if it doesn't find them (thanks to [@clarkwinkelmann](https://discuss.flarum.org/d/36348-external-links-in-new-tab/2)

### Changed
- refactored code & removed redundancies (again thanks to [@clarkwinkelmann](https://discuss.flarum.org/d/36348-external-links-in-new-tab/2))

## [1.0.1] - 2024-11-16
### Changed
- correct packagist & github links in readme.md

### Added
- forum (discuss) link

## [1.0.0] - 2024-11-16
- Open external links of the forum frontend in a new tab