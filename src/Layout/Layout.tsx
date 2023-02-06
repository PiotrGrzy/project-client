import { useState } from 'react';
import div from '@mui/material/div';
import SideBar from './SideBar';
import TopBar from './TopBar';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div sx={{ display: 'flex' }}>
      <TopBar open={open} toggleDrawer={toggleDrawer} />
      <SideBar open={open} toggleDrawer={toggleDrawer} />

      <div sx={{ mt: '64px', flexGrow: 1 }}>{children}</div>
    </div>
  );
};

export default Layout;
