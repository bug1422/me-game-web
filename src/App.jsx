import './App.css';
import AllRoutes from './routes/Routes';

function App() {
  if (import.meta.env.VITE_ENV === "testing")
    console.log("Running in testing env")
  
  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
