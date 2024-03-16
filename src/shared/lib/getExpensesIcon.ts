import { ActivityType } from '@/entities/activities';

import incomeIcon from '@/shared/icons/income.svg';
import outcomeIcon from '@/shared/icons/outcome.svg';

export const getExpensesIcon = (type: ActivityType) => {
  switch (type) {
    case 'Deposit':
      return incomeIcon;
    case 'Withdraw':
      return outcomeIcon;
  }
};
