import { Test, TestingModule } from '@nestjs/testing';
import { CreditScoreService } from '../credit-score/credit-score.service';
import { HttpModule } from '@nestjs/axios';

describe('CreditScoreService', () => {
  let service: CreditScoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [CreditScoreService],
    }).compile();

    service = module.get<CreditScoreService>(CreditScoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
