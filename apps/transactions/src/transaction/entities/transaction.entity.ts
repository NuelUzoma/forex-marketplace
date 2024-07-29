import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    userId!: number;

    @Column('decimal', { precision: 18, scale: 8 })
    fromAmount!: number;

    @Column()
    fromCurrency!: string;

    @Column('decimal', { precision: 18, scale: 8 })
    toAmount!: number;

    @Column()
    toCurrency!: string;

    @Column('decimal', { precision: 10, scale: 6 })
    exchangeRate!: number; // preset from rate microservice

    @Column()
    status!: string;

    @Column()
    timestamp!: Date;
}