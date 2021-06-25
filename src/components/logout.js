import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';

function Logout() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();
  return isAuthenticated && (
    <Button className="menuButton" id="menuButton" onClick={() => {
      logout({ returnTo: window.location.origin });
    }}>Log out</Button>
  );
}
export default Logout;