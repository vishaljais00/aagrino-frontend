import DynamicTypography from "@/components/DynamicTypography/DynamicTypography";
import { Button } from "@mui/material";
import Image from "next/image";

const FavoriteItems = () => {
  // Dummy data for favorite items
  const items = [
    { id: 1, name: 'Hollow Port', description: 'Awesome yellow t-shirt', price: '39.11', inStock: true },
    { id: 2, name: 'Circular Sienna', description: 'Awesome white t-shirt', price: '24.89', inStock: true },
    { id: 3, name: 'Realm Bone', description: 'Awesome black t-shirt', price: '22.00', inStock: false },
  ];

  return (
    <div className="p-8">
      <DynamicTypography content="Your Favorite Items" variant="h3"/>
      {/* <h2 className="text-2xl font-semibold mb-4">Your Favorite Items</h2> */}
      <p className="mb-6">There are {items.length.toString().padStart(2, '0')} products in this list</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left leading-4 font-medium text-gray-600 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left leading-4 font-medium text-gray-600 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left leading-4 font-medium text-gray-600 uppercase tracking-wider">Stock Status</th>
              <th className="px-6 py-3 text-left leading-4 font-medium text-gray-600 uppercase tracking-wider">Action</th>
              <th className="px-6 py-3">Remove</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-6 py-4 whitespace-no-wrap h-36">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-32 w-32">
                      <Image height={100} width={100} className="h-32 w-32 rounded-full" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/72eeac03-ccfa-49ee-9425-5e62816d2bfb/dfq92ih-8ccc052b-bb4b-4562-b8fa-d675302c4475.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcyZWVhYzAzLWNjZmEtNDllZS05NDI1LTVlNjI4MTZkMmJmYlwvZGZxOTJpaC04Y2NjMDUyYi1iYjRiLTQ1NjItYjhmYS1kNjc1MzAyYzQ0NzUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.abmxZidxq5Leauqs123QeavRkRa7OOCj22wBiIc6H4Q" alt={item.name} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm leading-5 font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm leading-5 text-gray-500">{item.description}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="text-sm leading-5 text-gray-900">${item.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {item.inStock ? (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      In Stock
                    </span>
                  ) : (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Stock Out
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-left text-sm leading-5 font-medium">
                  <Button variant="outlined" className="text-indigo-600 hover:text-indigo-900">
                    {item.inStock ? 'Add to Cart' : 'Contact Us'}
                  </Button>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-center text-sm leading-5 font-medium">
                  <button className="text-gray-600 hover:text-gray-900">
                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 6h18M6 6v15a2 2 0 002 2h8a2 2 0 002-2V6M10 11v2m4-2v2"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavoriteItems;
