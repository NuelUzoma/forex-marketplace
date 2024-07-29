#!/bin/bash

PROTO_DIR=./protos
OUT_DIR=./protos/generated

mkdir -p ${OUT_DIR}

npx proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=${OUT_DIR} ${PROTO_DIR}/transaction.proto