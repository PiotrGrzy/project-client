import { useState } from 'react';

import { useUserQuery } from '@/services/users.service';

import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

const Layout = ({ children, isLoggedIn }: { children?: React.ReactNode; isLoggedIn: boolean }) => {
  // const [open, setOpen] = useState(false);
  // const user = useUserQuery();
  // const toggleDrawer = () => {
  //   setOpen(!open);
  // };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r bg-base-200">
      {isLoggedIn && <Header />}
      <div className="flex-1 flex flex-col sm:flex-row max-w-screen-2xl mx-auto w-full ">
        <main className="flex-1 p-2">{children}</main>
        {isLoggedIn && <SideBar />}
      </div>
      {isLoggedIn && <Footer />}
    </div>
  );
};

export default Layout;
