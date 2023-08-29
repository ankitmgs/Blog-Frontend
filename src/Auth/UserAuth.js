import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const UserAuth = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );

    if(currentUser !== null){
        return children;
    }else{
        Swal.fire({
            icon:"error",
            title:"Error",
            text:"You need to login"
        });
        return <Navigate to = "/Login"/>
    }
 
}

export default UserAuth;