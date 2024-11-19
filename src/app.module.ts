import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma/prisma.service';
import { CreditScoreService } from './credit-score/credit-score.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, PrismaService, CreditScoreService],
})
export class AppModule {}
