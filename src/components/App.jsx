import { Route, Routes } from 'react-router-dom';
import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './store/auth';
import Header from './Header/Header';
import HomePage from 'pages/HomePage/HomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import Contacts from 'pages/Contacts';
import PrivateRoute from 'routes/PrivatRoutes/PrivateRoutes';
import PublicRoute from 'routes/PublicRoutes/PublicRoutes';
import { ToastContainer } from 'react-toastify';
import Loader from './Loader/Loader';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div
        style={{
          height: '100vh',
          fontSize: 20,
          color: '#010101',
          margin: 15,
        }}
      >
        <Header />
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />
          </Routes>
        </Suspense>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    )
  );
}

export default App;
