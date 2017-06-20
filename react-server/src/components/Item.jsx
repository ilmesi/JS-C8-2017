import React from 'react';

export default function Item(props) {
  const { onCompleteTodo, id, text, done } = props;
  const onClick = (event) => onCompleteTodo(id);
  return (
    <div className={"row item " + (done ? "closed" : "open")}>
      <div className="six columns description">
        <div className="">{text}</div>
      </div>
      <div className="six columns actions">
        <button
          onClick={onClick}
          className="button-primary"
          disabled={done}
        >Terminar</button>
      </div>
    </div>
  );
};
