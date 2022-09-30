import React, { ReactEventHandler, ReactNode, useState } from "react";

import {
  ListItem as MUIListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Paper,
  Typography,
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
  sx?: SxProps<Theme>;
  // onClick?: ReactEventHandler;
  handleCheck?: EventListener;
  handleStar?: EventListener;
}

const ListItem = ({
  id,
  itemText = "Item text",
  checked = false,
  starred = false,
  sx,
}: // onClick,
ListItemProps): JSX.Element => {
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
            <StarIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => handleStar()}>
            <StarOutlineIcon />
          </IconButton>
        )
      }
      sx={{ border: "solid 1px black", backgroundColor: "#CDB4DB" }}
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
        primary={
          checkClick ? (
            <Typography variant="subtitle1" sx={{ color: "black" }}>
              {`${itemText} ( Important Task )`}{" "}
            </Typography>
          ) : (
            <Typography variant="subtitle1" sx={{ color: "black" }}>
              {itemText}
            </Typography>
          )
        }
        sx={{
          textDecoration: starClick ? `line-through` : ` `,
        }}
      />
    </MUIListItem>
  );
};

export default ListItem;
