import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientGrpc, Client, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Wallet } from './entities/wallet.entity';
import { WalletDto } from './dto/wallet.dto';
import { GetUserByIdResponse } from '../../../../protos/generated/user/GetUserByIdResponse';
import { UserServiceClient } from '../../../../protos/generated/user/UserService';


@Injectable()
export class WalletService implements OnModuleInit {
    // Grpc client
    @Client({
        transport: Transport.GRPC,
        options: {
          package: 'user',
          protoPath: join(__dirname, '../../../protos/user.proto'),
        },
    })
    private client!: ClientGrpc;
    private userService!: UserServiceClient;

    constructor(
        @InjectRepository(Wallet)
        private readonly walletRepository: Repository<Wallet>
    ) {}

    onModuleInit() {
        this.userService = this.client.getService<UserServiceClient>('UserService');
    }

    // Method to create wallet
    async createWallet(walletDto: WalletDto, userId: number): Promise<Wallet> {        
        try {
            // @ts-ignore
            const userResponse: GetUserByIdResponse = await this.userService.GetUserById({ userId });
            
            if (!userResponse) {
                throw new Error('User not found');
            }
            
            const wallet = this.walletRepository.create({...walletDto, userId});
            return this.walletRepository.save(wallet);
        } catch (error) {
            throw new Error(`Error creating wallet: ${error}`);
        }
    }

    // Method to get logged in user wallet
    async getWalletByUserId(userId: number): Promise<Wallet> {
        const wallet = await this.walletRepository.findOne({ where: { userId } });
        if (!wallet) {
            throw new Error('Wallet not found!');
        }

        return wallet;
    }

    // Method for wallet-to-wallet deposit
    async performDeposit(userId: number, walletId: number, amount: number): Promise<any> {
        try {
            // Deposit amount validation
            if (amount <= 0 || !Number.isInteger(amount)) {
                throw new Error('Deposit amount must be a positive integer greater than 0');
            }

            // Retrieve user wallet
            const userWallet = await this.walletRepository.findOne({ where: { userId: userId }}); // Depositor
            // Retrieve reciepient wallet
            const reciepientWallet = await this.walletRepository.findOne({ where: { id: walletId }}); // Reciepient

            // Return error if wallet is not found
            if (!userWallet || !reciepientWallet) {
                throw new Error('Wallet not found');
            }

            // Prohibit funds deposit to one's wallet
            if (userWallet.userId === reciepientWallet.userId) {
                throw new Error('You no fit send money to yourself, Chief');
            }

            // Perform the deposit by updating the balances
            userWallet.balance -= amount;
            reciepientWallet.balance += amount;

            // Update wallets records in the database
            await this.walletRepository.save(userWallet);
            await this.walletRepository.save(reciepientWallet)

            return { message: 'Deposit successful' };
        } catch (err) {
            throw new Error(`Cannot perform deposit: ${err}`);
        }
    }
}