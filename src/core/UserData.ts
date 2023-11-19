class User {
    private username: string;
    private email: string;
    private password: string;
  
    constructor(username: string, email: string, password: string) {
      this.username = username;
      this.email = email;
      this.password = password;
    }
  
    getUsername(): string {
      return this.username;
    }
  
    getEmail(): string {
      return this.email;
    }
  
    getPassword(): string {
      return this.password;
    }
  
    setUsername(username: string): void {
      this.username = username;
    }
  
    setEmail(email: string): void {
      this.email = email;
    }
  
    setPassword(password: string): void {
      this.password = password;
    }
  }
  
  export default User;
  