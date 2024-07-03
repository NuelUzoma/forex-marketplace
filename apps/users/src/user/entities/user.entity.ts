import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Profile } from '../../profile/entities/profile.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        unique: true
    })
    username!: string;

    @Column({
        unique: true
    })
    email!: string;

    @Column()
    password!: string;

    @OneToOne(() => Profile, profile => profile.user, { cascade: true })
    @JoinColumn({ name: 'profileId', referencedColumnName: 'id'})
    profile!: Profile;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(): Promise<void> {
        if (this.password) {
            const saltRounds = 10;
            this.password = await bcrypt.hash(this.password, saltRounds);
        }
    }

    async comparePassword(password: string): Promise<boolean> {
        return await bcrypt.compare(password, this.password);
    }
}