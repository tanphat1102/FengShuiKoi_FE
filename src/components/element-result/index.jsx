import React from "react";
import "./element-result.scss";

function ElementResult() {
  // Mock data
  const mockData = {
    name: "Nguyễn Văn A",
    dob: "1990-01-01",
    elementType: "Hỏa",
  };

  // Function to determine the icon based on the element type
  const getIconByElementType = (elementType) => {
    switch (elementType) {
      case "Kim":
        return "src/assets/icon-kim.png";
      case "Mộc":
        return "src/assets/icon-moc.png";
      case "Thủy":
        return "src/assets/icon-thuy.png";
      case "Hỏa":
        return "src/assets/icon-hoa.png";
      case "Thổ":
        return "src/assets/icon-tho.png";
      default:
        return "src/assets/icon-default.png";
    }
  };

  const icon = getIconByElementType(mockData.elementType);

  const elementIdMap = {
    Kim: "kim",
    Mộc: "moc",
    Thủy: "thuy",
    Hỏa: "hoa",
    Thổ: "tho",
  };

  const elementId = elementIdMap[mockData.elementType] || "default";

  return (
    <div className="element-result-main-container">
      <div className={`element-result-container`} id={elementId}>
        <div className="image">
          <img src={icon} alt="Element Icon" />
        </div>
        <div className="name-info">
          <p>Tên: {mockData.name}</p>
          <p>Ngày sinh: {mockData.dob}</p>
          <p>Mệnh của bạn: {mockData.elementType}</p>
        </div>
      </div>
    </div>
  );
}

export default ElementResult;
