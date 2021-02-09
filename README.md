# WebGUI - SDK 

SDK is a collection absctract classes and adapters needed for creating new plugin for WebGUI.

## Getting Started

To use this SDK, you need to clone the repository and place it next to the plugin used by this SDK. 

### Using

To create a new plugin, you should import the abstract plugin class depending on the type of plugin you are creating and inherit from it.

There are the following 3 types of abstract plugins:

- SystemPlugin
- ExtensionPlugin
- PanelPlugin

To use systems inside the plugin, you should import adapters to the systems you need, create instances of them and use them inside the code.

There are 6 adapters for the following systems:

- EventSystem
- InteractionSystem
- LogSystem
- StorageSystem
- StyleSystem


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ISGNeuroTeam/DTCD-SDK/tags).

## License

This project is licensed under the OT.PLATFORM license agreement - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
