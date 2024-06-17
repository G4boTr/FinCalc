import ProgressBar from './ProgressBar';

function LoadingScreen() {

  const preventContextMenu = (event) => {
    event.preventDefault();
    
  }

  return (
    <div onContextMenu={ preventContextMenu } className="loading-screen d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="display-1 mb-3">FinCalc</h1>
      <ProgressBar />
    </div>
  );
}

export default LoadingScreen;

