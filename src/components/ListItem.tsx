import React, { ReactNode } from "react";

import {
  List,
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
  children: ReactNode;
  // secondaryAction: ReactNode;
}

const ListItem = ({
  id,
  itemText = "Item text",
  checked = true,
  starred = true,
  children,
}: // secondaryAction,
ListItemProps): JSX.Element => {
  //create conditional rendering for checked & starred

  return (
    <MUIListItem
      id={id}
      // secondaryAction
    >
      <ListItemIcon>
        {checked ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon />}
      </ListItemIcon>
      <ListItemText primary={itemText} />
      {starred ? <StarOutlineIcon /> : <StarIcon />}
    </MUIListItem>
  );
};

export default ListItem;
