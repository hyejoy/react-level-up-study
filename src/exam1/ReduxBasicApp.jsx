/**
 *
 * @returns 리덕스 툴킷의 기본 사용법 익히기
 * - State로 숫자 하나만 관리하며, 증가, 감소, 리셋 기능을 제공하는 기본적인 카운터 앱
 *  - creteSlice()를 사용한 슬라이스 객체 생성
 *  - configureStore()로 스토어 구성
 *  - useSelector()를 통해 상태 조회
 *  - useDispatch()로 액션 디스패치
 *    => 디스패치로 호출할 수 있는 함수는 'reducer' 함수
 */

import { useDispatch, useSelector } from "react-redux";
import { deceremnet, increment, reset } from "./couterSlice";

export default function ReduxBasicApp() {
  // subscribe : useSelectore훅을 사용해 원하는 상태값 구독
  const countVal = useSelector((nowState) => nowState.myCounter.myValue);

  // dispatch : useDispatch훅을 사용해 액션을 스토어에 전달하여 리듀서 호출
  const dispatch = useDispatch();
  return (
    <>
      <h1>ReduxBasicApp Component</h1>
      <h3>현재 값 : {countVal}</h3>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(deceremnet())}>감소</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
    </>
  );
}
