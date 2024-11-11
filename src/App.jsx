
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import CharacterList from './components/CharacterList';
import NotFound from './components/NotFound';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetail from './components/CharacterDetail';
import Comics from './components/Comics';
import './App.css';
import NavBar from './components/NavBar';





const App = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);
  const handleCharacterSelect = (id) => {
    setSelectedCharacterId(id);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/characters">
          <BrowseCharacters handleCharacterSelect={handleCharacterSelect} />
        </Route>
        <Route path="/character/:id">
          <CharacterDetail />
        </Route>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );

};


export default App;