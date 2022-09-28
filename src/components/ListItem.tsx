import React, { ReactNode, useState } from "react";

import {
  ListItem as MUIListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";

import { SxProps, Theme } from "@mui/system";

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
  secondaryAction?: ReactNode;
  divider?: boolean;
  sx?: SxProps<Theme>;
  //   onClick: React.MouseEventHandler<HTMLButtonElement>;
  handleCheck?(): void;
  handleStar?(): void;
}

const ListItem = ({
  id,
  itemText = "Item text",
  checked = false,
  starred = false,
  divider = true,
  sx,
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
      divider={divider}
      secondaryAction={
        starClick ? (
          <IconButton onClick={() => handleStar()}>
            <StarIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => handleStar()}>
            <StarOutlineIcon />
          </IconButton>
        )
      }
      sx={sx}
    >
      <ListItemIcon>
        {checkClick ? (
          <IconButton onClick={() => handleCheck()}>
            <CheckBoxIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => handleCheck()}>
            <CheckBoxOutlineBlankIcon />{" "}
          </IconButton>
        )}
      </ListItemIcon>
      <ListItemText
        primary={checkClick ? `${itemText} ( Important Task )` : itemText}
        sx={{
          textDecoration: starClick ? `line-through` : ` `,
        }}
      />
    </MUIListItem>
  );
};

export default ListItem;
