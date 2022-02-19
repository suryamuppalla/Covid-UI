export interface UserModel {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address1: string;
  address2: string;
  state: string;
  pinCode: number;
  dob: string;
  registerType: 0 | 1;
}
