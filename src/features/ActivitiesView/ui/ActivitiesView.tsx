import { FC, Fragment } from 'react';
import { getCurrencyIcon } from '@/shared/lib/getCurrencyIcon';
import { getExpensesIcon } from '@/shared/lib/getExpensesIcon';
import { ActivitiesViewProps } from '../model';
import dayjs from 'dayjs';
import styles from './activitiesView.module.css';

export const ActivitiesView: FC<ActivitiesViewProps> = ({ activities }) => {
  return (
    <div className={styles.activitySection}>
      {activities.map((activity) => (
        <Fragment key={activity.month}>
          <div className={styles.monthLabel}>{activity.month}</div>
          {activity.items.map((item, index) => (
            <div className={styles.activityItem} key={index}>
              <div className={styles.activityIcon}>
                <img src={getCurrencyIcon(item.name)} />
                <img
                  className={styles.activityIconExpenses}
                  src={getExpensesIcon(item.type)}
                />
              </div>
              <div className={styles.activityDetails}>
                <div className={styles.activityType}>{item.type}</div>
                <div className={styles.activityAddress}>
                  {item.type === 'Withdraw'
                    ? `To ${item.address}`
                    : `From ${item.address}`}
                </div>
              </div>
              <div className={styles.activityInfo}>
                <div
                  className={`${styles.activityAmount} ${
                    item.type === 'Withdraw' ? '' : styles.positive
                  }`}
                >
                  {item.type === 'Withdraw' ? '-' : '+'}
                  {item.amount} {item.name}
                </div>
                <div className={styles.activityDate}>
                  {/* TODO extract logic from render */}
                  {dayjs(item.date).format('DD MMM HH:MM')}
                </div>
              </div>
            </div>
          ))}
        </Fragment>
      ))}
    </div>
  );
};
