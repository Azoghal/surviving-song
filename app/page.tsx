import { Inter } from 'next/font/google'
import SpotifyTute from './SpotifyTute'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

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
        <p>
          This is a paragrapho.
        </p>
        <SpotifyTute/>
      </div>
    </main>
  )
}

