import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { input_bigger } from '../../../modules/font';

const FontInputComponent = () => {
  const [inputValue, setInputValue] = useState("")
  const onChangeToInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const dispatch = useDispatch();
  const inputSize = useSelector((state) => state.inputFontSize)

  return (
    <div>
      {inputSize}
      <input type="text" onChange={onChangeToInputValue} value={inputValue} />
      <button onClick={() => {dispatch(input_bigger(inputValue))}}>사이즈 변경</button>
    </div>
  );
};

export default FontInputComponent;