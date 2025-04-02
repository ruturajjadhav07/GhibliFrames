import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Nav from "./Components/Elements/Nav";
import UploadLandingpage from "./Components/Upload/UploadLandingpage";
const App = () => {
  return (<>
  <Router>
    <Routes>
      <Route path="/" element={<Nav/>} />
      <Route path="/upload" element={<UploadLandingpage/>} />
    </Routes>
  </Router>
  </>)

};

export default App;
