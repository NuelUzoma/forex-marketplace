// Grpc client module to communicate with Grpc Server
import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {ProtoGrpcType } from '../protos/generated/user';

const PORT = 8082; // Port
const PROTO_FILE = "../protos/user.proto"; // Proto file
const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType;
const client = new grpcObj.user.UserService(
    `0.0.0.0:${PORT}`, grpc.credentials.createInsecure()
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (error) => {
    if (error) {
        console.error(error)
        return
    }
    onClientReady()
});

function onClientReady() {
    client.GetUserById({userId: 1}, (err, result) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(result)
    })
}
