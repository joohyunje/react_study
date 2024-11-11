import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPoo,faTree} from '@fortawesome/free-solid-svg-icons'

// 폰트어썸 아이콘 사용
const Styled05 = () => {
  return (
    <div>
      <FontAwesomeIcon icon = {faPoo}/>
      <FontAwesomeIcon icon = {faTree}/>
    </div>
  );
};

export default Styled05;