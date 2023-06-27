# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.1]

### Added

- new method and jsdoc for RouteSystemAdapter

## [0.6.1]

### Fized

- erros in formatNumber method

## [0.6.0]

### Added

- digist after comma argument in formatNumber function

### Added

## [0.5.0]

### Added

- abstract classes for graph

## [0.4.0]

### Added

- function for number formatting to utilities

## [0.3.2]

### Fixed

- component argument changed to input object with new default value

## [0.3.1]

### Fixed

- makefile build script

## [0.3.0]

### Added

- createNodeProperty utility method

## [0.2.0]

### Added

- redirect feature to RouterSystemAdapter
- NotificationSystem adapter
- RouteSystem adapter
- AppGUISystem adapter
- Visualisation and App panel plugin classes
- `toggleSidebar()` method to AppGUISystem adapter
- resizeObserver to panelPlugin
- title to panelPlugin
- added the `beforeUninstall` method, which is called before removing plugins
- added the `setVisible` method, which is called when the visibility of the panel changes
- added get\set "autorun", "runOnTokenChange" to DataSourceSystemAdapter

### Changed

- refactored DataSource adapter for a new system API
- StorageSystemAdapter: added persist module

## [0.1.2]

### Added

- getGUIDList method to AbstractPlugin class
- AbstractMethodImplementError
- InProgressError class
- installExtension method to AbstractPlugin class
- getGUID method to AbstractPlugin class
- DataSourceSystem adapter
- error classes
- datasource classes
- getter for current config to WorkspaceSystemAdapter
- added 'args' parameter to EventSystem's registerEvent and subscribe methods
- getter for TokenStorage module in StorageSystemAdapter
- unsubscribe method to EvenSystemAdapter
- added DataSourceSystem public API to adapter
- removeCustomAction method to EventSystemAdapter
- closeModal and openPanelInModal methods in WorkspaceSystemAdapter

### Changed

- Method registerPluginInstance of EventSystem with "customGUID" param
- EventSystemAdapter without methods createAction and createEvent
- AbstractMethodImplementError into abstract classes
- Updated log system adapter
- Updated StorageSystem adapter

### Fixed

- error classes Makefile
- datasource classes Makefile

## [0.1.1] - 2021-02-10

### Added

- [.gitignore](.gitignore) file

### Changed

- [Makefile](Makefile) to current project structure

### Fixed

- [LICENSE.md](LICENSE.md) file text content
- [Jenkinsfile](Jenkinsfile) text content
- moved source code to SDK directory
- moved package.json to SDK directory

## [0.1.0] - 2021-02-09

### Added

- Init of base abstract classes and adapters
