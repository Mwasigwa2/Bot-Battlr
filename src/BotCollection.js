import React from 'react';
import Bot from './Bot';

const BotCollection = ({ bots, onEnlist, onRelease, onDischarge }) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-list">
        {bots.map((bot) => (
          <Bot
            key={bot.id}
            bot={bot}
            onEnlist={onEnlist}
            onRelease={onRelease}
            onDischarge={onDischarge}
          />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;