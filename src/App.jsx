import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [imcompleteTodo, setImcompleteTodo] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [completeTodo, setCompleteTodo] = useState(["ううう"]);
  return (
    <>
      <div class="input-area ">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div class="imcomplete-area">
        <p class="title">未完了</p>
        <ul>
          {imcompleteTodo.map((todo) => {
            return (
              <div key="todo" class="list-row">
                <li>{todo}</li>
                <button>完成</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div class="complete-area">
        <p class="title">完了</p>
        <ul>
          {completeTodo.map((todo) => {
            return (
              <div key="todo" class="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
