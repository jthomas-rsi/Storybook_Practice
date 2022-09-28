import React, { ReactNode, useState } from "react";

import {
  ListItem as MUIListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";

//ListItem start and ending icons
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";

export interface ListItemProps {
  id: string;
  checked?: boolean;
  starred?: boolean;
  itemText?: string;
  secondaryAction: ReactNode;
  //   onClick: React.MouseEventHandler<HTMLButtonElement>;
  handleCheck(): void;
  handleStar(): void;
}

const ListItem = ({
  id,
  itemText = "Item text",
  checked = true,
  starred = true,
}: ListItemProps): JSX.Element => {
  const [checkClick, setCheckClick] = useState(checked);
  const [starClick, setStarClick] = useState(starred);

  const handleCheck = () => {
    setCheckClick(!checkClick);
  };
  const handleStar = () => {
    setStarClick(!starClick);
  };

  return (
    <MUIListItem
      id={id}
      secondaryAction={
        starClick ? (
          <IconButton onClick={() => handleStar()}>
            <StarOutlineIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => handleStar()}>
            <StarIcon />
          </IconButton>
        )
      }
    >
      <ListItemIcon>
        {checkClick ? (
          <IconButton onClick={() => handleCheck()}>
            <CheckBoxOutlineBlankIcon />{" "}
          </IconButton>
        ) : (
          <IconButton onClick={() => handleCheck()}>
            <CheckBoxIcon />
          </IconButton>
        )}
      </ListItemIcon>
      <ListItemText primary={itemText} />
    </MUIListItem>
  );
};

export default ListItem;
