const SideFilter = () => {
  return (
    <section className="font-poppins w-1/4">
      <div className="px-4 py-4 ml-4 mx-auto">
        <div className="flex flex-wrap mb-24 -mx-3">
          <div className="w-full pr-2 lg:block">
            <div className="p-4 mb-5 bg-white border border-gray-200">
              <h2 className="text-2xl font-bold "> Categories</h2>
              <div className="w-16 pb-2 mb-6 border-b border-rose-600" />
              <ul>
                <li className="mb-4">
                  <label htmlFor="" className="flex items-center ">
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <span className="text-lg">Biscuits</span>
                  </label>
                </li>
                <li className="mb-4">
                  <label htmlFor="" className="flex items-center ">
                    <input type="checkbox" className="w-4 h-4 mr-2 " />
                    <span className="text-lg">Fruits</span>
                  </label>
                </li>
                <li className="mb-4">
                  <label htmlFor="" className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <span className="text-lg">Seafood</span>
                  </label>
                </li>
                <li className="mb-4">
                  <label htmlFor="" className="flex items-center ">
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <span className="text-lg">Vegetables</span>
                  </label>
                </li>
                <li className="mb-4">
                  <label htmlFor="" className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <span className="text-lg">Frozen Foods &amp; Staples</span>
                  </label>
                </li>
              </ul>
              <a
                href="#"
                className="text-base font-medium text-blue-500 hover:underline "
              >
                View More
              </a>
            </div>
            <div className="p-4 mb-5 bg-white border border-gray-200">
              <h2 className="text-2xl font-bold">Product Status</h2>
              <div className="w-16 pb-2 mb-6 border-b border-rose-600" />
              <ul>
                <li className="mb-4">
                  <label htmlFor="" className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <span className="text-lg">In Stock</span>
                  </label>
                </li>
                <li className="mb-4">
                  <label htmlFor="" className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <span className="text-lg">On Sale</span>
                  </label>
                </li>
              </ul>
            </div>
            <div className="p-4 mb-5 bg-white border border-gray-200  ">
              <h2 className="text-2xl font-bold ">Brand</h2>
              <div className="w-16 pb-2 mb-6 border-b border-rose-600 " />
              <ul>
                <li className="mb-4">
                  <label htmlFor="" className="flex items-center ">
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <span className="text-lg ">Apple</span>
                  </label>
                </li>
                <li className="mb-4">
                  <label htmlFor="" className="flex items-center ">
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <span className="text-lg ">Oreo</span>
                  </label>
                </li>
                <li className="mb-4">
                  <label htmlFor="" className="flex items-center ">
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <span className="text-lg ">Mango</span>
                  </label>
                </li>
                <li className="mb-4">
                  <label htmlFor="" className="flex items-center ">
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <span className="text-lg ">Nebico</span>
                  </label>
                </li>
              </ul>
              <a
                href="#"
                className="text-base font-medium text-blue-500 hover:underline "
              >
                View More
              </a>
            </div>
            <div className="p-4 mb-5 bg-white border border-gray-200  ">
              <h2 className="text-2xl font-bold ">Price</h2>
              <div className="w-16 pb-2 mb-6 border-b border-rose-600 " />
              <div>
                <input
                  type="range"
                  className="w-full h-1 mb-4 bg-blue-100 rounded appearance-none cursor-pointer"
                  max={100}
                  defaultValue={50}
                />
                <div className="flex justify-between ">
                  <span className="inline-block text-lg font-bold text-blue-400 ">
                    $1
                  </span>
                  <span className="inline-block text-lg font-bold text-blue-400 ">
                    $500
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 mb-5 bg-white border border-gray-200 ">
              <h2 className="text-2xl font-bold ">Size</h2>
              <div className="w-16 pb-2 mb-6 border-b border-rose-600" />
              <div className="flex flex-wrap -mx-2 -mb-2">
                <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400  hover:text-blue-600">
                  XL
                </button>
                <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600   ">
                  S
                </button>
                <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600   ">
                  M
                </button>
                <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600   ">
                  XS
                </button>
              </div>
            </div>
            <div className="p-4 mb-5 bg-white border border-gray-200">
              <h2 className="text-2xl font-bold">Colors</h2>
              <div className="w-16 pb-2 mb-6 border-b border-rose-600" />
              <div className="flex flex-wrap -mx-2 -mb-2">
                <button className="p-1 mb-2 mr-4 ">
                  <div className="w-5 h-5 bg-emerald-400" />
                </button>
                <button className="p-1 mb-2 mr-4 ">
                  <div className="w-5 h-5 bg-blue-700" />
                </button>
                <button className="p-1 mb-2 mr-4 ">
                  <div className="w-5 h-5 bg-rose-600" />
                </button>
                <button className="p-1 mb-2 mr-4 ">
                  <div className="w-5 h-5 bg-amber-700" />
                </button>
                <button className="p-1 mb-2 mr-4 ">
                  <div className="w-5 h-5 bg-green-700" />
                </button>
                <button className="p-1 mb-2 mr-4 ">
                  <div className="w-5 h-5 bg-pink-400" />
                </button>
                <button className="p-1 mb-2 mr-4 ">
                  <div className="w-5 h-5 bg-indigo-400" />
                </button>
                <button className="p-1 mb-2 mr-4 ">
                  <div className="w-5 h-5 bg-cyan-600" />
                </button>
                <button className="p-1 mb-2 mr-4 ">
                  <div className="w-5 h-5 bg-stone-400" />
                </button>
                <button className="p-1 mb-2 mr-4 ">
                  <div className="w-5 h-5 bg-yellow-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideFilter;
