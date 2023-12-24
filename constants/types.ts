export type IAddress = {
  name: string;
  fullAddress: string;
  pincode: string;
  isDefault: boolean;
};

export type UserProfileValues = {
  password: string;
  Email: string;
  Name: string;
  MobileNumber: number;
  addresses: IAddress[];
};
