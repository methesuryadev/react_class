import { useState } from "react";

function Profile(props) {
    const [loggedin,setLoggedin]=useState(true)
    const [loggedin2,setLoggedin2]=useState(2)
    return (
        <div>
            {loggedin?<h1>Welcome User</h1>:<h1>Welcome Guest</h1>}

            {loggedin2==1?<h1>Welcome User 1</h1>:loggedin2==2?<h1>Welcome User 2</h1>:<h1>Welcome User 3</h1>}
        </div>
    )
}

export default Profile;