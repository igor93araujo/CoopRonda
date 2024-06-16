'use client';

import { IconButton } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { NavOptions } from '../NavOptions/NavOptions';

const drawerWidth = 200;
interface Props {
  onNavigate: (pageId: string) => void;
  activePage: string;
}


export const ResponsiveDrawer = ({onNavigate, activePage}: Props) =>  {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <>
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="end"
      size='large'
      onClick={() => setOpenDrawer(true)}
      sx={{ mr: 2, display: { sm: 'none' } }}
     >
       <MenuIcon />
    </IconButton>
      <Drawer
        variant="temporary"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        ModalProps={{
          keepMounted: true,
        }}
        anchor="right"
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
          >
        <NavOptions onNavigate={onNavigate} smallDevice={true} activePage={activePage} setOpenDrawer={setOpenDrawer}/>
      </Drawer>
    </>
  );
}
