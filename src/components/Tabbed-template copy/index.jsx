import React, { useState } from "react";
import "./Tabbed.scss"; // Assuming you have a CSS module for styles
import { Button, Form, Input } from "antd";
import { DatePicker, Space } from "antd";
import DynamicInputFields from "../DynamicInputFields";
const Tabbled = ({ tab1, tab2, form1, form2 }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className={"tabFormContainer"}>
      <div className="styles.tabs">
        <button
          className={`${"tabButton"} ${
            activeTab === "tab1" ? "activeTab1" : "inactiveTab1"
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          {tab1}
        </button>
        <button
          className={`${"tabButton"} ${
            activeTab === "tab2" ? "activeTab2" : "inactiveTab2"
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          {tab2}
        </button>
      </div>
      <div className={"formContainer"}>
        {activeTab === "tab1" && (
          <form className={"form"}>
            <div>{form1}</div>
          </form>
        )}
        {activeTab === "tab2" && (
          <form className={"form"}>
            <div>{form2}</div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Tabbled;
