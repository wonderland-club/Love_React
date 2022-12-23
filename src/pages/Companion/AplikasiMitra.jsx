import React, { useState, useEffect } from "react";
import OverallCentered from "../../components/Typesetting_components/Overall_centered";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";

export default function AplikasiMitra() {
  const StateEmail = useSelector((state) => state.UserName);

  useEffect(() => {
    ApplicationList(StateEmail);
  }, []);

  const [Isapplication, SetIsapplication] = React.useState(false);
  const [applicationListDATA, SetapplicationListDATA] = React.useState([]);
  async function ApplicationList(StateEmail) {
    await fetch("api/WievUserApplication?email=" + StateEmail, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject("something went wrong!");
        }
      })
      .then((data) => {
        SetapplicationListDATA(data);
        console.log(applicationListDATA);
        SetIsapplication(true);
      });
  }

  return (
    <>
      <OverallCentered>
        <Box sx={{ textAlign: "center", mb: 3 }}>查找伴侣</Box>
        {/* {Isapplication ? <ApplicationMap list={applicationListDATA} /> : null} */}
      </OverallCentered>
    </>
  );
}

const ApplicationMap = ({ listDATA }) => {
  console.log(listDATA[0]);
  return (
    <div>
      {listDATA.map((item, index) => {
        console.log(item.applicant_id);
        console.log(item.user_id);
        // return (
        //   <Box key={index}>
        //     <div>{item.applicant_id}</div>
        //     <div>{item.user_id}</div>
        //   </Box>
        // );
      })}
    </div>
  );
};
