import React, { useState } from "react";
import "./Tabbed.scss";
import api from "../../config/axios";
import DynamicInputFields from "../DynamicInputFields";

const Tabbed = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [tankShape, setTankShape] = useState("");
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    setDob(formatDate(dateValue));
  };

  const parseDate = (formattedDate) => {
    const [day, month, year] = formattedDate.split("/");
    return `${year}-${month}-${day}`;
  };

  const formatDate = (date) => {
    if (!date) return "";
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting form with values:", { fullName, dob });

    const newErrors = {};

    if (!fullName) newErrors.fullName = "Họ và tên là bắt buộc.";
    if (!dob) newErrors.dob = "Ngày tháng năm sinh là bắt buộc.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setResult(null); // Reset result before the new API call
      const response = await api.get("/canchi/menh", {
        params: { date: dob } // Use `date` as query parameter
      });
      // dispatch(setResult(response.data));
      setResult(response.data); // Store the API result
      console.log(response.data)
      dispatch(setElementData({
        name: fullName,
        dob,
        elementType: response.data, // Adjust according to your response structure
      }));
    } catch (error) {
      console.error("API request failed:", error); // Log error details
      setErrors({ api: "Có lỗi xảy ra khi kết nối tới server." });
    }

    setFullName("");
    setDob("");
    setErrors({});
  };

  return (
    <div className="tabFormContainer">
      <div className="tabs">
        <button
          className={`tabButton ${activeTab === "tab1" ? "activeTab1" : "inactiveTab1"}`}
          onClick={() => setActiveTab("tab1")}
        >
          TRA CỨU
        </button>
        <button
          className={`tabButton ${activeTab === "tab2" ? "activeTab2" : "inactiveTab2"}`}
          onClick={() => setActiveTab("tab2")}
        >
          TÍNH ĐỘ PHÙ HỢP
        </button>
      </div>
      <div className="formContainer">
        {activeTab === "tab1" && (
          <form onSubmit={handleSubmit} className="form">
            <span className="heading">Tra cứu mệnh phong thủy</span>
            <div className="caption">
              <p>
                Tra cứu cá koi, đồ trang trí và đặc điểm hồ cá phù hợp với bạn.
              </p>
              <span>Chúng tôi sẽ sử dụng ngày sinh theo </span>
              <span id="highlight">Dương lịch</span>
              <span> để tra cứu mệnh cho bạn.</span>
            </div>
            <label htmlFor="fullName">Họ và tên:</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Nhập tên của bạn"
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}

            <label htmlFor="dob">Ngày tháng năm sinh:</label>
            <input
              type="date"
              id="dob"
              value={parseDate(dob)}
              onChange={handleDateChange}
              placeholder="Ngày sinh của bạn"
            />
            {errors.dob && <p className="error">{errors.dob}</p>}

            <div className="form-footer">
              <button type="submit" className="submit-btn">Tính toán</button>
            </div>
          </form>
        )}
        {activeTab === "tab2" && (
          <form onSubmit={handleSubmit} className="form">
            <span className="heading">Tính độ phù hợp</span>
            <div className="caption">
              <p>Dựa trên đặc điểm cá và hồ cá của bạn tính độ phù hợp</p>
              <span>Chúng tôi sẽ sử dụng ngày sinh theo </span>
              <span id="highlight">Dương lịch</span>
              <span> để tính cho bạn.</span>
            </div>
            <label htmlFor="fullName">Họ và tên:</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Nhập tên của bạn"
            />

            <label htmlFor="dob">Ngày tháng năm sinh:</label>
            <input
              type="date"
              id="dob"
              value={parseDate(dob)}
              onChange={handleDateChange}
              placeholder="Ngày sinh của bạn"
            />

            <label htmlFor="tankShape">Hình dáng hồ:</label>
            <select
              id="tankShape"
              value={tankShape}
              onChange={(e) => setTankShape(e.target.value)}
            >
              <option value="">Chọn hình dáng hồ</option>
              <option value="round">Tròn</option>
              <option value="square">Vuông</option>
              <option value="rectangular">Chữ nhật</option>
              <option value="oval">Oval</option>
            </select>

            <label htmlFor="fish">Cá của bạn:</label>
            <DynamicInputFields title="Cá" />

            <div className="form-footer">
              <button type="submit" className="submit-btn">Tính toán</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Tabbed;
