import React, { useState } from "react";
import Card from "./Card";

function Cards() {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/html.png", stat: "" },
      { id: 1, img: "/img/html.png", stat: "" },
      { id: 2, img: "/img/css.png", stat: "" },
      { id: 2, img: "/img/css.png", stat: "" },
      { id: 3, img: "/img/js.png", stat: "" },
      { id: 3, img: "/img/js.png", stat: "" },
      { id: 4, img: "/img/scss.png", stat: "" },
      { id: 4, img: "/img/scss.png", stat: "" },
      { id: 5, img: "/img/react.png", stat: "" },
      { id: 5, img: "/img/react.png", stat: "" },
      { id: 6, img: "/img/vue.png", stat: "" },
      { id: 6, img: "/img/vue.png", stat: "" },
      { id: 7, img: "/img/angular.png", stat: "" },
      { id: 7, img: "/img/angular.png", stat: "" },
      { id: 8, img: "/img/nodejs.png", stat: "" },
      { id: 8, img: "/img/nodejs.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );
  const [prev, setPrev] = useState(-1);
  const [isClickable, setIsClickable] = useState(true);
  const [isOver, setIsOver] = useState(false);

  function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";

      const isGameOver = items.every((item) => item.stat === "correct");

      isGameOver && setIsOver(true);

      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";

      setItems([...items]);
      setIsClickable(false);

      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";

        setItems([...items]);
        setPrev(-1);
        setIsClickable(true);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev !== id && isClickable) {
      if (prev === -1) {
        items[id].stat = "active";

        setItems([...items]);
        setPrev(id);
      } else {
        check(id);
      }
    }
  }

  return (
    <div className="container">
      {!isOver ? (
        items.map((item, index) => (
          <Card key={index} item={item} id={index} handleClick={handleClick} />
        ))
      ) : (
        <div className="game-won">You won, refresh to start again!</div>
      )}
    </div>
  );
}

export default Cards;
