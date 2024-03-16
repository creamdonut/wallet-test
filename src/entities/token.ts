export type TokenType = 'TON' | 'DFC' | 'USDT';

export type Token = {
  name: TokenType;
  amount: number;
  value: number;
  fullName: string;
};
