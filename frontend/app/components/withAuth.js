import { useRouter } from 'next/router';
import { useEffect, useContext } from 'react';
import AuthContext from '../contexts/AuthContext'; // Assuming you have an AuthContext

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { isAuthenticated, loading } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
      if (!loading && !isAuthenticated) {
        router.push('/login');
      }
    }, [isAuthenticated, loading]);

    if (loading) {
      return <div>Loading...</div>;
    }

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
