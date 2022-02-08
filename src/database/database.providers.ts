import { Sequelize } from 'sequelize-typescript';
import { Wallet } from 'src/wallets/wallets.entity';

export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: '<username>',
        password: '<password>',
        database: 'digital-wallet',
      });
      sequelize.addModels([Wallet]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
