import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './User/user.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: 5432,
      username: process.env.POSTGRES_USER || 'root',
      password: process.env.POSTGRES_PASSWORD || 'root',
      database: process.env.POSTGRES_DB_NAME || 'test',
      entities: [User],
      synchronize: true, // This should be used with caution in production
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([User]), // Register your repository here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
