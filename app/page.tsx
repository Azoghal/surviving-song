import { Inter } from 'next/font/google'
import Login from './Login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main>
      <div>
        Home of my spotify adventures.
        <Login/>
      </div>
    </main>
  )
}

