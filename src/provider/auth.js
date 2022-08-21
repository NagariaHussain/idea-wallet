// Based On: https://github.com/codingki/react-native-expo-template/blob/master/template-typescript-bottom-tabs-supabase-auth-flow/src/provider/AuthProvider.tsx
import React, { createContext, useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const supabaseSession = supabase.auth.session();
    setSession(supabaseSession);
    setIsAuthenticated(supabaseSession ? true : false);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, s) => {
        console.log(`Supabase auth event: ${event}`);
        setSession(s);
        setIsAuthenticated(s ? true : false);
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        session,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
