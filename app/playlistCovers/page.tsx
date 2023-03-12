import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function playlistCovers() {
  return (
    <main>
      <div>
        <p> Here you&apos;ll be able to play with some settings to generate playlist covers from the songs in the playlist using generative AI.</p>
      </div>
    </main>
  )
}

