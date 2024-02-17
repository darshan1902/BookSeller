// http status codes
export const StatusCode = {
    Success: 200,
    BadRequest: 400,
    Unauthorized: 401,
    Forbidden: 403,
    Conflict: 409,
    InternalServer: 500,
  };
  
  export const colors = {
    primary: "#f14d54",
    white: "#FFFFFF",
    textColor: "#414141",
    grayBg: "#f4f4f4",
    grayText: "#666666",
    grayBorder: "#cacaca",
    lightGrayBorder: "#e5e5e5",
    lightTextColor: "#838383",
    greenText: "#80BF32",
  };
  
  export const defaultFilter = {
    pageIndex: 1,
    pageSize: 4,
    keyword: "",
  };
  
  export const RecordsPerPage = [2, 5, 10, 100];

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchRemainingTime = async () => {
      try {
        const response = await fetch('your_backend_url/getRemainingTime');
        const data = await response.json();
        setCountdown(data.remainingTime);
      } catch (error) {
        console.error('Error fetching remaining time:', error);
        // Redirect to home page if there's an error fetching the remaining time
        history.push('/');
      }
    };

    fetchRemainingTime();

    const interval = setInterval(() => {
      fetchRemainingTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [history]);

  const formatTime = (time) => {
    if (time === null) return 'Loading...';
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Countdown: {formatTime(countdown)}</h1>
    </div>
  );
};

export default CountdownTimer;
