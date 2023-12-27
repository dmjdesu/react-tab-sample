import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Tabs from "./Tabs.js";
import { BrowserRouter as Router } from "react-router-dom";

const Tab = ({ label, children }) => {
  return <div>{children}</div>;
};

export default function App() {
  return (
    <Router>
      <div>
        <Tabs>
          <Tab label="Tab1">Content of Tab 1</Tab>
          <Tab label="Tab2">Content of Tab 2</Tab>
          <Tab label="Tab3">Content of Tab 3</Tab>
        </Tabs>
      </div>
    </Router>
  );
}
