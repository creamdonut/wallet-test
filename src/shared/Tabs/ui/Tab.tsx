import React, { useState } from 'react';
import classNames from 'classnames';

import { TabProps } from '../model';
import styles from './tabs.module.css';

export const Tab: React.FC<TabProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className={styles.tabContainer}>
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={classNames(styles.tab, {
              [styles.active]: activeTab === index,
            })}
            onClick={() => handleClick(index)}
          >
            {child.props.title}
          </div>
        ))}
      </div>
      <div>{React.Children.toArray(children)[activeTab]}</div>
    </div>
  );
};
