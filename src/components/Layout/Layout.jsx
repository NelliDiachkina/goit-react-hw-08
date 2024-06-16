import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import Loader from '../Loader/Loader';

export default function Layout({ children }) {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
}
