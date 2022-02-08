import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Wallet extends Model {
  @Column
  address: string;

  @Column
  firstTransactionDate: Date;

  @Column
  isFavorite: boolean;
}
