import { FC } from 'react';

import { SkeletonItemProps } from '../model';

import styles from './skeleton.module.css';

export const SkeletonItem: FC<SkeletonItemProps> = ({
  width,
  height,
  isCircle,
  roundPx = '32px',
}) => {
  return (
    <div
      className={styles.skeletonItem}
      style={{
        width: `${width}`,
        height: `${height}`,
        borderRadius: isCircle ? '50%' : `${roundPx}`,
        backgroundColor: '#EDF1F5',
      }}
    ></div>
  );
};
