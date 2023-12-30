import { useState } from "react";

const DataDisplay = ({ data }) => {
  const [editedData, setEditedData] = useState(data);

  const handleInputChange = (event, index) => {
    const newData = [...editedData];
    newData[index].as = event.target.value;
    setEditedData(newData);
    console.log("New value:", event.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-start space-y-4">
        {editedData.map((item, index) => (
          <div
            key={item.id}
            className="bg-gray-200 p-4 rounded-md shadow-md w-64 flex flex-col justify-center items-start relative"
          >
            <h3 className="text-lg font-semibold">{item.as}</h3>
            <p className="text-gray-600">{`Name: ${item.name}`}</p>
            <p className="text-gray-600">{`Active: ${
              item.active ? "Yes" : "No"
            }`}</p>
            <p className="text-gray-600">{`Order: ${item.order}`}</p>
            <input
              type="text"
              className="absolute bottom-2 right-2 border border-gray-300 px-2 py-1 rounded-md"
              value={item.as}
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataDisplay;
