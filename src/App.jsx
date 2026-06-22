import { Route, Routes } from "react-router-dom";
import TopNavi from "./components/TopNavi";

// 기본 사용법 예제
import { Provider as BasicProvider } from "react-redux";
import { store as basicStore } from "./exam1/store";
import ReduxBasicApp from "./exam1/ReduxBasicApp";

// 할일 관리 예제
import { Provider as TodoProvider } from "react-redux";
import { store as todoStore } from "./exam2/store";
import TodoApp from "./exam2/TodoApp";

export default function App() {
  return (
    <>
      <TopNavi></TopNavi>
      <Routes>
        <Route
          path="/"
          element={
            <BasicProvider store={basicStore}>
              <ReduxBasicApp />
            </BasicProvider>
          }
        />
        <Route
          path="/ReduxBasicApp"
          element={
            <BasicProvider store={basicStore}>
              <ReduxBasicApp />
            </BasicProvider>
          }
        />
        <Route
          path="/TodoApp"
          element={
            <TodoProvider store={todoStore}>
              <TodoApp />
            </TodoProvider>
          }
        />
      </Routes>
    </>
  );
}
