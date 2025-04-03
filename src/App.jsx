import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Nav from "./Components/Elements/Nav";
import UploadLandingpage from "./Components/Upload/UploadLandingpage";
import Gallery from "./Components/Upload/Gallery";
const App = () => {
  return (<>
  <Router>
    <Routes>
      <Route path="/" element={<Nav/>} />
      <Route path="/upload" element={<UploadLandingpage/>} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  </Router>
  </>)

};

export default App;
