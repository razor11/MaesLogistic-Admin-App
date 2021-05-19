export const authProvider = {
    // called when the user attempts to log in
    login: ({ username, password } : any) => {
        if(username === 'admin' && password === 'admin')
        {
            localStorage.setItem('username', username);
            return Promise.resolve();
        }
        else{
            return Promise.reject();
        }
        
        // accept all username/password combinations
      
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status } : any) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () =>  Promise.resolve(),
};