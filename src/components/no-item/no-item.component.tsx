import React from 'react';

import styles from './no-item.module.scss';

const NoItem = () => {
   return (
      <div className={styles['root']}>
         <span>No item match your search</span>
      </div>
   );
};

export default NoItem;
