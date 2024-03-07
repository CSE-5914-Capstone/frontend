import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function SelectedSearch({ songName }) {
  return (
    <Card variant="outlined" style={{ margin: "20px auto", maxWidth: 400 }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Selected Song
        </Typography>
        <Typography variant="body1" component="div">
          <strong>{songName}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SelectedSearch;
