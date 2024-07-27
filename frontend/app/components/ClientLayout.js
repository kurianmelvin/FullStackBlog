import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ClientLayout = ({ children }) => (
  <>
    {children}
    <ToastContainer />
  </>
);

export default ClientLayout;
