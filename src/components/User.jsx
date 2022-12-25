import {useParams } from 'react-router-dom';
function User(){
    let { userId,name} = useParams();
    return(
      <div>
        <h1>User Page</h1>
        <h3>My User Number is {userId}</h3>
        <h3>My name is {name}</h3>
      </div>
    )
  }
  export default User;