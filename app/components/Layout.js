import React from 'react';


import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

class Layout extends React.Component {
  render() {
    return (
      <div id="app-wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Layout;
