import { Module } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { WalletsProviders } from './wallet.providers';
import { DatabaseModule } from '../database/database.module';
import { WalletController } from './wallets.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [WalletController],
  providers: [WalletsService, ...WalletsProviders],
})
export class walletModule {}
