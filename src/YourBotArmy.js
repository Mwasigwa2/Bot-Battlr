import React from 'react';

const YourBotArmy = ({ armyBots, onRelease, onDischarge }) => {
  return (
    <div className="container mt-4">
      <h3>Your Bot Army</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {armyBots.map((bot) => (
          <div key={bot.id} className="col">
            <div className="card">
              <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
              <div className="card-body">
                <h5 className="card-title">{bot.name}</h5>
                <p className="card-text">Health: {bot.health}</p>
                <p className="card-text">Damage: {bot.damage}</p>
                <p className="card-text">Armor: {bot.armor}</p>
                <button className="btn btn-danger mr-2" onClick={() => onRelease(bot.id)}>
                  Delete
                </button>
                <button className="btn btn-warning" onClick={() => onDischarge(bot.id)}>
                  Remove from Army
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
