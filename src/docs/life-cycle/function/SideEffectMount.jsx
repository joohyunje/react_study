import React, { useEffect, useState } from 'react';

const SideEffectMount = () => {

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const getDatas = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const datas = await response.json();
      console.log("리랜더링")
      return datas;
    }
    getDatas().then(setUsers);
  }, [])

  return (
    <ul> 
      {users.map((user, i ) => (<li key={i}>{user.name}</li>))}
    </ul>
  );
};

export default SideEffectMount;