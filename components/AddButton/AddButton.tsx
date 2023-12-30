import * as React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Edit from "@mui/icons-material/Edit";

interface IconLabelButtonsProps {
  title: string;
  onClickFun: () => void;
}

const IconLabelButtons: React.FC<IconLabelButtonsProps> = ({
  title,
  onClickFun,
}: IconLabelButtonsProps) => {
  return (
    <Button
      variant="outlined"
      onClick={onClickFun}
      endIcon={<AddIcon />}
    >
      {title}
    </Button>
  );
};

export default IconLabelButtons;
