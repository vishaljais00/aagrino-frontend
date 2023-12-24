export type IAddress = {
  name: string;
  fullAddress: string;
  pincode: number;
  isDefault: boolean;
};

export type UserProfileValues = {
  password: string;
  email: string;
  name: string;
  phNumber: number;
  addresses: IAddress[];
};
export type profileData = {
  email: string,
  name: string,
  phNumber: number,
  password?: string
}