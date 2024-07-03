import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstname!: string;

    @Column()
    lastname!: string;

    @Column({nullable: true})
    age!: number;

    @OneToOne(() => User, user => user.profile)
    user!: User;
}