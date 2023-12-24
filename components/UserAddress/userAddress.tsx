import { IAddress } from "@/constants/types";

export const AddressComponent: React.FC<{ address: IAddress }> = ({ address }) => {
  return (
    <div className="border rounded-md p-4 my-4">
      <h3 className="text-lg font-semibold">{address.name}</h3>
      <p className="text-gray-600 mb-2">{address.fullAddress}</p>
      <p className="text-gray-600">Pincode: {address.pincode}</p>
      <label className="flex items-center mt-2">
        <input
          type="checkbox"
          checked={address.isDefault}
          className="form-checkbox h-5 w-5 text-primary focus:ring-primary dark:text-gray-400 dark:focus:ring-gray-300"
          readOnly
        />
        <span className="ml-2 text-gray-700 dark:text-gray-400">Default</span>
      </label>
    </div>
  );
};