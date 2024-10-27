import React, { useState } from 'react';

const CheckBox = () => {

  const [message, setMessage] = useState([]);

  const onClickToCheck = (e) => {
    if(e.target.checked){
      // setMessage(message.concat(e.target.value))
      setMessage([...message, e.target.value]) // 스프레드 문법 -> ... 분산시켜서 뿌려주는 문법, 깊은 복사로 주소값이 바뀜  : 객체를 위한 문법 있으면 수정 없으면 추가
    }else{
      setMessage(message.filter((m)=> m !== e.target.value))
    }
  }

  return (
    <div>
      <div>
        <span>front-end</span>
        <input type="checkbox" value = "front-end" onClick={onClickToCheck}/>
      </div>
      <div>
        <span>back-end</span>
        <input type="checkbox" value = "back-end" onClick={onClickToCheck}/>
      </div>
      <div>
        <span>AI</span>
        <input type="checkbox" value = "AI" onClick={onClickToCheck}/>
      </div>
      <div>
        <h1>{message.map((m,i) => <p key = {i}>{m}</p>)}</h1>
      </div>
    </div>
  );
};

export default CheckBox;