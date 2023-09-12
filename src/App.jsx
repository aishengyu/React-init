import React, { useState } from "react";
import "./styles.css";

import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={imcompleteTodo}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodo} onClickBack={onClickBack} />
    </>
  );
};
