import { createContext, ReactNode, useState } from "react";
import React from "react";
import * as AuthSession from "expo-auth-session";
import {
  SCOPE,
  CLIENT_ID,
  CDN_IMAGE,
  REDIRECT_URI,
  RESPONSE_TYPE,
} from "../configs";
import { api } from "../services/api";

interface User {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

type AuthContextType = {
  user: User;
  signIn: () => Promise<void>;
  loading: boolean;
};
type AuthContextProviderType = {
  children: ReactNode;
};

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
  };
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderType) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === "success") {
        api.defaults.headers.common[
          "authorization"
        ] = `Bearer ${params.access_token}`;
        const userinfo = await api.get("/users/@me");

        const firstName = userinfo.data.username.split(" ")[0];

        userinfo.data.avatar = `${CDN_IMAGE}/avatars/${userinfo.data.id}/${userinfo.data.avatar}.png`;

        setUser({ ...userinfo.data, firstName, token: params.access_token });
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      throw new Error("Authentication Error");
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
