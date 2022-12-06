import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Schedule from "./Schedule";
import HomePage from "./HomePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
          <Route path="*" element={<h1>Component Not Found</h1>}/>
        </Route>
        <Route path="*" element={<p>Page Not Found</p>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
