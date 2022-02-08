import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { Wallet } from './wallets.entity';

@Controller()
export class WalletController {
  constructor(private readonly walletsService: WalletsService) {}

  @Get('/wallets')
  async getAllWallets(): Promise<Wallet[]> {
    return await this.walletsService.findAll();
  }

  @Get('/wallets/:id')
  async getWallet(@Param() params): Promise<Wallet> {
    return await this.walletsService.findById(params.id);
  }

  @Post('/wallets')
  async createWAllet(@Body() wallet: Wallet): Promise<Wallet> {
    return await this.walletsService.create(wallet);
  }

  @Put('wallets/:id/favorite')
  async setFavorite(
    @Param('id') id: number,
    @Body('isFavorite') isFavorite: boolean,
  ): Promise<void> {
    return await this.walletsService.setFavoriteValue(id, isFavorite);
  }
}
