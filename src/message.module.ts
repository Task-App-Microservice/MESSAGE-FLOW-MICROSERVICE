import { Module } from '@nestjs/common';
import { EmailModule } from './features/email/email.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    EmailModule,
  ],
})
export class MessageModule {}
