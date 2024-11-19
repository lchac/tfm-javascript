import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CreditScoreService {
  constructor(private readonly httpService: HttpService) {}

  async getCreditScore(userId: string): Promise<any> {
    const url = `${process.env.CREDIT_SCORE_URL}${userId}`;

    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
    } catch (error) {
      console.error('Error fetching data from external API:', error);
      throw error;
    }
  }
}
