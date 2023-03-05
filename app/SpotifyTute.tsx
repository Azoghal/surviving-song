'use client'
import { useEffect, useState } from "react"
import WebPlayback from './WebPlayback'
import Login from './Login'

// import { getLogger } from "logging/log-util";

export default function SpotifyTute(){
    const [token, setToken] = useState('');

    const startTute = () => {

        async function getToken() {
          console.log('getting Token');
          const response = await fetch('auth/token');
          console.log(response);
          const json = await response.json();
          setToken(json.access_token);
        }
    
        getToken();
        console.log("token: ", token);
    }

    return (
        <div>
            <h1>Spotify Tute</h1>
            {(token == '') ? <Login/> : <WebPlayback token={token}/>}
            <button onClick={startTute}>START</button>
        </div>
    );
}