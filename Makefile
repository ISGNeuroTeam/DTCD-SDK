define ANNOUNCE_BODY
Required section:
	build - build project into build directory, with configuration file and environment
	clean - clean all addition file, build directory and output archive file
	test - run all tests
	pack - make output archive
Addition section:
endef

PROJECT_NAME = DTCD-SDK

GENERATE_VERSION = $(shell jq .version ./$(PROJECT_NAME)/package.json )
GENERATE_BRANCH = $(shell git name-rev $$(git rev-parse HEAD) | cut -d\  -f2 | sed -re 's/^(remotes\/)?origin\///' | tr '/' '_')

SET_VERSION = $(eval VERSION=$(GENERATE_VERSION))
SET_BRANCH = $(eval BRANCH=$(GENERATE_BRANCH))
SET_PACK_NAME = $(eval PACK_NAME=$(PROJECT_NAME)-$(VERSION)-$(BRANCH).tar.gz)

.SILENT:

COMPONENTS:

export ANNOUNCE_BODY

all:
	echo "$$ANNOUNCE_BODY"

build: $(COMPONENTS)
	# required section
	echo Building started...
	$(SET_VERSION)
	mkdir ./build && mkdir ./build/$(PROJECT_NAME)
	cp -r ./$(PROJECT_NAME)/Adapters ./build/$(PROJECT_NAME)
	cp -r ./$(PROJECT_NAME)/DataSourceClasses ./build/$(PROJECT_NAME)
	cp -r ./$(PROJECT_NAME)/Errors ./build/$(PROJECT_NAME)
	cp -r ./$(PROJECT_NAME)/PluginClasses ./build/$(PROJECT_NAME)
	cp ./$(PROJECT_NAME)/index.js ./build/$(PROJECT_NAME)
	cp README.md ./build/
	cp CHANGELOG.md ./build/
	cp LICENSE.md ./build/
	echo Building completed.
	# required section

clean:
	# required section
	echo Cleaning started...
	rm -rf ./build/
	rm -rf ./*.tar.gz
	echo Cleaning completed.
	# required section

pack: build
	# required section
	$(SET_BRANCH)
	$(SET_VERSION)
	$(SET_PACK_NAME)
	echo Creating \"$(PACK_NAME)\" archive...
	cd ./build/ && tar czf ../$(PACK_NAME) .
	echo Archive \"$(PACK_NAME)\" created successfully.
	# required section

test:
	# required section
	echo Nothing to test
	# required section
