import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import AddCardIcon from "@mui/icons-material/AddCard";
const LoveNotes = () => {
  const centerGrid = {
    display: "flex",
    justifyContent: "center",
    padding: "5px",
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1, mt: 9 }}>
        <Box s={{}}>
          <Button
            size="40px"
            color="secondary"
            endIcon={<AddCardIcon fontSize="large" />}
          >
            Secondary
          </Button>
        </Box>
        <Grid
          container
          // spacing={{ xs: 2, md: 2 }}

          // columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid xs={6} sm={4} md={3} item style={{ ...centerGrid }}>
            <LoveCard
              imageSrc={"https://junyan101.gitee.io/si-yuan/img/1.jpg"}
              title={"keLi"}
              Content={"卢卡斯加大素和杜萨核对"}
              data={"2022-11-28"}
            />
          </Grid>
          <Grid xs={6} sm={4} md={3} item style={{ ...centerGrid }}>
            <LoveCard
              imageSrc={"https://junyan101.gitee.io/si-yuan/img/3.jpg"}
              title={"liSa"}
              Content={"卢卡斯加大素和杜萨核对"}
              data={"2022-01-05"}
            />
          </Grid>
          <Grid xs={6} sm={4} md={3} item style={{ ...centerGrid }}>
            <LoveCard
              imageSrc={"https://junyan101.gitee.io/si-yuan/img/2.jpg"}
              title={"kaiJi"}
              Content={"卢卡斯加大素和杜萨核对"}
              data={"2022-01-20"}
            />
          </Grid>
          <Grid xs={6} sm={4} md={3} item style={{ ...centerGrid }}>
            <LoveCard
              imageSrc={"https://junyan101.gitee.io/si-yuan/img/4.jpg"}
              title={"luSe"}
              Content={
                "卢卡斯加大素和杜萨核对dfgdfg 打发手动阀打发十分士大夫士大夫深度复第三方首付大概豆腐干风格地方地方跟岁的法国递归 递归发"
              }
              data={"2022-10-08"}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

const LoveCard = (props) => {
  const style = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  };

  return (
    <Card sx={{ width: 345, minWidth: 150 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.imageSrc}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div className={"ss"} style={style}>
              {props.Content}
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          {props.data}
        </Button>
      </CardActions>
    </Card>
  );
};

export default LoveNotes;
