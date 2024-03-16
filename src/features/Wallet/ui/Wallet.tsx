import React from 'react';

import { PRIMARY_BUTTONS, WalletAppProps } from '../model';
import styles from './wallet.module.css';

import { TokenView } from '@/features/TokenView';
import { ActivitiesView } from '@/features/ActivitiesView';
import { getButtonIcon } from '@/shared/lib/getButtonIcon';
import { Button } from '@/shared/Button';
import { CustomTabs } from '@/shared/Tabs';
import { BalanceView } from '@/features/BalanceView';

const { Tab, TabPane } = CustomTabs;

export const Wallet: React.FC<WalletAppProps> = ({
  balance,
  tokens,
  activities,
  walletAddress,
}) => {
  return (
    <div className={styles.walletApp}>
      <div className={styles.balanceSection}>
        <BalanceView balance={balance} walletAddress={walletAddress} />
      </div>
      <div className={styles.controlSection}>
        <div className={styles.buttons}>
          {PRIMARY_BUTTONS.map((button) => (
            <Button
              icon={getButtonIcon(button.type)}
              text={button.text}
              key={button.text}
              type={button.type === 'deposit' ? 'primary' : 'secondary'}
            />
          ))}
        </div>
        <div className={styles.buttons}>
          <Button
            icon={getButtonIcon('deposit')}
            text='Buy DFC'
            alt='buy dfc'
            type='primary'
          />
        </div>
        <Tab>
          <TabPane title='Tokens'>
            <TokenView tokens={tokens} />
          </TabPane>
          <TabPane title='Activity'>
            <ActivitiesView activities={activities} />
          </TabPane>
        </Tab>
      </div>
    </div>
  );
};
