import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';

import { logOut } from 'redux/auth/operations';
const CardWraper = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
`;
const SharedLayout = () => {
  const logIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <>
      <CardWraper>
        <StyledLink to="/goit-react-hw-08-phonebook">Home</StyledLink>
        {logIn ? (
          <>
            <StyledLink to="contacts">Contacts</StyledLink>
            <Button
              type="button"
              sx={{
                color: 'black',
                fontSize: '15px',
                fontWeight: '700',
              }}
              onClick={() => dispatch(logOut())}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <StyledLink to="login">Login</StyledLink>
            <StyledLink to="register">Register</StyledLink>
          </>
        )}
      </CardWraper>
      <Suspense fallback={<h2>SRy</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
