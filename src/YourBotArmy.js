import React from 'react';
import Bot from './Bot';

const YourBotArmy = ({ armyBots, onRelease, onDischarge }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {armyBots.map((bot) => (
          <Bot
            key={bot.id}
            bot={bot}
            onRelease={onRelease}
            onDischarge={onDischarge}
          />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
