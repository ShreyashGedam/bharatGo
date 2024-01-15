import "./App.css";
import AllRoutes from "./components/AllRoutes";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
