// @ts-ignore
export function setCookie(key: string, value: string) {
  const expires = new Date();
  const days = 1;
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${key}=${value}; expires=${expires.toUTCString()}; path=/;`;
}

export function getCookie(key: string) {
  const keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : null;
}

export function cleanCookies() {
  document.cookie.split(';').forEach((cookie) => {
    document.cookie = cookie
      .replace(/^ +/, '')
      .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
  });
}

export function activateAuth(accessToken: string, refreshToken: string, roles: string) {
  setCookie('accessToken', accessToken);
  setCookie('refreshToken', refreshToken);
  setCookie('roles', roles);
}
