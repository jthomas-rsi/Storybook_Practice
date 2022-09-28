import React from "react";

import {
  List as MUIList,
  Skeleton,
  Stack,
  Typography,
  Box,
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
      <Stack>
        <Skeleton width={"50%"} height={60} />
        <Skeleton width={"50%"} height={60} />
        <Skeleton width={"50%"} height={60} />
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
      <MUIList>
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
