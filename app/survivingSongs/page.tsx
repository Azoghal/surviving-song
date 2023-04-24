'use client'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

async function fetchProfile(){
  const hash = window.location.hash;
  const hashWithoutHashSymbol = hash.slice(1);
  // Split the hash into an array of parameter strings
  const parameterStrings = hashWithoutHashSymbol.split('&');
  // Create an object to store the parameter values
  const parameters:any= {};

  // Loop through each parameter string
  parameterStrings.forEach(paramString => {
    // Split the parameter string into its key and value parts
    const parts = paramString.split('=');
    // Store the key and value in the parameters object
    parameters[parts[0]] = parts[1];
  });

  // Access the values of access_token and refresh_token
  const accessToken = parameters['access_token'];
  const refreshToken = parameters['refresh_token'];
  
  // Use the values in your code
  console.log(accessToken, refreshToken);
}

export default function SurvivingSongs() {
  return (
    <main>
      <div>
        <iframe 
          src="https://open.spotify.com/embed/track/1A7pz58VR2Lpc19c58QdSo?utm_source=generator" 
          width="40%" 
          height="100" 
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>
        <iframe 
          src="https://open.spotify.com/embed/track/3NfxSdJnVdon1axzloJgba?utm_source=generator"
          width="40%" 
          height="100" 
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>
      </div>
      <button onClick={fetchProfile}> Fetch Profile</button>
    </main>
  )
}

