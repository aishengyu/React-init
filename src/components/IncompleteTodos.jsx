import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div class="imcomplete-area">
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
