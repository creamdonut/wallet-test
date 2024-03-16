import { TokenType } from './token';

export type ActivityItem = {
  name: TokenType;
  type: ActivityType;
  amount: string;
  address: string;
  date: string;
};

export type ActivityType = 'Withdraw' | 'Deposit';

export type Activity = {
  month: string;
  items: ActivityItem[];
};
