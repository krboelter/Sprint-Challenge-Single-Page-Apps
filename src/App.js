import React, { useEffect } from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import WelcomePage from "./components/WelcomePage";

// useEffect(() => {
  //   axios.get(`https://rickandmortyapi.com/api/character/`)
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => console.log(err))
  // }, [])

export default function App() {

  return (
    <main>
      <Header />
      <TabNav />
      <WelcomePage />

    </main>
  );
}
