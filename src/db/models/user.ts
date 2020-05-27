export class User {
  id: string;
  name: string;
  email: string;
  phone: number;
  countryCode: string;
  address: string;
  password: string;
  constructor(user: User) {
    this.name = user.name;
    this.password = user.password;
    this.countryCode = user.countryCode;
    this.address = user.address;
    this.email = user.email;
  }
}
