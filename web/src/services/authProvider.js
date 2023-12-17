
  export const authProvider = {
    isAuthenticated: false,
    email: null,
    async signin(email) {
      console.log("signin called ::");
      await new Promise((r) => setTimeout(r, 500)); // fake delay
      authProvider.isAuthenticated = true;
      authProvider.email = email;
    },
    async signout() {
      console.log("signout called ::");
      await new Promise((r) => setTimeout(r, 500)); // fake delay
      authProvider.isAuthenticated = false;
      authProvider.email = "";
    },

    async getCurrentUser () {

    }
  };