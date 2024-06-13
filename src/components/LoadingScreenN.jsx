import React from 'react';
import ProgressBar from './ProgressBar';

function LoadingScreen() {
  return (
    <div className="loading-screen d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="display-1 mb-3">FinCalc</h1>
      <h2><ProgressBar /></h2>
    </div>
  );
}

export default LoadingScreen;

