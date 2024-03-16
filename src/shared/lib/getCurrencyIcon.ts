import tonIcon from '@/shared/icons/ton.svg';
import bitcoinIcon from '@/shared/icons/bitcoin.svg';
import usdtIcon from '@/shared/icons/usdt.svg';

import { TokenType } from '@/entities/token';

export const getCurrencyIcon = (type: TokenType) => {
  switch (type) {
    case 'TON':
      return tonIcon;
    case 'DFC':
      return bitcoinIcon;
    case 'USDT':
      return usdtIcon;
  }
};
