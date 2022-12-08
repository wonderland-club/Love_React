import { Box } from "@mui/material";
import React from "react";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Button from "@mui/material/Button";
import { GetUserName } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { AddCompanion_COMPONENT_ROUTE } from "../../route-constants";
import { useNavigate, useLocation } from "react-router-dom";

const settingList = [
  { title: "伴侣关系", list: ["添加伴侣", "查看申请"] },
  { title: "密码", list: ["修改密码", "找回密码"] },
];
export default function PersonalAccount() {
  return (
    <>
      <Container maxWidth="sm">
        <>
          <Box sx={{ textAlign: "center" }}>👤个人设置 </Box>
          <PinnedSubheaderList />
        </>
      </Container>
    </>
  );
}

function PinnedSubheaderList() {
  // const dispatch = useDispatch();
  const Navigate = useNavigate();

  // 添加伴侣
  function Add_a_partner() {
    Navigate(AddCompanion_COMPONENT_ROUTE);
  }
  // 查看申请
  function View_Application() {}
  // 修改密码
  function Change_password() {}

  // 找回密码
  function Retrieve_password() {}

  // 设置点击
  async function settingListClick(setting_item) {
    // const email = dispatch(GetUserName);
    switch (setting_item) {
      // 添加伴侣
      case settingList[0]["list"][0]:
        Add_a_partner();
        break;
      // 查看申请
      case settingList[0]["list"][1]:
        View_Application();
        break;
      // 修改密码
      case settingList[1]["list"][0]:
        Change_password();
        break;
      // 找回密码
      default:
        Retrieve_password();
        break;
    }
  }
  return (
    <List
      sx={{
        width: "100%",
        height: "75vh",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        // maxHeight: 1000,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {settingList.map((sectionId) => {
        let List_Item_Text = "null";
        if (sectionId["title"] === settingList[0]["title"]) {
          List_Item_Text = settingList[0]["list"];
        } else if (sectionId["title"] === settingList[1]["title"]) {
          List_Item_Text = settingList[1]["list"];
        }
        return (
          <li key={`section-${sectionId["title"]}`}>
            <ul>
              <ListSubheader>{` ${sectionId["title"]}`}</ListSubheader>
              {List_Item_Text.map((item) => {
                return (
                  <ListItem key={`item-${sectionId["title"]}-${item}`}>
                    <Button
                      onClick={() => {
                        settingListClick(item);
                      }}
                    >{`${sectionId["title"]} - ${item}`}</Button>
                  </ListItem>
                );
              })}
            </ul>
          </li>
        );
      })}
    </List>
  );
}
