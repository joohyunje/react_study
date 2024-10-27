import React, { useState } from 'react';

const Sound = () => {

  const [sound, setSound] = useState("");

  const dogSound = "멍멍"
  const catSound = "야옹"
  const dog = ()=>{
    setSound(dogSound)
  }
  const cat = ()=>{
    setSound(catSound)
  }

  return (
    <div>
      <p>{sound}</p>
      <button onClick={dog}>강아지 버튼</button>
      <button onClick={cat}>고양이 버튼</button>
    </div>
  );
};

export default Sound;