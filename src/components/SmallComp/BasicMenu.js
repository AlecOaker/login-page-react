import * as React from 'react';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import { WELCOME_ROUTE } from '../utils/consts';
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from '../..';

export default function BasicMenu() {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function stringToColor(string) {
		let hash = 0;
		let i;

		/* eslint-disable no-bitwise */
    if (user.displayName !== null) {
      for (i = 0; i < string.length; i += 1) {
			hash = string.charCodeAt(i) + ((hash << 5) - hash);
		}
    }

		let color = '#';

		for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.slice(-2);
		}
		/* eslint-enable no-bitwise */

		return color;
  }
  
  	function stringAvatar(name) {
		if (user) {
			while (user.displayName !== null) {
			return {
				sx: {
					bgcolor: stringToColor(name),
				},
				children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
			};
		}
		}
	}
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Avatar {...stringAvatar(user ? user.displayName : "fsd sf")} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <NavLink to={WELCOME_ROUTE}>
        	<MenuItem onClick={() => auth.signOut()}>Logout</MenuItem>
        </NavLink>

        
      </Menu>
    </div>
  );
}
