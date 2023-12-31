import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconLabelButtons from "../AddButton/AddButton";
import AddressForm from "../Form/addAdress";

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

const BasicModal = (props: { setOpen: Function; open: boolean }) => {
  const { setOpen, open } = props;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <IconLabelButtons onClickFun={handleOpen} title="Add Address " />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddressForm handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
};
export default BasicModal;
