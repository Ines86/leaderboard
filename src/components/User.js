import React from 'react';

const url = "https://freecodecamp.com/";
const User = ({ number, userName, image, recentPoints, allPoints }) => (
  <tr>
    <td>{number}</td>
    <td className="userId">
      <a target='_blank' href={url + userName}>
        <img src={image} />
        <span className="userName">{userName}</span>
      </a>
    </td>
    <td>{recentPoints} </td>
    <td>{allPoints}</td>
  </tr>
);

export default User;