import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>My Blog</title>
    </Head>
    <main>{children}</main>
  </>
);

export default Layout;
