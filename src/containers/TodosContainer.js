import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleTodo } from "../modules/todos";

function TodosContainer() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // 불필요한 재사용을 막기위해 useCallback 함수 사용
  const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;
