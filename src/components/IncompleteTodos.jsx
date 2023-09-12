import React from "react";

const imcompleteArea = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};
export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div style={imcompleteArea}>
      <p class="title">未完了</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key="todo" class="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完成</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
