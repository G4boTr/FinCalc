import React, { useState, useEffect } from 'react';
import '../../assets/styles/ProgressBar.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fillProgress = () => {
      let chargeTime = 2000;
      let startTime = Date.now();
      const endTime = startTime + chargeTime; 
      
      const updateProgress = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progressValue = Math.min(1, elapsed / chargeTime); 
        setProgress(progressValue);
        
        if (now < endTime) {
          requestAnimationFrame(updateProgress);
        }
      };

      requestAnimationFrame(updateProgress);
    };

    fillProgress();
  }, []);

  return (
    <div className="progress-container">
        <h1>Cargando...</h1>
        <div className="progress-bar bg-success" role="progressbar" style={{ width: `${progress * 100}%` }}></div>
    </div>
  );
};

export default ProgressBar;
