import React, { useRef } from 'react';

const Check = () => {

  const inputRef = useRef([]);
  const formRef = useRef();

  const onClickToCheck = (e) => {
    // 빈 값 검사하기
    for(let input of inputRef.current){
      if(!input.value){
        alert(`${input.name} 를 입력하세요`)
        return;
      }
    }
    formRef.current.submit();
  }

  return (
    <div>
      <form ref={formRef}>
        <span>
          <div>
            <span>아이디</span>
            <input type="text" name="id" ref = {(element) => {inputRef.current[0] = element}}/>
          </div>
          <div>
            <span>비밀번호</span>
            <input type="text" name="password" ref = {(element) => {inputRef.current[1] = element}}/>
          </div>
          <button type='button' onClick={onClickToCheck}>전송</button>
        </span>
      </form>
    </div>
  );
};

export default Check;