# DTCD-SDK

SDK is a collection absctract classes and adapters needed for creating new plugin for WebGUI.

## Getting Started

To use this SDK, you need to clone the repository and place it next to the plugin used by this SDK.

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

### Prerequisites

### Installing

### Create build

```
make build
```

## Running the tests

```
make test
```

## Deployment

Unpack the `DTCD-SDK-*.tar.gz` archive to the desired location:
```
tar -zxf DTCD-SDK-*.tar.gz ./DTCD-SDK
```

Import the software modules you need:
```
import { StorageSystemAdapter } from '<path-to-sdk>/DTCD-SDK'
```

## Built With


## Contributing

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ISGNeuroTeam/DTCD-SDK/tags).

Also you can see the [CHANGELOG](CHANGELOG.md) file.

## Authors

- Konstantin Rozov (konstantin@isgneuro.com)
- Roman Kuramshin (rkuramshin@isgneuro.com)
- Sergey Belikov (sbelikov@isgneuro.com)

## License

This project is licensed under the OT.PLATFORM license agreement - see the [LICENSE](LICENSE.md) file for details.

## Acknowledgments