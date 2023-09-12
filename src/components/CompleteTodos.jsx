import React from "react";

const completeArea = {
  backgroundColor: "#ffffe0",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};
export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div style={completeArea}>
      <p class="title">完了</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key="todo" class="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
