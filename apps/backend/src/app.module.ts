import { Module } from '@nestjs/common';
import { UserModule } from './infra/http/controllers/users/user.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
