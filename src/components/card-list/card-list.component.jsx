import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((mon) => {
        return <Card monster={mon} key={mon.id} />;
      })}
    </div>
  );
};

// {
//   filteredMoster.map((monster) => {
//   return (
//     <div key={monster.id}>
//       <h1>{monster.name}</h1>
//     </div>
//   );
// })
// }

export default CardList;
