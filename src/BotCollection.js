import React from 'react';

const BotCollection = ({ bots, onEnlist }) => {
  return (
    <div className="container mt-4" style={{width: '920px'}}>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {bots.map((bot) => (
          <div key={bot.id} className="col">
            <div className="card" style={{width: '200px'}}>
              <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
              <div className="card-body">
                <h5 className="card-title">{bot.name}</h5>
                <p className="card-text">Health: {bot.health}</p>
                <p className="card-text">Damage: {bot.damage}</p>
                <p className="card-text">Armor: {bot.armor}</p>
                <button className="btn btn-primary" onClick={() => onEnlist(bot.id)}>
                  Add to Army
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
