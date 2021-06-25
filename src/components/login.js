import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';

function Login() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();
  return !isAuthenticated && (
    <Button id="action" onClick={loginWithRedirect}>Log in</Button>
  );
}
export default Login;