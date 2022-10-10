import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
const LoveNotes = () => {
  const centerGrid = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "center",
    justifyContent: "center",
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1, mt: 9 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          // columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid xs={6} sm={4} md={4} style={{ centerGrid }}>
            <LoveCard />
          </Grid>
          <Grid xs={6} sm={4} md={4} style={{ centerGrid }}>
            <LoveCard />
          </Grid>
          <Grid xs={6} sm={4} md={4} style={{ centerGrid }}>
            <LoveCard />
          </Grid>
          <Grid xs={6} sm={4} md={4} style={{ centerGrid }}>
            <LoveCard />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

const LoveCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};
export default LoveNotes;
