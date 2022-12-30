import { Fragment } from 'react';
import Navbar from '../../navbarfolder/NavBar';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main style={{minHeight: '100vh'}}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
