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
    localStorage.setItem('auth-token', JSON.stringify(params[0]))
    localStorage.setItem('refresh-token', JSON.stringify(params[1]))
    // // Split the hash into an array of parameter strings
    // const parameterStrings = hashWithoutHashSymbol.split('&');
    // // Create an object to store the parameter values
    // const parameters:any= {};

    // // Loop through each parameter string
    // parameterStrings.forEach(paramString => {
    //     // Split the parameter string into its key and value parts
    //     const parts = paramString.split('=');
    //     // Store the key and value in the parameters object
    //     parameters[parts[0]] = parts[1];
    // });

    // // Access the values of access_token and refresh_token
    // const accessToken = parameters['access_token'];
    // const refreshToken = parameters['refresh_token'];

    // return {accessToken:accessToken, refreshToken:refreshToken}
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
    </main>
  )
}

