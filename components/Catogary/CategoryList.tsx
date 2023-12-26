import React from "react";
import { Button } from "@mui/material";
import { EditModal } from "../Modal/EditModal";
import { Edit } from "@mui/icons-material";

const CategoryList = (props: { id: number; name: string }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  
  return (
    <div className="p-2 sm:w-1/2 w-full">
      <div className="bg-gray-100 rounded flex p-4 h-full items-center justify-between">
        <span className="font-medium">{props.name}</span>
        <div className="flex justify-between">
          <p className="text-sm font-medium text-gray-500 self-center">
            Status: <span className="text-green-600">Active</span>
          </p>
          <Button onClick={handleOpen}>
            <Edit />
          </Button>
          <EditModal open={open} id={props.id} forData={props.name} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
