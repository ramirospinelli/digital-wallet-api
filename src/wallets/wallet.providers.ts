import { Wallet } from './wallets.entity';

export const WalletsProviders = [
  {
    provide: 'WALLET_REPOSITORY',
    useValue: Wallet,
  },
];
