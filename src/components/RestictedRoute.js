import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/goit-react-hw-08-phonebook/home',
}) => {
  const isLoggedIn = useSelector(state => {
    return state.auth.isLoggedIn;
  });
  console.log(redirectTo);
  return isLoggedIn ? (
    <Navigate to={`/goit-react-hw-08-phonebook${redirectTo}`} />
  ) : (
    Component
  );
};
