// useImageVersion.js
import { useState, useEffect } from 'react';

export const useImageVersion = (baseUrl) => {
  const [version, setVersion] = useState(1);

  useEffect(() => {
    // Check for updates every minute (you can adjust this interval)
    const intervalId = setInterval(() => {
      setVersion(v => v + 1);
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return `${baseUrl}?${version}`;
};