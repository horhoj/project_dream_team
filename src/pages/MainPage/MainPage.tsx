import { FC } from 'react';
import { Button } from '@components/Button';
import styles from './MainPage.module.scss';

export const MainPage: FC = () => {
  return (
    <div className={styles.wrap}>
      <Button>test</Button>
    </div>
  );
};
