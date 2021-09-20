import React, { FC, Suspense } from 'react';

import { GlobalStyle, AppLoading } from './global-style';

// import { ScrollToTop, Header, Modals, Widgets, Affiliate } from './modules';
// import { Routes } from '@/routes';

// import { Notification } from '@/components';

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      {/* <ScrollToTop withButton />
      <Affiliate /> */}
      <Suspense fallback={<AppLoading />}>
        <AppLoading />
        {/* <Header />
        <Routes />
        <Modals />
        <Widgets withPortal />
        <Notification /> */}
      </Suspense>
    </>
  );
};
