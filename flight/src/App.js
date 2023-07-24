import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/search/search";
import Support from "./components/support/Support";
import Info from "./components/information/Info";
import Lounge from "./components/Lounge/Lounge";

// import Subscribes from "./components/Subscribes";
// import Travelers from "./components/Travelers";
// import Footer from "./components/Footer";


function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />

{/* 
      <Subscribes />
      <Travelers />
      <Footer /> */}
     
    </div>
  );
}

export default App;
