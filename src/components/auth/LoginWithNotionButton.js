import React from "react";
import { Button } from "../Button";
import { supabase } from "../../lib/supabase";
import { startAsync, makeRedirectUri } from "expo-auth-session";
import * as Linking from "expo-linking";

export const LoginWithNotionButton = () => {
  const handleSignIn = async () => {
    const returnUrl = makeRedirectUri({
      useProxy: false,
      path: "auth/callback",
    });

    console.log("returnURl", returnUrl);

    const payload = await startAsync({
      authUrl: `https://xaypccruqhvfqhiemcpy.supabase.co/auth/v1/authorize?provider=notion&redirect_to=${returnUrl}`,
      returnUrl,
    });

    const response = await supabase.auth.setSession(
      payload.params?.refresh_token
    );

    console.log(response);
  };

  return (
    <Button type="secondary" onPress={handleSignIn}>
      Login with Notion
    </Button>
  );
};
