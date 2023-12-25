import * as React from "react";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";

export default function IconLabelButtons() {
  return (
    <Button variant="outlined" endIcon={<Add />}>
      Add Address
    </Button>
  );
}
