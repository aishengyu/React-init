import React, { useState } from "react";
import "./styles.css";

import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [imcompleteTodos, setImcompleteTodos] = useState([]);
  const [completeTodo, setCompleteTodo] = useState([]);
  const [todoText, setTodoText] = useState("");
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newImcompleteTodos = [...imcompleteTodos];
    newImcompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodo, imcompleteTodos[index]];

    setImcompleteTodos(newImcompleteTodos);
    setCompleteTodo(newCompleteTodos);
  };
  const onClickBack = (index) => {
    /*
    pushを使う例ですが、const newImCompleteTodos = [...imcompleteTodo, completeTodo[index]];のように一行で書ける
    const newImCompleteTodos = [...imcompleteTodo];
    newImCompleteTodos.push(completeTodo[index]);
    */
    const newImCompleteTodos = [...imcompleteTodos, completeTodo[index]];
    const newCompleteTodos = [...completeTodo];
    newCompleteTodos.splice(index, 1);

    setCompleteTodo(newCompleteTodos);
    setImcompleteTodos(newImCompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={imcompleteTodos.length >= 5}
      />
      {imcompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodo5個までだよ～消化しろ～</p>
      )}
      <IncompleteTodos
        todos={imcompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodo} onClickBack={onClickBack} />
    </>
  );
};
