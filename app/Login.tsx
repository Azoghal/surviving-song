'use client'

function getAccessToken(){
    console.log('getAccessToken');
}


export default function Login(){
    // if have spotify cookies then don't show login.
 
    return (
        <a href="https://gcp-test-379914.nw.r.appspot.com/login">Login with Spotify</a>
        //<button onClick={getAccessToken}>GAT</button>
    )
}
