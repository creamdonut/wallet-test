import { Fragment, FC } from 'react';
import classNames from 'classnames';

import styles from './balanceView.module.css';
import { BalanceViewProps } from '../model';

export const BalanceView: FC<BalanceViewProps> = ({
  balance,
  walletAddress,
}) => {
  return (
    <Fragment>
      {/* TODO exrtact calcs from render */}
      {balance.toString().includes('.') ? (
        <div className={styles.balance}>
          ${balance.toLocaleString().split('.')[0]}.
          <span className={classNames(styles.balance, styles.cents)}>
            {balance.toLocaleString().split('.')[1]}
          </span>
        </div>
      ) : (
        <div className={styles.balance}>${balance.toLocaleString()}</div>
      )}
      <span className={styles.balanceSectionAddress}>
        {walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}
      </span>
    </Fragment>
  );
};
