ifndef JX_HOME
override JX_HOME = ~/.jx
endif

OPENAPI_GENERATOR_VERSION:= 4.0.0
OUTPUT_DIR_JX := client
CUSTOMIZATION_DIR := `pwd`/jxtsclientopenapi
SRC:= https://raw.githubusercontent.com/jenkins-x/jx/master/docs/apidocs/openapi-spec/openapiv2.yaml
ifdef BUILD_NUMBER
NO_TRANSFER_PROGRESS := --no-transfer-progress
endif

GENERATOR_BIN := scripts/openapi-generator-cli

all: build-customization generate

build-customization:
	mvn clean package -f ${NO_TRANSFER_PROGRESS} ${CUSTOMIZATION_DIR}/pom.xml

generate:
	rm -rf scripts/*.jar
	mkdir -p ${OUTPUT_DIR_JX}
	GENERATOR_PREFIXES=com.github.jenkins-x.jx.pkg.apis.jenkins_io.v1 \
	${GENERATOR_BIN} generate \
	-i $(SRC) \
	-o ${OUTPUT_DIR_JX} \
	-g typescript-node