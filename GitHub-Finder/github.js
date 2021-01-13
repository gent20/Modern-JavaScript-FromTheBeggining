class Github {
    constructor() {
        this.client_id = '16937441e80d694d5a99';
        this.client_secret = '009f98322b72c146ed31c6beb14dccb771d7988e';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const profile = await profileResponse.json();
    
        return {
          profile
        }
      }
    }