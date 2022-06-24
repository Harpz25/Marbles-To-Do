import { useState, useEffect } from 'react';


function uselocalSession(key, initialValue)
{
  const stored = localStorage.getItem(key);
  if (!stored){return initialValue;}
  return JSON.parse(stored);
}

function useSession(key, initialValue)
{
  const [userValue, setUserValue] = useState(uselocalSession(key, initialValue));
  useEffect(() =>{ localStorage.setItem(key, JSON.stringify(userValue));}, [key, userValue] );
  return [userValue, setUserValue];
}


export default useSession;








