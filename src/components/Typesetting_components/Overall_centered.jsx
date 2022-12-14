import React from "react";
import Container from "@mui/material/Container";

export default function Overall_centered({ children }) {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          mt:5
        }}
        maxWidth="sm"
      >
        {children}
      </Container>
    </>
  );
}
