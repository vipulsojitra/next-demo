import {
  Box,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";

const menus = [
  "Groups",
  "Test1",
  "Test2",
  "Test3",
  "Test4",
  "Test5",
  "Test6",
  "Test7",
];

function Menubar() {
  return (
    <Box width={"30%"} sx={{ background: "#4f46e5" }}>
      <Box
        p="15px"
        width="100%"
        sx={{
          display: "flex",
        }}
      >
        <InputLabel
          variant="filled"
          sx={{
            fontSize: "25px",
            color: "#a5b4fc",
            fontWeight: "700",
            WebkitTransform: "none",
          }}
        >
          Config
        </InputLabel>
      </Box>
      <List>
        {menus.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                  color: "#eef2ff",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Menubar;
