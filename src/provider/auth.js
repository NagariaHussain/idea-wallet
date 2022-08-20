// Based On: https://github.com/codingki/react-native-expo-template/blob/master/template-typescript-bottom-tabs-supabase-auth-flow/src/provider/AuthProvider.tsx
import React, { createContext, useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { Session } from "@supabase/supabase-js";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const supabaseSession = supabase.auth.session();
    setSession(supabaseSession);
    setUser(supabaseSession ? true : false);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log(`Supabase auth event: ${event}`);
        setSession(session);
        setUser(session ? true : false);
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
