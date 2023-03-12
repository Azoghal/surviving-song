/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import './globals.css';
import Login from './Login'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <div>
            <Link href="/">
              Home
            </Link>
            <Link href="/survivingSongs">
              Surviving Song
            </Link>
            <Link href="/playlistCovers">
              Playlist Covers
            </Link>
            <Login/>
            </div>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}