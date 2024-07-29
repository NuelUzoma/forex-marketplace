import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Wallet } from './wallet.entity';

@Entity()
export class CurrencyBalance {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    currency!: string;

    @Column('decimal', { precision: 18, scale: 8, default: 0 })
    balance!: number;

    @ManyToOne(() => Wallet, wallet => wallet.currencyBalances)
    wallet!: Wallet;
};