"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClientLayout from '../components/ClientLayout'; 
import Layout from '../layout';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, formData);
      toast.success('Login successful!');
    } catch (err) {
      toast.error('Login failed!');
    }
  };

  return (
    <Layout>
      <ClientLayout>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
          <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </ClientLayout>
    </Layout>
  );
};

export default Login;
