import React from 'react';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Contex/AuthProvider';
import routes from './Router/Routes/Routes';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <Toaster />
      <AuthProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
