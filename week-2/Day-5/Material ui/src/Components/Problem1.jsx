import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function MainBox() {
  return (
    <Container sx={{ backgroundColor: "yellow",marginTop:"15px" }}>
      <Box sx={{ flexGrow: 1, backgroundColor: "lightblue" }}>
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 2 }}
        >
          {Array.from(Array(12)).map((_, index) => (
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={index}>
              <Item>{index + 1}</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
