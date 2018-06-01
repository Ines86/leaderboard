import React from 'react';
import User from './User';

const Leaderboard = (props) => (
  <div>
    <table id="leaderboard">
      <thead>
        <tr>
          <th>No.</th>
          <th>Camper Name</th>
          <th
            onClick={props.handleSortByRecent}
            className={props.sortedBy === 'recent' ? 'points sorted' : 'points'}
          >Points in past 30 days</th>
          <th
            onClick={props.handleSortByAlltime}
            className={props.sortedBy === 'alltime' ? 'points sorted' : 'points'}
          >All time points</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((user, index) => (
          <User
            key={index}
            number={index + 1}
            userName={user.username}
            recentPoints={user.recent}
            allPoints={user.alltime}
            image={user.img}
          />
        ))
        }
      </tbody>
    </table>
  </div>
);

export default Leaderboard;