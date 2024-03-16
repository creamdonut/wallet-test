import depositIcon from '@/shared/icons/deposit.svg';
import sendIcon from '@/shared/icons/send.svg';
import buyIcon from '@/shared/icons/buy.svg';
import { ButtonsType } from '../../features/Wallet/model';

export const getButtonIcon = (buttonType: ButtonsType) => {
  switch (buttonType) {
    case 'deposit':
      return depositIcon;
    case 'send':
      return sendIcon;
    case 'buy':
      return buyIcon;
    default:
      return '';
  }
};
