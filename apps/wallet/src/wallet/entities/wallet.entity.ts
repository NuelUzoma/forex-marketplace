import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Wallet {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        unique: true
    }) // One user per wallet
    userId!: number; // Foreign key to users

    @Column({ default: 0 })
    balance!: number;
}