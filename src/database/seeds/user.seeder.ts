import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { User, UserDocument } from '../../users/schemas/user.schema';

@Injectable()
export class UserSeeder {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async seed() {
    const users = [
      {
        email: 'admin@project-name.com',
        password: await bcrypt.hash('admin123', 10),
        firstName: 'Admin',
        lastName: 'User',
        role: 'admin',
        isEmailVerified: true,
        isActive: true,
      },
      {
        email: 'user@project-name.com',
        password: await bcrypt.hash('user123', 10),
        firstName: 'Regular',
        lastName: 'User',
        role: 'user',
        isEmailVerified: true,
        isActive: true,
      },
    ];

    for (const userData of users) {
      const existingUser = await this.userModel.findOne({
        email: userData.email,
      });
      if (!existingUser) {
        await this.userModel.create(userData);
        console.log(`Created user: ${userData.email}`);
      } else {
        console.log(`User already exists: ${userData.email}`);
      }
    }
  }
}
