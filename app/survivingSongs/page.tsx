'use client'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

let playlists: any;

function getTokens(){
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
  
  return {accessToken:accessToken, refreshToken:refreshToken}
}

async function fetchPlaylists(){
  const tokens = getTokens();
  const result = await fetch("https://api.spotify.com/v1/me/playlists", {
        mode:'no-cors',
        method: "GET", headers: { Authorization: `Bearer ${tokens.accessToken}`, limit: "10", offset:"0"}
    });
  
  const temp = await result.json();
  console.log(temp);
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
      <button onClick={fetchPlaylists}> Fetch Playlists</button>
      <div>
        {playlists}
      </div>
    </main>
  )
}

