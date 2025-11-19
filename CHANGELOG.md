# Changelog

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