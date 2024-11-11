import React, { useContext, useState } from 'react';
import { AnimalsContext } from './AnimalsContext';
import Animal from './Animal';

// Context에 저장된 동물 세마리를 버튼으로 출력
// input에 동물 입력 후 엔터 : 동물 버튼 추가 (context 메서드 사용)
// 동물 버튼을 클릭하면 해당 버튼을 삭제 (context 메서드를 remove 사용)
const Animals = () => {
  const {state, action} = useContext(AnimalsContext);

  const [inputValue, setInputValue] = useState("");
  const onChangeInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const onKeyDownAddAnimal = (e) => {
    if(e.key === 'Enter'){
      action.insert(inputValue);
    }
  }

  

  // animal로 state와 action을 넘겨서 리스트로 화면에 출력하기
  return (
    <ul>
      <input type="text" onChange = {onChangeInputValue} onKeyDown={onKeyDownAddAnimal}/>
      <Animal state = {state} action = {action}/>
    </ul>
  );
};

export default Animals;