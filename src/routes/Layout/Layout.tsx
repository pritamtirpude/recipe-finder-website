import { Fragment } from 'react';
import { Outlet } from 'react-router';
import { Footer, Navbar } from '../../components';

const Layout = () => {
  return (
    <Fragment>
      <Navbar />

      <main className="min-h-screen lg:mx-auto lg:max-w-[1192px]">
        <Outlet />
      </main>

      <Footer />
    </Fragment>
  );
};

export default Layout;
