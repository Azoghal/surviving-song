'use client'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function callback() {
  // if the credentials are in the uri, extract and cookify them?
  // otherwise, redirect to home.
  return (
    <main>
      <div>
        <p> You've logged in, now it's time to do some stuff!</p>
      </div>
    </main>
  )
}

