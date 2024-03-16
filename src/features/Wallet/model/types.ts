import { Token } from '@/entities/token';
import { Activity } from '@/entities/activities';

export type WalletAppProps = {
  balance: number;
  tokens: Token[];
  activities: Activity[];
  walletAddress: string;
};

export type ButtonsType = 'deposit' | 'send' | 'buy';
