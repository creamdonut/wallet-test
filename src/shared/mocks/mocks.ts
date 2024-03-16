import { Activity } from '@/entities/activities';
import { Token } from '@/entities/token';
import { WalletData } from '@/entities/wallet';

export const MOCK_TOKENS: Token[] = [
  { name: 'TON', amount: 1253, value: 2889.32, fullName: 'Toncoin' },
  { name: 'DFC', amount: 100, value: 14.32, fullName: 'Bitcoin' },
  { name: 'USDT', amount: 12.43, value: 12.46, fullName: 'Teather' },
];

export const MOCK_ACTIVITIES: Activity[] = [
  {
    month: 'January',
    items: [
      {
        name: 'TON',
        type: 'Withdraw',
        amount: '10',
        address: '0x1234567890',
        date: '12/01/2020',
      },
      {
        name: 'TON',
        type: 'Deposit',
        amount: '20',
        address: '0x1234567890',
        date: '12/01/2020',
      },
    ],
  },
  {
    month: 'February',
    items: [
      {
        name: 'USDT',
        type: 'Withdraw',
        amount: '10',
        address: '0x1234567890',
        date: '12/01/2020',
      },
      {
        name: 'USDT',
        type: 'Deposit',
        amount: '20',
        address: '0x1234567890',
        date: '12/01/2020',
      },
    ],
  },
  {
    month: 'March',
    items: [
      {
        name: 'DFC',
        type: 'Withdraw',
        amount: '10',
        address: '0x1234567890',
        date: '12/01/2020',
      },
      {
        name: 'DFC',
        type: 'Deposit',
        amount: '20',
        address: '0x1234567890',
        date: '12/01/2020',
      },
    ],
  },
];

export const MOCK_WALLET: WalletData = {
  balance: 3450,
  address: 'TjkLk12h3iu12j31923h5FGs',
};
