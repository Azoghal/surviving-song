import { Inter } from 'next/font/google'
import SpotifyTute from './SpotifyTute'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div>
        <p>
          This is a paragrapho.
        </p>
        <SpotifyTute/>
      </div>
    </main>
  )
}
