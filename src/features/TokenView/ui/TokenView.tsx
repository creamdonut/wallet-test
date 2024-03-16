import { FC } from 'react';

import { getCurrencyIcon } from '@/shared/lib/getCurrencyIcon';
import styles from './tokenView.module.css';
import { TokenViewProps } from '../model';

export const TokenView: FC<TokenViewProps> = ({ tokens }) => {
  return (
    <div className={styles.tokenSection}>
      {tokens.map((token) => (
        <div className={styles.token} key={token.name}>
          <div className={styles.tokenInfo}>
            <span className={styles.tokenIcon}>
              <img src={getCurrencyIcon(token.name)} />
            </span>
            <div className={styles.tokenName}>
              <span className={styles.tokenShortname}>
                {token.amount.toLocaleString()} {token.name}
              </span>
              <span className={styles.tokenFullname}>{token.fullName}</span>
            </div>
          </div>
          <span className={styles.tokenValue}>
            ${token.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};
