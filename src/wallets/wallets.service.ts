import { Injectable, Inject } from '@nestjs/common';
import { Wallet } from './wallets.entity';

@Injectable()
export class WalletsService {
  constructor(
    @Inject('WALLET_REPOSITORY')
    private walletsRepository: typeof Wallet,
  ) {}

  async create(wallet: Wallet): Promise<Wallet> {
    return this.walletsRepository.create({
      address: wallet.address,
      firstTransactionDate: wallet.firstTransactionDate,
      isFavorite: wallet.isFavorite,
    });
  }

  async findAll(): Promise<Wallet[]> {
    return this.walletsRepository.findAll<Wallet>();
  }

  async findById(id: number): Promise<Wallet> {
    return this.walletsRepository.findOne<Wallet>({
      where: {
        id,
      },
    });
  }

  async setFavoriteValue(id: number, isFavorite: boolean): Promise<void> {
    const wallet = await this.walletsRepository.findOne({
      where: {
        id,
      },
    });

    if (wallet) {
      await this.walletsRepository.update(
        {
          isFavorite,
        },
        {
          where: {
            id,
          },
        },
      );
    }
  }
}
