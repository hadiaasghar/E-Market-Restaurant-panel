import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Custom hook to manage loading state
const useLoading = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading time

    return () => clearTimeout(timeout);
  }, [location]);

  return loading;
};

export default useLoading;
