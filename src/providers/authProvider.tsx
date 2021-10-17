import {  decodeToken } from "react-jwt";

export const authProvider = {
  // called when the user attempts to log in

  login: ({ username, password }: any) => {
    const request = new Request('http://localhost:9091/sina/api/v1/Security/login/authenticate', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
        .then(response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then( token  => {
            const decodedToken = decodeToken(token);
            localStorage.setItem('auth', token);
            localStorage.setItem('userName', decodedToken.unique_name)
            console.log(decodedToken)
         
        });
},


getIdentity: () => {
  try {
      const { id, unique_name, avatar } = JSON.parse(localStorage.getItem('auth') || '{}');
      return Promise.resolve({ id, unique_name, avatar });
  } catch (error) {
      return Promise.reject(error);
  }
},


  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }: any) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("auth");
      return Promise.reject();
    }
    return Promise.resolve();
  },



  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("auth") ? Promise.resolve() : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),




};
