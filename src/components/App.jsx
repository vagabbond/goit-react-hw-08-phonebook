import { Route, Routes } from 'react-router';
import { lazy } from 'react';

import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestictedRoute';

import SharedLayout from './SharedLayout';

const Login = lazy(() => import('./Login/Login'));
const Register = lazy(() => import('./Register/Register'));
const Home = lazy(() => import('./Home/Home'));
const Phonebook = lazy(() => import('./phonebook/Phonebook'));
const PhonebookList = lazy(() => import('./phonebookList/PhonebookList'));

export const App = () => {
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
