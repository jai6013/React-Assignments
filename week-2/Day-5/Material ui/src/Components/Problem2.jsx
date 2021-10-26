import {
  Button,
  Checkbox,
  Container,
  MenuItem,
  TextField,
} from "@mui/material";

import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import * as React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'blue',
    color: "white",
    fontWeight:"bold"
  },
});
export const Problem2 = () => {
  const [checked, setChecked] = useState(false);
  const classes = useStyles()
  const handleCheck = () => {
    setChecked((prev) => !prev);
  };
  const [currency, setCurrency] = useState("EUR");

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  const handleChange = (e) => {
    setCurrency(e.target.value);
  };
  
  return (
    <>
      <Container fixed className={classes.root}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
          className={classes.root}
            variant="outlined"
            size="large"
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            Click
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Checkbox
            checked={checked}
            onChange={handleCheck}
            checkedIcon={<FavoriteBorderIcon />}
            size="medium"
            color="secondary"
          />{" "}
          {checked ? "Married" : "Not Married"}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            label="UserName"
            variant="outlined"
            color="secondary"
            size="small"
            helperText="IA will not help up"
            required
            error={false}
          />
        </Box>
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={currency}
            onChange={handleChange}
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box><Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
              <TextField type = "date"/>
          </Box>
      </Container>
    </>
  );
};
