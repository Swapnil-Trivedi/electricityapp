import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="container">
        <Navbar/>
        <div className="row my-5">
          <div className="col">
            <Sidebar/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
