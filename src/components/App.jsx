import { Route, Routes } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';

import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestictedRoute';
import { refreshUser } from 'redux/auth/operations';

// import { Login } from './Login/Login';
// import { Register } from './Register/Register';
// import { Home } from './Home/Home';
import SharedLayout from './SharedLayout';
// import { Phonebook } from './phonebook/Phonebook';
// import { PhonebookList } from './phonebookList/PhonebookList';
const Login = lazy(() => import('./Login/Login'));
const Register = lazy(() => import('./Register/Register'));
const Home = lazy(() => import('./Home/Home'));
// const SharedLayout = lazy(() => import('./SharedLayout'));
const Phonebook = lazy(() => import('./phonebook/Phonebook'));
const PhonebookList = lazy(() => import('./phonebookList/PhonebookList'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
    return;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index path="home" element={<Home />} />

        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />

        <Route
          path="register"
          element={
            <RestrictedRoute redictedTo="/contacts" component={<Register />} />
          }
        />

        <Route
          path="contacts"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={
                <>
                  <Phonebook></Phonebook>
                  <PhonebookList></PhonebookList>
                </>
              }
            />
          }
        />
      </Route>
    </Routes>
  );
};
