import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { Switch, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import EpisodesList from "./components/EpisodesList.js";


export default function App() {

  return (
    <main>
      <Header />
      <TabNav />

      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/characters" component={CharacterList} />
        <Route exact path="/locations" component={LocationsList} />
        <Route exact path="/episodes" component={EpisodesList} />
      </Switch>
    </main>
  );
}
