import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import Loader from '../Loader/Loader';
import { Toaster } from 'react-hot-toast';

export default function Layout({ children }) {
  return (
    <>
      <AppBar />
      <Toaster position="top-center" />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
}
