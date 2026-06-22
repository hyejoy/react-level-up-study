/**
 *
 * @returns 리덕스 툴킷의 기본 사용법 익히기
 * - State로 숫자 하나만 관리하며, 증가, 감소, 리셋 기능을 제공하는 기본적인 카운터 앱
 *  - creteSlice()를 사용한 슬라이스 객체 생성
 *  - configureStore()로 스토어 구성
 *  - useSelector()를 통해 상태 조회
 *  - useDispatch()로 액션 디스패치
 *  - 액션과 payload 관계 이해 (예제 실행 후 자세히 설명)
 */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./todoSlice";

export default function TodoApp() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <>
      <h1>TodoApp Component</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일 입력"
      />
      <button onClick={handleAdd}>추가</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.idx}>
            <input
              type="checkbox"
              value={todo.done}
              onClick={() => dispatch(toggleTodo(todo.idx))}
            />
            <span
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
            >
              {todo.contents}
            </span>

            <button onClick={() => dispatch(deleteTodo(todo.idx))}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}
