import { useEffect, useState, createContext, useContext } from 'react';
import supabase from '../lib/supabase';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export function UserContextProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setUser(session?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, session }}>
      {children}
    </UserContext.Provider>
  );
}
