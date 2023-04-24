'use client'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

async function fetchProfile(){
  const current_url = window.location.href;
  const url = new URL(current_url)
  const access_token = url.searchParams.get('access_token');
  console.log(access_token);
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

