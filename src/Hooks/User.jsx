import axios from 'axios';
import React, { useEffect, useState } from 'react';

const User = () => {
    const [user,SetUser]= useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/user')
        .then(res=>{
            console.log(res.data)
            SetUser(res.data)
        })
    },[])
    
    return [user]
};

export default User;