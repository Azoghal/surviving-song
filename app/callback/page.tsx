'use client'

//import { useLocalStorage } from '@/utils/localStorage';
import { Inter } from 'next/font/google'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

function getTokens(){
    const urlParams = window.location.search;
    const query = urlParams.split('?')[1]
    var params = query.split('&')
    console.log(params)
    //console.log(params[0].split("=")[1])
    params.forEach(paramString =>{
      const parts = paramString.split('=')
      localStorage.setItem(parts[0],parts[1])
    })
}

async function fetchFeist(){
  const result = await fetch("https://api.spotify.com/v1/artist/6CWTBjOJK75cTE8Xv8u1kj", {
        method: "GET", headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}`}
    });
  
  const temp = await result.json();
  console.log(temp);
}

export default function Callback() {
  // if the credentials are in the uri, extract and cookify them?
  // otherwise, redirect to home.

  useEffect(()=>{
    getTokens();
  })

  return (
    <main>
      <div>
        <p> You&apos;ve logged in, now it&apos;s time to do some stuff!</p>
      </div>
      <button onClick={fetchFeist}>Fetch Feist</button>
    </main>
  )
}

