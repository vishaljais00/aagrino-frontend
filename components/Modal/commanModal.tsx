import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconLabelButtons from "../AddButton/AddButton";
import { toast } from "react-toastify";

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

interface Ifile {
  file: any;
  previewURL: any
}

export const MyModal = (props: { forData?: string , showImage: boolean, submitData: (formData: {title: string , image?: any}) => void }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputData, setInputData] = useState<string>("");
  const [fileData, setFileData] = useState<Ifile>({
    file: null,
    previewURL: null
  });

  const handleData = (title: string) => {
    let postData : {title: string , image? : any} = {
      title
    }

    if(fileData.file){
      postData.image =  fileData.file
    }

    props.submitData(postData)
    setInputData("");
    setFileData({
      file: null,
      previewURL: null
    })
    handleClose();
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    console.log(e.dataTransfer.files[0])
    const files = e.dataTransfer.files[0];
    // checkfileExtention(files) ? setFileData(files) : toast.error('Invalid file type. Please select an Image file')
    checkfileExtention(files) ? handleFilePreview(files) : toast.error('Invalid file type. Please select an Image file');
  };

  const checkfileExtention = (selectedFile: { type: string }) => (
    selectedFile && ['image/jpeg', 'image/jpg', 'image/png'].includes(selectedFile.type)
  );

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    checkfileExtention(selectedFile)
      ? handleFilePreview(selectedFile)
      : toast.error('Invalid file type. Please select an image file');

    e.target.value = ''; // Clear the input field
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleFilePreview = (file: any) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFileData({
        file,
        previewURL: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (props.forData) {
      setInputData(props.forData);
    }
  }, []);

  return (
    <div>
      <IconLabelButtons onClickFun={handleOpen} title="Add Catogary" />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {props.showImage ? 
          <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
            Upload Image
          </Typography>
          <div onDragOver={handleDragOver}  onDrop={handleDrop} className="border my-4 flex items-center flex-row-reverse justify-center border-gray-400 h-[150px] w-full focus:border-black focus:outline-none focus:ring-1 focus:ring-black">
            <div className="text-center w-3/5 m-1">

              {fileData && fileData.previewURL ?
                <button type="button" onClick={() => setFileData({ file: null, previewURL: null })} className="py-2 px-1 text-sm flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Remove Picture </button>
                : <label htmlFor="upldFile" className="text-center text-sm"> Upload Pic Here Or Drop the Image</label>}
              <input
                id="upldFile"
                type="file"
                onChange={(e) => { handleFileChange(e) }}
                className="hidden"
              />
            </div>
            {fileData && fileData.previewURL && (
              <div className="p-1 w-2/5">
                <img src={fileData?.previewURL} alt="Preview" className="max-w-full w-full h-[145px] object-fit" />
              </div>
            )}
          </div>
          </> 
          : <></> }
    
          <Typography id="modal-modal-title" variant="h6" component="h2" >
            Add Catogary Title
          </Typography>
          <div className="border my-4 border-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black">
            <input
              type="text"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              className="w-full p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          <IconLabelButtons
            title="Add"
            onClickFun={() => {
              handleData(inputData);
            }}
          />
        </Box>
      </Modal>
    </div>
  );
};
