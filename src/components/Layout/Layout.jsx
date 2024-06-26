import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// export const Layout = ({ children }) => {
//   return (
//     <div>
//       <AppBar />

//       <main>{children}</main>
//     </div>
//   );
// };
export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
