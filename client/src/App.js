import "./App.css";
import Briefbar from "./components/Briefbar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="container">
        <div className="row my-4">
          <Navbar />
          <Sidebar />
        </div>
        <div className="row my-4 ">
          <Briefbar />
        </div>
      </div>
    </>
  );
}

export default App;
