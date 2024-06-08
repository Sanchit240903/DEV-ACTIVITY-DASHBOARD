import { useState, useEffect } from 'react';
import { AuthorWorklogRow } from '../types/ActivityData';
import mockData from '../sample-data.json';

export const useFetchData = () => {
  const [data, setData] = useState<AuthorWorklogRow[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      setData(mockData.data.AuthorWorklog.rows);
      setLoading(false);
    }, 1000);
  }, []);

  return { data, loading };
};
