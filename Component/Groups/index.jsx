import { Box, Button, InputLabel, MenuItem, TextField } from "@mui/material";
import React from "react";

const currencies = [
  {
    value: "Department",
    label: "Department",
  },
  {
    value: "Team",
    label: "Team",
  },
  {
    value: "Sub Team",
    label: "Sub Team",
  },
];

function Groups() {
  return (
    <Box
      component="main"
      width="70%"
      sx={{
        flexGrow: 1,
        bgcolor: "background.default",
        p: 3,
        position: "relative",
        height: "500px",
      }}
    >
      <Box
        p="15px 0"
        width="100%"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <InputLabel
          variant="filled"
          sx={{
            fontSize: "25px",
            color: "#a5b4fc",
            fontWeight: "700",
            WebkitTransform: 'none',
          }}
        >
          Groups
        </InputLabel>
        <InputLabel
          variant="filled"
          sx={{
            fontSize: "25px",
            color: "Grey",
            fontWeight: "700",
            WebkitTransform: 'none',
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: "#a5b4fc",
            }}
          >
            Back
          </Button>
        </InputLabel>
      </Box>
      <Box>
        <Box m="10px 0">
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            sx={{
              width: "225px",
              color: "#a5b4fc",
            }}
          />
        </Box>
        <Box m="10px 0">
          <TextField
            id="Type"
            select
            label="type"
            sx={{
              width: "225px",
            }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: "#a5b4fc",
          }}
        >
          Create
        </Button>
      </Box>
    </Box>
  );
}

export default Groups;
