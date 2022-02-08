import { walletModule } from './wallets/wallets.module';
import { Module } from '@nestjs/common';
@Module({
  imports: [walletModule],
})
export class AppModule {}
