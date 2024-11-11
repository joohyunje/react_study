import React from 'react';
import Button from './style';

// variant, shape, size, border, color, font
const BasicButton = ({children, ...rest}) => { // 몇개를 받을지 모를때 -> ...rest 이용하기!! 레스트 파라미터
  return (
    // <Button 
    //   variant={variant}
    //   shape={shape}
    //   size={size}
    //   border={border}
    //   color={color}
    //   font={font}
    // >{children}</Button>
    <Button {...rest}>{children}</Button>
  );
};

export default BasicButton;