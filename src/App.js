import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

function App(){
  return(
    <div>
      <Header />
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
export default App;