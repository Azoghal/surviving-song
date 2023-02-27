'use client'
import { useEffect, useState } from "react"
import Script from 'next/script'
import { env } from "process";

// import { getLogger } from "logging/log-util";

const track = {
    name: "",
    album: {
        images: [
            { url: "" }
        ]
    },
    artists: [
        { name: "" }
    ]
}

export default function SpotifyTute(){
    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const [player, setPlayer] = useState(undefined);
    const [current_track, setTrack] = useState(track);

    const key = env.SPOTIFY_WEB_SDK_KEY;
    console.log(key); 

    const startPlayer =  () => {
        const script = document.createElement('script');
        script.src = "https://sdk.scdn.co/spotify-player.js"
        script.async = true;
        document.body.appendChild(script);
        window.onSpotifyWebPlaybackSDKReady = () => {
            console.log("Spotify Web Playback SDK Ready");
            const token = env.SPOTIFY_WEB_SDK_KEY;
            const player = new Spotify.Player({
              name: 'Web Playback SDK Quick Start Player',
              getOAuthToken: cb => { cb(token); },
              volume: 0.5
            });

            setPlayer(player);

            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
            });

            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.addListener('player_state_changed', ( state => {

                if (!state) {
                    return;
                }

                setTrack(state.track_window.current_track);
                setPaused(state.paused);

                player.getCurrentState().then( state => { 
                    (!state)? setActive(false) : setActive(true) 
                });

            }));

            player.connect();
        }
    }

    return (
        <div>
            <h1>Spotify Tute</h1>
            <button onClick={startPlayer}> START PLAYER </button>
        </div>
    );
}