import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreditScoreService } from 'src/credit-score/credit-score.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private creditScoreService: CreditScoreService,
  ) {}

  async getUserByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    let creditScore = 0;
    if (user) {
      const { id } = user;
      creditScore = await this.creditScoreService.getCreditScore(id);
    }
    console.log({ ...user, creditScore });
    return { ...user, creditScore };
  }

  async createUser(email: string, name?: string) {
    return this.prisma.user.create({
      data: {
        email,
        name,
      },
    });
  }

  async getAllUsers() {
    return this.prisma.user.findMany();
  }
}
