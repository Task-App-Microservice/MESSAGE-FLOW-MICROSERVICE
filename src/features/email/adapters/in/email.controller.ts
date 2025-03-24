import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EmailService } from '../../application/services/email.service';
import { CreateEmailDto } from '../out/dto/create-email.dto';

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @MessagePattern('email_send_code') 
  create(@Payload() createEmailDto: CreateEmailDto) {
    return this.emailService.create(createEmailDto);
  }

}
