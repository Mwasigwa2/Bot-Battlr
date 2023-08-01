import React from 'react';

const Bot = ({ bot, onEnlist, onRelease, onDischarge }) => {
  const { id, name, type, inArmy } = bot;

  return (
    <div className="bot-card" style={{width: '100px'}}>
      <h3>{name}</h3>
      <p>Type: {type}</p>
      {inArmy ? (
        <button onClick={() => onRelease(id)}>Release</button>
      ) : (
        <button onClick={() => onEnlist(id)}>Enlist</button>
      )}
      <button onClick={() => onDischarge(id)}>Discharge Forever</button>
    </div>
  );
};

export default Bot;
