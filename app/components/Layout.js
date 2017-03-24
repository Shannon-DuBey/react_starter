import React from 'react';

import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

class Layout extends React.Component {
  render() {
    return (
      <div id="app-wrapper">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Layout;
