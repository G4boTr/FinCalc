import React, { useState, useEffect } from 'react';
import '../../assets/styles/ProgressBar.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fillProgress = () => {
      let startTime = Date.now();
      const endTime = startTime + 2000; 
      
      const updateProgress = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progressValue = Math.min(1, elapsed / 2000); 
        setProgress(progressValue);
        
        if (now < endTime) {
          requestAnimationFrame(updateProgress);
        }
      };

      requestAnimationFrame(updateProgress);
    };

    fillProgress();
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <div className="progress-container">
        <h1>Cargando...</h1>
        <div className="progress-bar bg-success" role="progressbar" style={{ width: `${progress * 100}%` }}></div>
    </div>
  );
};

export default ProgressBar;
