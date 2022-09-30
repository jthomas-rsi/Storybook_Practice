import React from "react";

import {
  List as MUIList,
  ListSubheader,
  Skeleton,
  Stack,
  Typography,
  Paper,
  SxProps,
  Theme,
} from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

import ListItem from "./ListItem";

export interface ListProps {
  items: Array<object>;
  loading?: boolean;
  sx?: SxProps<Theme>;
}

const dummyTasks = [
  { id: "1", itemText: "Default", checked: false, starred: false },
  { id: "2", itemText: "Checked", checked: true, starred: false },
  { id: "3", itemText: "Completed", checked: false, starred: true },
];

const List = ({
  items = dummyTasks,
  loading = false,
  sx,
}: ListProps): JSX.Element => {
  if (loading) {
    return (
      <Stack
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#BDE0FE",
          padding: "1em",
        }}
      >
        <Skeleton width={"90%"} height={60} animation="wave" />
        <Skeleton width={"90%"} height={60} animation="wave" />
        <Skeleton width={"90%"} height={60} animation="wave" />
        <Skeleton width={"90%"} height={60} animation="wave" />
        <Skeleton width={"90%"} height={60} animation="wave" />
        <Skeleton width={"90%"} height={60} animation="wave" />
      </Stack>
    );
  }
  if (items.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#BDE0FE",
          padding: "3em",
        }}
      >
        <Typography variant="h6">{"Your list is empty! "}</Typography>
        <InsertEmoticonIcon sx={{ fontSize: "10em" }} />
        <Typography variant="h6">{"Nothing left to do but Relax! "}</Typography>
      </div>
    );
  }
  return (
    <MUIList
      subheader={
        <ListSubheader sx={{ backgroundColor: "#BDE0FE" }}>
          <Typography variant="h4">Things To Do:</Typography>
        </ListSubheader>
      }
      sx={{
        padding: "3em",
        backgroundColor: "#BDE0FE",
      }}
    >
      {dummyTasks.map((item) => (
        <ListItem
          id={item.id}
          key={item.id}
          itemText={item.itemText}
          checked={item.checked}
          starred={item.starred}
        />
      ))}
    </MUIList>
  );
};

export default List;
