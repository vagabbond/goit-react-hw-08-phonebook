import { Route, Routes } from 'react-router';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestictedRoute';

import SharedLayout from './SharedLayout';
import { refreshUser } from 'redux/auth/operations';
const Login = lazy(() => import('./Login/Login'));
const Register = lazy(() => import('./Register/Register'));
const Home = lazy(() => import('./Home/Home'));
const Phonebook = lazy(() => import('./phonebook/Phonebook'));
const PhonebookList = lazy(() => import('./phonebookList/PhonebookList'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook" element={<SharedLayout />}>
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
