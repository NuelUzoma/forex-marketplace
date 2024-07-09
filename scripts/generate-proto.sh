#!/bin/bash

PROTO_DIR=./libs/proto/src
OUT_DIR=./libs/proto/src/generated

mkdir -p ${OUT_DIR}

# Generate JavaScript and TypeScript files using grpc-tools
# npx grpc_tools_node_protoc \
#   --js_out=import_style=commonjs,binary:${OUT_DIR} \
#   --grpc_out=grpc_js:${OUT_DIR} \
#   --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
#   --ts_out=service=true:${OUT_DIR} \
#   --proto_path=${PROTO_DIR} \
#   ${PROTO_DIR}/*.proto

npx proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=${OUT_DIR} ${PROTO_DIR}/*.proto