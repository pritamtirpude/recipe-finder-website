import { Fragment } from 'react';
import { Outlet } from 'react-router';
import { Footer, Navbar } from '../../components';
import useScrollToTop from '../../hooks/useScrollToTop';

const Layout = () => {
  useScrollToTop();

  return (
    <Fragment>
      <Navbar />

      <main className="px-4 md:px-8 lg:mx-auto lg:max-w-[1192px] lg:px-0 xl:max-w-[1440px]">
        <Outlet />
      </main>

      <Footer />
    </Fragment>
  );
};

export default Layout;
