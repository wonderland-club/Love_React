import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import TableCell from "@mui/material/TableCell";
//伴侣页面
const Companion = () => {
  const esp32Arr = ["a", "b", "c", "d", "e"];
  const publicTopic = "test";
  const topicArr = ["kido1", "kido2", "kido3", "kido4", "kido5"];
  return (
    <>
      <Box sx={{ marginTop: "15px" }}></Box>
      <TableCell sx={{ display: "flex", justifyContent: " center" }}>
        家庭场景试灯控
      </TableCell>
      <Grid container columns={15}>
        {esp32Arr.map((item, index) => {
          return (
            <Grid
              sx={{ display: "flex", justifyContent: " center", marginTop: 3 }}
              xs={5}
              md={3}
              key={index}
            >
              <Box>
                <Button size="large" variant="outlined">
                  {item}
                </Button>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Companion;
