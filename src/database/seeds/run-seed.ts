import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../app.module';
import { SeederModule } from './seeder.module';
import { UserSeeder } from './user.seeder';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const seederModule = app.select(SeederModule);
    const userSeeder = seederModule.get(UserSeeder);
    await userSeeder.seed();
    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await app.close();
  }
}

void bootstrap();
