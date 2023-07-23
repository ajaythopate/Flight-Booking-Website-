import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/search/search";
import Support from "./components/support/Support";
// import Subscribes from "./components/Subscribes";
// import Travelers from "./components/Travelers";
// import Lounge from "./components/Lounge";
// import Info from "./components/Info";
// import Footer from "./components/Footer";


function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <Search />
      <Support />
      {/* <Subscribes />
      <Travelers />
      <Lounge />
      <Info />
      <Footer /> */}
     
    </div>
  );
}

export default App;
