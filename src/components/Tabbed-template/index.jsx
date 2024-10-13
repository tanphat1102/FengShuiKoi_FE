import React, { useState } from "react";
import "./Tabbed.scss"; // Assuming you have a CSS module for styles
import { Button, Form, Input } from "antd";
import { DatePicker, Space } from "antd";
import DynamicInputFields from "../DynamicInputFields";
const Tabbled = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    // Validate full name
    if (!fullName) {
      newErrors.fullName = "Họ và tên là bắt buộc.";
    }

    // Validate date of birth
    if (!dob) {
      newErrors.dob = "Ngày tháng năm sinh là bắt buộc.";
    }

    // Validate dynamic input fields if needed

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle valid form submission
    toast.success(
      `Form submitted with:\nHọ và tên: ${fullName}\nNgày sinh: ${dob}`
    );

    // Reset form
    setFullName("");
    setDob("");
    setErrors({});
  };

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
          TRA CỨU
        </button>
        <button
          className={`${"tabButton"} ${
            activeTab === "tab2" ? "activeTab2" : "inactiveTab2"
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          TÍNH ĐỘ PHÙ HỢP
        </button>
      </div>
      <div className={"formContainer"}>
        {activeTab === "tab1" && (
          <form onSubmit={handleSubmit} className={"form"}>
            <span className={"heading"}>Tra cứu mệnh phong thủy</span>
            <span className="text">
              <div className={"caption"}>
                <p>
                  Tra cứu cá koi, đồ trang trí và đặc điểm hồ cá phù hợp với
                  bạn.
                </p>
                <span>Chúng tôi sẽ sử dụng ngày sinh theo</span>{" "}
                <span id={"highlight"}>Dương lịch</span>{" "}
                <span>để tra cứu mệnh cho bạn.</span>
              </div>
            </span>
            <label htmlFor="fullName">Họ và tên:</label>
            <input type="text" id="fullName" placeholder="Nhập tên của bạn" />
            <label htmlFor="dob">Ngày tháng năm sinh:</label>
            <input type="date" id="dob" placeholder="Ngày sinh của bạn" />
            <div className={"form-footer"}>
              <button type="submit" className={"submit-btn"}>
                Tính toán
              </button>
            </div>
          </form>
        )}
        {activeTab === "tab2" && (
          <form onSubmit={handleSubmit} className={"form"}>
            <span className={"heading"}>Tính độ phù hợp</span>
            <span className="text">
              <div className={"caption"}>
                <p>Dựa trên đặc điểm cá và hồ cá của bạn tính độ phù hợp</p>
                <span>Chúng tôi sẽ sử dụng ngày sinh theo</span>{" "}
                <span id={"highlight"}>Dương lịch</span>{" "}
                <span>để tính cho bạn.</span>
              </div>
            </span>
            <label htmlFor="fullName">Họ và tên:</label>
            <input type="text" id="fullName" placeholder="Nhập tên của bạn" />
            <label htmlFor="dob">Ngày tháng năm sinh:</label>
            <input type="date" id="dob" placeholder="Ngày sinh của bạn" />
            <label htmlFor="tankShape">Hình dáng hồ:</label>
            <select id="tankShape">
              <option value="">Chọn hình dáng hồ</option>
              <option value="round">Tròn</option>
              <option value="square">Vuông</option>
              <option value="rectangular">Chữ nhật</option>
              <option value="oval">Oval</option>
            </select>
            <label htmlFor="dob">Cá của bạn:</label>
            <DynamicInputFields title="Cá"></DynamicInputFields>
            <div className={"form-footer"}>
              <button type="submit" className={"submit-btn"}>
                Tính toán
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Tabbled;
