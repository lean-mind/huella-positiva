import React, { createContext, useState } from 'react';
import { Role } from '../domain/models/Roles';
import { cleanCookies, getCookie } from './http/cookies';
import { ROUTE } from './http/routes';

export interface ContextParams {
  role: string | null;
  isAuth: boolean | null;
  removeAuth?: () => void;
}

// @ts-ignore
export const Context = createContext<ContextParams>();

// @ts-ignore
export const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(() => {
    return (
      getCookie('accessToken') !== null &&
      getCookie('accessToken') !== undefined &&
      getCookie('accessToken') !== ''
    );
  });

  const [role, setRole] = useState<Role | null>(() => {
    const roleName = getCookie('roles') || 'NONE';
    return roleName as Role;
  });

  const value = {
    role,
    isAuth,
    removeAuth: () => {
      setIsAuth(false);
      setRole(null);
      cleanCookies();
      window.location.replace(ROUTE.home);
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};