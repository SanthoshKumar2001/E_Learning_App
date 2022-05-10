import React from "react";
import './Navigationbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Tab, Tabs } from "react-bootstrap";
import {useState} from 'react'
import AllCourses from "./AllCourses.js";
import Dashboard from "./Dashboard";
//import { Button } from "bootstrap";

function Navigationbar(){
    const [key, setKey] = useState('home');
    return (
        <div>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3">
                <Tab eventKey="home" title="All Courses">
                    <AllCourses/>
                </Tab>
                <Tab eventKey="profile" title="My Dashboard">
                    <Dashboard/>
                </Tab>
            </Tabs>
        </div>
    );
};
export default Navigationbar