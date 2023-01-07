import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import GitgubUser from './GitgubUser';
const UseEffectApi = () => {

    const [user , setUser]=useState([]);
    const [loading , setLoading] =useState(true);
    const getUsers = async() =>{
        try{
            setLoading(false);
            const responce=await fetch("https://api.github.com/users");
            setUser(await responce.json());
        }catch(error){
            console.log(error)
        }
        
    }

    useEffect(()=>{
        getUsers();
    },[]);

    if(loading){
        return <Loading />
    }

  return (
    <>
       <GitgubUser user={user}/>
    </>
  )
}

export default UseEffectApi