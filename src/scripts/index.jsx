import React from 'react';
import { createRoot } from 'react-dom/client';
import { css } from '@oddcommon/utils';

import Styles from './index.module.scss';

// Import Components
import { Logo } from '@components/Logo';

// App
const App = () => {
  return (
    <>
      <Logo className={css(Styles.logo)} />
    </>
  );
};

// Create root and render
const domContainer = document.querySelector('#app');
const root = createRoot(domContainer);
root.render(<App />);
