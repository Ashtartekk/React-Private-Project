const TOKEN_KEY = "ashtartekk";

const getToken = () => localStorage.getItem(TOKEN_KEY);
const setToken = (token: any) => localStorage.setItem(TOKEN_KEY, token);
const clearToken = () => localStorage.removeItem(TOKEN_KEY);

export { getToken, setToken, clearToken };
