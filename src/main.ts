import { NestFactory } from '@nestjs/core';
import { MessageModule } from './message.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(MessageModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
      queue: 'messanger',
      queueOptions: { durable: true  },
    },
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
