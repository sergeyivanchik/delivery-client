import React, { FC, Suspense } from 'react';

import { Slider } from '@/modules';

import { GlobalStyle, AppLoading } from './global-style';

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<AppLoading />}>
        <Slider />
      </Suspense>
    </>
  );
};
