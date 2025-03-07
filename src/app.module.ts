import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MechanicsModule } from './mechanics/mechanics.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports:[
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'taller',
    entities: [__dirname +  '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
  MechanicsModule,
  ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
