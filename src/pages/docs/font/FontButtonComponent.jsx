import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bigger, bigger_5rem } from '../../../modules/font';

const FontButtonComponent = () => {
  console.log(useSelector((state) => state))
  const fontSize = useSelector((state) => state.font.fontSize);
  const dispatch = useDispatch();

  return (
    <div>
      {fontSize}
      <button onClick={(e) => {dispatch(bigger())}}>2rem버튼</button>
      <button onClick={(e) => {dispatch(bigger_5rem())}}>5rem버튼</button>
    </div>
  );
};

export default FontButtonComponent;