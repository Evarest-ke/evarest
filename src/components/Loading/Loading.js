import React, { useState, useEffect } from 'react';
import './Loading.css';

// Custom hook for loading timer
function useLoadingTimer(duration = 2000) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return loading;
}

function Loading() {
  return (
    <div className="loading">
      <div className="wave-loader"></div>
    </div>
  );
}

export { useLoadingTimer };
export default Loading;