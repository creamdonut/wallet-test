import { FC } from 'react';

import { SkeletonProps, TOKEN_NUMBERS } from '../model';
import { SkeletonItem } from './SkeletonItem';

import styles from './skeleton.module.css';

export const Skeleton: FC<SkeletonProps> = ({
  tokenNumber = TOKEN_NUMBERS,
}) => {
  return (
    <div>
      <div className={styles.headerSkeleton}>
        <SkeletonItem width='160px' height='30px' />
        <SkeletonItem width='120px' height='20px' />
      </div>
      <div className={styles.mainSkeletonRow}>
        <SkeletonItem width='130px' height='50px' />
        <SkeletonItem width='130px' height='50px' />
        <SkeletonItem width='70px' height='50px' />
      </div>
      <div className={styles.fullWidthSkeleton}>
        <SkeletonItem width='100%' height='30px' />
      </div>
      <div className={styles.tokenRowsContainer}>
        {Array.from({ length: tokenNumber }).map((_, key) => (
          <div key={key} className={styles.tokenRow}>
            <div className={styles.tokenRowLeft}>
              <SkeletonItem width='40px' height='40px' isCircle />
              <div className={styles.tokenRowLeftColumn}>
                <SkeletonItem width='120px' height='17px' />
                <SkeletonItem width='90px' height='12px' />
              </div>
            </div>
            <div className={styles.tokenRowRight}>
              <SkeletonItem width='50px' height='17px' />
              <SkeletonItem width='34px' height='12px' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
