#!/usr/bin/env bash

set -euo pipefail

if [[ ! -f "${OPENAPI_CODEGEN_BIN}" ]]; then
  echo "${OPENAPI_CODEGEN_BIN} does not exist"
  exit 1
fi

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

pushd ${DIR}
pushd ../jxtsclientopenapi/target/classes
zip -qq -ur ${OPENAPI_CODEGEN_BIN} *
popd
popd

dir_resolve()
{
cd "$1" 2>/dev/null || return $?  # cd to desired directory; if fail, quell any error messages but return exit status
echo "`pwd -P`" # output full, link-resolved path
}
