
import React from 'react';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/MyTodos_Home/mtHome.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <Home />
      <Footer></Footer>
    </>
  );
}

export default App;
