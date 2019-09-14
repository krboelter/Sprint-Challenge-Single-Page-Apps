import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { Switch, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
// import LocationsList from "./components/LocationsList.js";


export default function App() {
  // useEffect(() => {
  //     axios.get(`https://rickandmortyapi.com/api/character/`)
  //       .then(res => {
  //         console.log(res)
  //       })
  //       .catch(err => console.log(err))
  //   }, [])
  
  return (
    <main>
      <Header />
      <TabNav />
      
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/characters" component={CharacterList} />
        <Route exact path="/locations" component={LocationsList} />
        {/* <Router exact path="/episodes" component={WelcomePage} /> */}
      </Switch>
    </main>
  );
}
