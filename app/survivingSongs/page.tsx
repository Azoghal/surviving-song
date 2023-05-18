'use client'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

let playlists: any;

function getTokens(){
  const accessToken = localStorage.getItem('access_token') || ""
  const refreshToken = localStorage.getItem('access_token') || ""
  return {accessToken:accessToken, refreshToken:refreshToken}
}

async function fetchPlaylists(){
  const tokens = getTokens();
  console.log(tokens)
  console.log(tokens.accessToken)
  const result = await fetch("https://api.spotify.com/v1/me/playlists",
  {
    method: "GET", headers: { Authorization: `Bearer ${tokens.accessToken}`}
  });
  
  const temp = await result.json();
  console.log(temp);
}

async function fetchProfile(){
  const tokens = getTokens();
  const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${tokens.accessToken}`}
    });
  
  const temp = await result.json();
  console.log(temp);
}

async function fetchFeist(){
  const tokens = getTokens();
  const result = await fetch("https://api.spotify.com/v1/artist/6CWTBjOJK75cTE8Xv8u1kj", {
        method: "GET", headers: { Authorization: `Bearer ${tokens.accessToken}`}
    });
  
  const temp = await result.json();
  console.log(temp);
}

//6CWTBjOJK75cTE8Xv8u1kj

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
      <button onClick={fetchProfile}> Fetch Profile</button>
      <button onClick={fetchFeist}> Fetch Feist</button>
      <div>
        {playlists}
      </div>
    </main>
  )
}

