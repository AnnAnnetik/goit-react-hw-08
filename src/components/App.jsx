import { Routes, Route } from 'react-router-dom';

import { Suspense, lazy, useEffect } from 'react';
import Loader from './Loader/Loader';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
// https://stackblitz.com/edit/vitejs-vite-ks9y3b?file=src%2Fcomponents%2FApp.jsx
