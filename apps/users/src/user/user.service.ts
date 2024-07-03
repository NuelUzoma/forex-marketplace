import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from "./entities/user.entity";
import { Profile } from '../profile/entities/profile.entity';
import { UserDto } from './dto/user.dto';


@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Profile)
        private readonly profileRepository: Repository<Profile>
    ) {}

    async create(userDto: UserDto): Promise<User> {
        // const profile = this.profileRepository.create();
        // await this.profileRepository.save(profile);

        const user = new User();
        user.username = userDto.username;
        user.email = userDto.email;
        user.password = userDto.password;

        const profile = new Profile();
        profile.firstname = userDto.profile[0].firstname;
        profile.lastname = userDto.profile[0].lastname;
        profile.age = userDto.profile[0].age;

        user.profile = profile; // Assign the profile to the user

        await this.userRepository.save(user);
        return user;
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find({ relations: ['profile'] });
    }

    // Finds a user either by username or email
    async findByUsername(username: string): Promise<User> {
        const user = await this.userRepository.findOne({ where: { username } });

        if (!user) {
            // Handle the case when the user is not found
            throw new Error(`User with username ${username} not found`);
        }
    
        return user;
    }

    async updateProfile(userId: number, profileData: Partial<Profile>): Promise<Profile> {
        const user = await this.userRepository.findOne({
            where: { id: userId },
            relations: ['profile']
        });

        if (!user) {
            throw new Error('User Not Found');
        }

        const profile = Object.assign(user.profile, profileData);
        return this.profileRepository.save(profile);
    }
}