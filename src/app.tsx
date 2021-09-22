import { Suspense } from 'react';

import { Slider, Categories } from '@/modules';

import { Notification } from '@/components';

import { GlobalStyle, AppLoading } from './global-style';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<AppLoading />}>
        <Slider />
        <Notification />
        <Categories />
      </Suspense>
    </>
  );
};
