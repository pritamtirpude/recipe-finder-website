import { Fragment } from 'react';
import { Outlet } from 'react-router';
import { Footer, Navbar } from '../../components';

const Layout = () => {
  return (
    <Fragment>
      <Navbar />

      <main className="px-4 md:px-8 lg:mx-auto lg:max-w-[1440px] lg:px-0 lg:max-2xl:px-8">
        <Outlet />
      </main>

      <Footer />
    </Fragment>
  );
};

export default Layout;
