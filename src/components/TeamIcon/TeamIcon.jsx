import React from 'react';

const TeamIcon = ({ team }) => {
  switch (team) {
    case 'Cruel Pumas':
      return <div className='team-icon team-pumas' alt={team} title={team} />;
    case 'Shining Angels':
      return <div className='team-icon team-angels' alt={team} title={team} />;
    case 'River City':
      return (
        <div className='team-icon team-rivercity' alt={team} title={team} />
      );
    case 'Mystic Unicorns':
      return (
        <div
          className='team-icon team-mystic-unicorns'
          alt={team}
          title={team}
        />
      );
    case 'Zenonia Knights':
      return (
        <div
          className='team-icon team-zenonia-knights'
          alt={team}
          title={team}
        />
      );
    case 'Forest Elves':
      return (
        <div className='team-icon team-forest-elves' alt={team} title={team} />
      );
    case 'Summoners War':
      return (
        <div className='team-icon team-summoners-war' alt={team} title={team} />
      );
    default:
      return null;
  }
};

export default TeamIcon;
