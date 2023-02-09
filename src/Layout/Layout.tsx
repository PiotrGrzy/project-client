import { useState } from 'react';

import { useUserQuery } from '@/services/users.service';

import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const user = useUserQuery();
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r bg-base-200">
      {user.data && <Header />}
      <div className="flex-1 flex flex-col sm:flex-row max-w-screen-2xl mx-auto w-full ">
        <main className="flex-1 p-2">{children}</main>
        {user.data && <SideBar />}
      </div>
      {user.data && <Footer />}
    </div>
  );
};

export default Layout;
