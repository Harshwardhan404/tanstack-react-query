import React from 'react';
import {useQuery} from '@tanstack/react-query';
import  Axios  from 'axios';


export default function Home() {

    const {data , isLoading, isError} = useQuery(['unqkey'], ()=>{
        return Axios.get("https://catfact.ninja/fact").then((res)=>res.data)
      });
      

if(isLoading){
    return <h1>Loading....</h1>
}

if(isError){
    return <h1>there was some error while fetching data</h1>
}


  return (
    <>
      <p>I am home {data?.fact}</p>
    </>
  )
}
