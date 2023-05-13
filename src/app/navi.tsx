'use client'

import { Link, Menu } from '@arco-design/web-react';
import { IconHeartFill } from '@arco-design/web-react/icon';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

function Navi() {
  return (
    // <Router>
    <div className='menu-demo'>
      <Menu mode='horizontal'>
        
        <MenuItem key='1'>
          <Link href={"/"}>FaceMash</Link>
        </MenuItem>
        <MenuItem key='2'>
          <Link href={'/rank'}>RankList</Link>
        </MenuItem>
      </Menu>
    
    </div>
    // </Router>
  );
}

export default Navi;