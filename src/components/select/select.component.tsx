import classNames from 'classnames';
import React from 'react';

import styles from './select.module.scss';

interface IValues {
   label: string;
   value: string;
}

interface IDropDownProps {
   variant?: 'outlined' | 'contained';
   defaultValue?: '';
   values: IValues[] | [];
   className?: string;
}

const Select = ({defaultValue, values, className}: IDropDownProps): JSX.Element => {
   const [active, setActive] = React.useState(true);

   const handleDropdown = (): void => {
      setActive(prev => !prev);
   };

   return (
      <div className={classNames(styles['select'], {[styles['select--active']]: active})}>
         <div className={styles['button']} onClick={handleDropdown}>
            <span className={styles['button__text']}>Select your option</span>
            <i className={styles['button__icon']} />
         </div>
         <ul
            className={classNames(styles['options-wrapper'], {
               [styles['options-wrapper--active']]: active,
            })}
         >
            {values.map((item, index) => (
               <li key={index.toString()} className={styles['option']}>
                  <i className={styles['option__icon']} style={{color: '#E1306C'}} />
                  <span className={styles['option__text']}>{item.label}</span>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Select;
