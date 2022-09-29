import React from "react";

import {
  List as MUIList,
  ListSubheader,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

import ListItem from "./ListItem";

export interface ListProps {
  items: Array<object>;
  loading: boolean;
}

const dummyTasks = [
  { id: "1", itemText: "Default", checked: false, starred: false },
  { id: "2", itemText: "Checked", checked: true, starred: false },
  { id: "3", itemText: "Completed", checked: false, starred: true },
];

const List = ({
  items = dummyTasks,
  loading = false,
}: ListProps): JSX.Element => {
  if (loading) {
    return (
      <Stack style={{ justifyContent: "center", alignItems: "center" }}>
        <Skeleton width={"100%"} height={60} />
        <Skeleton width={"100%"} height={60} />
        <Skeleton width={"100%"} height={60} />
        <Skeleton width={"100%"} height={60} />
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
        }}
      >
        <InsertEmoticonIcon sx={{ fontSize: "100px" }} />
        <Typography variant="caption">
          {"Relax! there's nothing left to do"}
        </Typography>
      </div>
    );
  }
  return (
    <div>
      <MUIList
        subheader={
          <ListSubheader>
            <Typography variant="h6">Things To Do:</Typography>
          </ListSubheader>
        }
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
    </div>
  );
};

export default List;
