import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    type!: string; // 'buy' or 'sell'

    @Column('decimal', { precision: 18, scale: 8 })
    fromAmount!: number;

    @Column()
    fromCurrency!: string;

    @Column('decimal', { precision: 18, scale: 8 })
    toAmount!: number;

    @Column()
    toCurrency!: string;

    @Column('decimal', { precision: 10, scale: 6 })
    targetRate!: number;

    @Column()
    status!: string;

    @Column()
    createdAt!: Date;

    @Column({ nullable: true })
    executedAt!: Date;
}