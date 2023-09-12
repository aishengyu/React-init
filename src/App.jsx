import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [imcompleteTodo, setImcompleteTodo] = useState([]);
  const [completeTodo, setCompleteTodo] = useState([]);
  const [todoText, setTodoText] = useState("");
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...imcompleteTodo, todoText];
    setImcompleteTodo(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodo];
    newTodos.splice(index, 1);
    setImcompleteTodo(newTodos);
  };
  const onClickComplete = (index) => {
    const newImcompleteTodos = [...imcompleteTodo];
    newImcompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodo, imcompleteTodo[index]];

    setImcompleteTodo(newImcompleteTodos);
    setCompleteTodo(newCompleteTodos);
  };
  const onClickBack = (index) => {
    /*
    pushを使う例ですが、const newImCompleteTodos = [...imcompleteTodo, completeTodo[index]];のように一行で書ける
    const newImCompleteTodos = [...imcompleteTodo];
    newImCompleteTodos.push(completeTodo[index]);
    */
    const newImCompleteTodos = [...imcompleteTodo, completeTodo[index]];
    const newCompleteTodos = [...completeTodo];
    newCompleteTodos.splice(index, 1);

    setCompleteTodo(newCompleteTodos);
    setImcompleteTodo(newImCompleteTodos);
  };
  return (
    <>
      <div class="input-area ">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div class="imcomplete-area">
        <p class="title">未完了</p>
        <ul>
          {imcompleteTodo.map((todo, index) => {
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
      <div class="complete-area">
        <p class="title">完了</p>
        <ul>
          {completeTodo.map((todo, index) => {
            return (
              <div key="todo" class="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
