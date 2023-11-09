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
      synchronize: true, 
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([User]), 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
