import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { Header } from '@/components/header/Header';

export const metadata = {
  title: 'Speelplein Management',
  description: 'This web site is for managing children in the playground during the holidays',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="nl">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
