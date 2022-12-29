import React, { useState, useEffect } from "react";
import OverallCentered from "../../components/Typesetting_components/Overall_centered";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";

export default function AplikasiMitra() {
  const StateEmail = useSelector((state) => state.UserName);

  const [Isapplication, SetIsapplication] = React.useState(false);
  const [applicationListDATA, SetapplicationListDATA] = React.useState();

  useEffect(() => {
    ApplicationList(StateEmail);
  }, []);

  useEffect(() => {
    if (applicationListDATA != null) {
      SetIsapplication(true);
    }
  }, [applicationListDATA]);

  const ApplicationList = async (StateEmail) => {
    // console.log(typeof(StateEmail));
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
      });
  };

  return (
    <>
      <OverallCentered>
        <Box sx={{ textAlign: "center", mb: 3 }}>查找伴侣</Box>
        {Isapplication ? (
          <ApplicationMap listDATA={applicationListDATA} />
        ) : null}
      </OverallCentered>
    </>
  );
}

const ApplicationMap = (props) => {
  const { listDATA } = props;
  return (
    <div>
      {listDATA.map((item, index) => {
        return (
          <Box key={index}>
            <div>{item["applicant_id"]}</div>
            <div>{item["user_id"]}</div>
          </Box>
        );
      })}
    </div>
  );
};
