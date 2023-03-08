import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/goit-react-hw-08-phonebook/home',
}) => {
  const isLoggedIn = useSelector(state => {
    return state.auth.isLoggedIn;
  });
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? (
    <Navigate to={`/goit-react-hw-08-phonebook${redirectTo}`} />
  ) : (
    Component
  );
};
