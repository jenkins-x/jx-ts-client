# JX client for typescript

This is a generic typescript client for JX. It just contains the models generated from the Jenkins X custom resources.

It's generated from the OpenAPI Schema (see https://github.com/jenkins-x/jx/tree/master/docs/apidocs/openapi-spec and
https://jenkins-x.io/contribute/apidocs/). To regenerate the client run `make`. The client is located in the `generated`
directory and is checked into git.

## Hacking on the generator

This project uses the Node Typescript Generator from https://github.com/OpenAPITools/openapi-generator/ and customises
the model names to strip out the long prefixes present in the OpenAPI spec. The customisations are stored in
jxtsclientopenapi. These are loaded using the service loader in that project. In order to make this work with OpenAPI we
add all the files from this project into the OpenAPI generator jar before running it. This is done by
`scripts/openapi-generator-cli`.
