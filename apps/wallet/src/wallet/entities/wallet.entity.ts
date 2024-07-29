import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CurrencyBalance } from './currencyBalance.entity';

@Entity()
export class Wallet {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        unique: true
    }) // One user per wallet
    userId!: number; // Foreign key to users

    @OneToMany(() => CurrencyBalance, currencyBalance => currencyBalance.wallet)
    currencyBalances!: CurrencyBalance[];
};