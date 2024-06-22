# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Versionnement Sémantique](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.3.0] - 2024-06-23
### Update
- Update dependencies
- Update domain twitter.com to x.com

## [1.2.0] - 2023-09-13
### Added
- Added condition to skip undesired tweets in `getData`.
- Added logging for easier debugging in `puppeteer.js`.

### Changed
- Modified error handling to allow `getInfo` retrieval even if `getData` fails.

### Fixed
- Improved code to prevent errors when account or tweets do not exist.

## [1.1.2] - 2023-09-13
### Fixed
- Delete console.log

## [1.1.1] - 2023-09-13
### Changed
- Modified the selector in `getInfo.js` for `followersElement` from `a[href$="/followers"]` to `a[href$="/verified_followers"]`.

## [1.1.0] - 2023-09-03
### Added
- Translated the entire module to English for broader accessibility.

## [1.0.1] - 2023-09-03
### Fixed
- Added a constant to handle sponsored tweets.
  
### Added
- Added the repo on GitHub.

## [1.0.0] - 2023-09-02
### Added
- Project release.