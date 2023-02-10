import { Router } from '@router/router';
import React from 'react';
import styles from './App.module.scss';

export const App: React.FC = () => {
  return (
    <>
      <div className={styles.wrap}>
        <Router />
      </div>
    </>
  );
};
