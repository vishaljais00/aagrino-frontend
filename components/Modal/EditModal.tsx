import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconLabelButtons from "../AddButton/AddButton";
import { useDispatch } from "react-redux";
import { setLoader } from "@/redux/feature/loader/loaderSlice";
import { useUpdateCatogaryMutation } from "@/redux/feature/admin/admin";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const EditModal = ({
  setOpen,
  forData = "",
  open,
  id,
}: {
  forData?: string;
  setOpen: Function;
  open: boolean;
  id: number;
}) => {
  const handleClose = () => setOpen(false);
  const [inputData, setInputData] = useState<string>("");
  const [updateCatogary, { isSuccess }] = useUpdateCatogaryMutation();

  const dispatch = useDispatch();
  const submitData = () => {
    handleClose();
    dispatch(setLoader(true));
    setTimeout(() => {
      updateCatogary({ title: inputData, id });
      dispatch(setLoader(false));
      setInputData("");
    }, 3000);
  };

  useEffect(() => {
    if (forData) {
      setInputData(forData);
    }
  }, []);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Catogary Title
          </Typography>
          <div className="border my-4 border-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black">
            <input
              type="text"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              className="w-full p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          <IconLabelButtons title="Edit" onClickFun={submitData} />
        </Box>
      </Modal>
    </div>
  );
};
