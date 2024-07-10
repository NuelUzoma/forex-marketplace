// GRPC Server Module to communicate with client
import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {ProtoGrpcType } from '../protos/generated/user';
import { UserServiceHandlers } from '../protos/generated/user/UserService';

const PORT = 8082; // Port
const PROTO_FILE = "../protos/user.proto"; // Proto file
const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType;
const userPackage = grpcObj.user;

// Main function to start the grpc server
function main() {
  const server = getServer();
  server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`GRPC Server has started successfully on port ${port}`);
  });
}

// Get Server function
function getServer() {
  const server = new grpc.Server();
  server.addService(userPackage.UserService.service, {
    GetUserById: (req: any, res: any) => {
      console.log(req.request)
      res(null, {message: "Sent"})
    },
  } as UserServiceHandlers);

  return server;
}

main();