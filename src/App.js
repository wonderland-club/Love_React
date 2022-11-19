import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import LoveNotes from "./pages/Note/LoveNotes";
import AddNote from "./pages/Note/AddNote";
import LoveCourse from "./pages/Course/LoveCourse";
import AddJourney from "./pages/Course/AddJourney";
import AddCompanion from "./pages/Companion/AddCompanion";
import Companion from "./pages/Companion/Companion";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { logIn, logOut } from "../redux/action";
import { logIn, logOut, SetUserName } from "./redux/action";

import {
    Login_COMPONENT_ROUTE,
    Register_COMPONENT_ROUTE,
    LoveNotes_COMPONENT_ROUTE,
    AddNote_COMPONENT_ROUTE,
    LoveCourse_COMPONENT_ROUTE,
    AddJourney_COMPONENT_ROUTE,
    AddCompanion_COMPONENT_ROUTE,
    Companion_COMPONENT_ROUTE,
} from "./route-constants";


function App() {
    const location = useLocation(); //查看当前的location
    const dispatch = useDispatch();

    const Navigate = useNavigate();
    const userName_1 = useSelector((state) => state.UserName);


    const fetchMe = async () => {
        await fetch("api/me", {
            method: "GET",

            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify(DATA),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject("something went wrong!");
                }
            })
            .then((data) => {
                // 登入成功
                // console.log(data["username"]);
                dispatch(SetUserName(data["username"]))
                console.log(userName_1);
                // console.log(userName);
                dispatch(logIn());
                Navigate(LoveNotes_COMPONENT_ROUTE);
                return console.log("登入成功");
            })
            .catch((error) => {
                Navigate(Login_COMPONENT_ROUTE);
                console.log("未登入", error);
            });
    }
    useEffect(() => {
        // console.log("====" + location.pathname);
        if (location.pathname == "/Login") {
            console.log("调用初始化函数");
            dispatch(logOut());
        }
    }, [dispatch, location.pathname]);

    useEffect(() => {
        fetchMe();
    }, []);

    return (
        <div>
            <Layout>

                <Routes>
                    <Route path={`${Login_COMPONENT_ROUTE}`} element={<Login />} />
                    <Route path={`${Register_COMPONENT_ROUTE}`} element={<Register />} />
                    <Route
                        path={`${LoveNotes_COMPONENT_ROUTE}`}
                        element={<LoveNotes />}
                    />
                    <Route path={`${AddNote_COMPONENT_ROUTE}`} element={<AddNote />} />
                    <Route
                        path={`${LoveCourse_COMPONENT_ROUTE}`}
                        element={<LoveCourse />}
                    />
                    <Route
                        path={`${AddJourney_COMPONENT_ROUTE}`}
                        element={<AddJourney />}
                    />
                    <Route
                        path={`${AddCompanion_COMPONENT_ROUTE}`}
                        element={<AddCompanion />}
                    />
                    <Route
                        path={`${Companion_COMPONENT_ROUTE}`}
                        element={<Companion />}
                    />
                </Routes>
                <div style={{ marginBottom: '100px' }} />

            </Layout>

        </div>
    );
}

export default App;
