import { useState } from 'react';

import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const loggedIn = true;
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-sky-700 to-sky-900 text-sky-50">
      <Header />
      <div className="flex-1 flex flex-col sm:flex-row max-w-screen-2xl mx-auto w-full ">
        <main className="flex-1 p-2">{children}</main>
        {loggedIn && <SideBar />}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
