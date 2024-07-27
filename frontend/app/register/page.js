"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClientLayout from '../components/ClientLayout';
import Layout from '../layout';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, formData);
      toast.success('Registration successful!');
    } catch (err) {
      toast.error('Registration failed!');
    }
  };

  return (
    <Layout>
      <ClientLayout>
        <h1>Register</h1>
        <form onSubmit={onSubmit}>
          <input type="text" name="username" value={username} onChange={onChange} placeholder="Username" required />
          <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
          <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
      </ClientLayout>
    </Layout>
  );
};

export default Register;
