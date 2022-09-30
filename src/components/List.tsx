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
          backgroundColor: "white",
          padding: "1em",
        }}
      >
        <Skeleton width={"90%"} height={60} />
        <Skeleton width={"90%"} height={60} />
        <Skeleton width={"90%"} height={60} />
        <Skeleton width={"90%"} height={60} />
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
          backgroundColor: "white",
          padding: "3em",
        }}
      >
        <InsertEmoticonIcon sx={{ fontSize: "10em" }} />
        <Typography variant="h6">
          {"Relax! There's nothing left to do"}
        </Typography>
      </div>
    );
  }
  return (
    <MUIList
      subheader={
        <ListSubheader>
          <Typography variant="h4">Things To Do:</Typography>
        </ListSubheader>
      }
      sx={{
        padding: "3em",
        backgroundColor: "white",
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
