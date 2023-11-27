class User {
    id : Number | null;
    username: string;
    email: string;
    password: string;
  
    constructor(username: string, email: string, password: string, id: number | null) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.id = id;
    }
  
  }
  
  export default User;
  