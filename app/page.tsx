import { Inter } from 'next/font/google'
import cookieCutter from 'cookie-cutter'

const inter = Inter({ subsets: ['latin'] })

function getTokens(){
  const hash = window.location.hash;
  const hashWithoutHashSymbol = hash.slice(1);
  // Split the hash into an array of parameter strings
  const parameterStrings = hashWithoutHashSymbol.split('&');
  // Create an object to store the parameter values
  const parameters:any= {};

  // Loop through each parameter string
  parameterStrings.forEach(paramString => {
    // Split the parameter string into its key and value parts
    const parts = paramString.split('=');
    // Store the key and value in the parameters object
    parameters[parts[0]] = parts[1];
  });

  // Access the values of access_token and refresh_token
  const accessToken = parameters['access_token'];
  const refreshToken = parameters['refresh_token'];
  
  return {accessToken:accessToken, refreshToken:refreshToken}
}

async function fetchGet(){
  const tokens = getTokens();
  console.log(tokens);
}

export default function Home() {

  var credentials;

  return (
    <main>
      <div>
        <p>
          Home of my spotify adventures.
        </p>
        <button onClick={fetchGet()}>get</button>
        {credentials && credentials["accessToken"]}
      </div>
    </main>
  )
}

