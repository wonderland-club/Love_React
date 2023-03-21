import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import TableCell from "@mui/material/TableCell";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect, useRef } from "react";
import mqtt from "mqtt";
import TextField from "@mui/material/TextField";
const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";
const YOUR_API_KEY = "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";

//伴侣页面
const Companion = () => {
  const clientRef = useRef(null);

  // 连接MQTT
  useEffect(() => {
    clientRef.current = mqtt.connect(
      "wss://junyan:elite_392101@mqtt.longan.link:8084/mqtt"
    );
    clientRef.current.on("connect", () => {
      console.log("Connected to MQTT broker");
    });

    return () => {
      clientRef.current.end();
    };
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "Scenes",
      headerName: "场景",
      width: 150,
      editable: true,
      description: "请填入场景名称",
    },
    {
      field: "Portfolio",
      headerName: "esp32组合",
      width: 150,
      editable: true,
      description: "填入需要组合的esp32y，以（.）来分开",
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        const handleButtonClick = () => {
          //处理点击事件
          console.log(`Clicked for row ${params.row.id}`);
          clientRef.current.publish(
            params.row.Topic,
            "esp" + params.row.Portfolio
          );
        };

        return (
          <Button variant="contained" onClick={handleButtonClick}>
            Click me Actions
          </Button>
        );
      },
    },
  ];

  const rows = [
    { id: 1, Scenes: "去往厕所", Portfolio: ".1.2.3.4", Topic: "kidoTopic1" },
    { id: 2, Scenes: "去往客厅", Portfolio: ".1.5.6", Topic: "kidoTopic2" },
    { id: 3, Scenes: null, Portfolio: null, Topic: "kidoTopic3" },
    { id: 4, Scenes: null, Portfolio: null, Topic: "kidoTopic4" },
    { id: 5, Scenes: null, Portfolio: null, Topic: "kidoTopic5" },
  ];

  const esp32Arr = ["1", "2", "3", "4", "5", "6"];
  const [chatGPTText, setChatGPTText] = useState("");

  const submitGPT = () => {
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${YOUR_API_KEY}`,
        "model": "gpt-3.5-turbo",
      },
      body: JSON.stringify({
        prompt: chatGPTText,
        max_tokens: 1000,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log("data", data))
      .catch((error) => console.error("error", error));
  };

  return (
    <>
      <Box sx={{ marginTop: "15px" }}></Box>
      <TableCell sx={{ display: "flex", justifyContent: " center" }}>
        <Button
          onClick={() => {
            clientRef.current.publish("kido", "kido");
          }}
        >
          {" "}
          家庭场景物联
        </Button>
      </TableCell>

      {/* 调用chatGPT */}
      <Box
        sx={{ mt: 2, width: "100%", display: "flex", justifyContent: "center" }}
      >
        <TextField
          sx={{ width: 800 }}
          // id="outlined-name"
          label="hi ChatGPT"
          value={chatGPTText}
          onChange={(event) => {
            setChatGPTText(event.target.value);
            // console.log(event.target.value);
          }}
        />
        <Button onClick={submitGPT}>to ChatGPT</Button>
      </Box>

      {/* 单个打开 */}
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
                <Button
                  size="large"
                  variant="outlined"
                  onClick={() => {
                    clientRef.current.publish("kidoShow", "esp." + item);
                  }}
                >
                  ESP32-{item}
                </Button>
              </Box>
            </Grid>
          );
        })}
      </Grid>

      {/*组合打开 */}
      <Box sx={{ height: 400, width: "100%", mt: 5 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};

export default Companion;
