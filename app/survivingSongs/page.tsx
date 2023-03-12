'use client'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

async function fetchProfile(){
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  console.log(code);
  const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${code}` }
    });
  console.log(result.json());
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

