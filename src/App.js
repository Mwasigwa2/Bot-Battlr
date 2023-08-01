import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {
  const [botCollection, setBotCollection] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => {
        setBotCollection(data.bots);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const enlistBot = (id) => {
    const botToAdd = botCollection.find((bot) => bot.id === id);
    if (botToAdd && !botToAdd.inArmy) {
      setYourBotArmy((prevArmy) => [...prevArmy, botToAdd]);
      setBotCollection((prevCollection) =>
        prevCollection.map((bot) =>
          bot.id === id ? { ...bot, inArmy: true } : bot
        )
      );
    }
  };

  const releaseBot = (id) => {
    setYourBotArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== id));
    setBotCollection((prevCollection) =>
      prevCollection.map((bot) =>
        bot.id === id ? { ...bot, inArmy: false } : bot
      )
    );
  };

  const dischargeBot = (id) => {
    setYourBotArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== id));
    setBotCollection((prevCollection) => prevCollection.filter((bot) => bot.id !== id));
  };

  return (
    <div className="App">
      <h1>Galactic Bot Army</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Main Collection</h2>
            <BotCollection bots={botCollection} onEnlist={enlistBot} />
          </div>
          <div className="col">
            <h2>Your Bot Army</h2>
            <YourBotArmy armyBots={yourBotArmy} onRelease={releaseBot} onDischarge={dischargeBot} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
