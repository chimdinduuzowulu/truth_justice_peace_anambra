import React from 'react';
import Footer from '../layouts/Footer';
import Nav from '../layouts/Nav';

const Layout = (props) => {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
