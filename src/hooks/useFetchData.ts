import React from 'react';

import { useState, useEffect } from 'react';

export function useFetchData<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleRefetch = () => {
    setLoading(true);
    setError(null);
    setTimeout(() => {
      fetchData();
    }, 1000);
  };
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`);
      }
      const result = await res.json();
      setData(result);
    } catch (err) {
      setError('Something went wrong while fetching data');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 1000);
    return () => clearTimeout(timer);
  }, [url]);
  return { data, loading, error, handleRefetch };
}
