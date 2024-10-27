import React, { useState } from 'react';

const User = ({user}) => {
  console.log(user)
  const {id, age, name, phone, address} = user;
  // Users의 Props를 받아서 아래 내용들을 실습
  // 1) 유저의 데이터 중 경기도에 거주하는 사람의 데이터만 출력
  console.log(address.includes("경기도"))
  const userAddress = address.includes("경기도") ? (
    <li>
      <p>아이디 : {id}</p>
      <p>이름 : {name}</p>
      <p>나이 : {age}</p>
      <p>전화번호 : {phone}</p>
      <p>주소 : {address}</p>
    </li>
  ) : (<></>);
  // 2) 유저의 데이터 중 나이가 20보다 킅 사람의 정보를 화면에 태그로 출력
  const userAge = age > 20 ? (
    <li>
      <p>아이디 : {id}</p>
      <p>이름 : {name}</p>
      <p>나이 : {age}</p>
      <p>전화번호 : {phone}</p>
      <p>주소 : {address}</p>
    </li>
  ) : (<></>);
  // 3) 강남구에 사는 사람의 이름을 태그로 출력
  const userName = address.includes("강남구") ? (
    <li>
      <p>이름 : {name}</p>
    </li>
  ) : (<></>);
  // 4) 모든 핸드폰 번호를 010-1234-5678로 변경하기
  const [userPhone, setuserPhone] = useState(phone);

  const onClickToPhoneNumber = () => {
    setuserPhone("010-1234-5678")
  }

  // 5) 장보고의 주소를 서울시 중랑구로 변경해서 태그로 출력
  const [userAddress2, setuserAddress2] = useState(address);

  const onClickToAdress2 = () => {
    if(name.includes("장보고")){
      setuserAddress2("서울시 중랑구")
    }
  }

  return (
    // 1)
    // <ul>
    //   {userAddress}
    // </ul>

    // 2)
    // <ul>
    //   {userAge}
    // </ul>

    // 3)
    // <ul>
    //   {userName}
    // </ul>

    // 4)
    // <ul>
    //   {userPhone}
    //   <button onClick={onClickToPhoneNumber}>번호 변경</button>
    // </ul>
    
    //5)
    <ul>
      <button onClick={onClickToAdress2}>장보고 주소 바꾸기</button>
      {userAddress2}
    </ul>
  );
};

export default User;