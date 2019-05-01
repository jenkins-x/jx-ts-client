ifndef JX_HOME
override JX_HOME = ~/.jx
endif
GENERATOR_BIN := scripts/openapi-generator-cli
OPENAPI_GENERATOR_VERSION:= 3.3.4
OUTPUT_DIR_JX=generated
CUSTOMIZATION_DIR=`pwd`/jxtsclientopenapi

all: build-customization generate

build-customization:
	mvn clean package -f ${CUSTOMIZATION_DIR}/pom.xml

generate:
	rm -rf scripts/*.jar
	mkdir -p ${OUTPUT_DIR_JX}
	GENERATOR_PREFIXES=com.github.jenkins-x.jx.pkg.apis.jenkins_io.v1 \
	${GENERATOR_BIN} generate \
	-i https://raw.githubusercontent.com/jenkins-x/jx/master/docs/apidocs/openapi-spec/openapiv2.yaml \
	-o ${OUTPUT_DIR_JX} \
	-g typescript-jx