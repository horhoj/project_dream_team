import { Router } from '@router/router';
import React from 'react';

export const App: React.FC = () => {
  return (
    <>
      <div className={'app__wrap'}>
        <Router />
      </div>
    </>
  );
};
