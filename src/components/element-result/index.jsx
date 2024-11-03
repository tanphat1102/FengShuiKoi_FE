import React from "react";
import { useSelector } from "react-redux";
import "./element-result.scss";

function ElementResult() {
  // Function to determine the icon based on the element type
  const getIconByElementType = (elementType) => {
    switch (elementType) {
      case "Kim":
        return "src/assets/icon-kim.png"; // Adjust the path as needed
      case "Mộc":
        return "src/assets/icon-moc.png"; // Adjust the path as needed
      case "Thủy":
        return "src/assets/icon-thuy.png"; // Adjust the path as needed
      case "Hỏa":
        return "src/assets/icon-hoa.png"; // Adjust the path as needed
      case "Thổ":
        return "src/assets/icon-tho.png"; // Adjust the path as needed
      default:
        return "src/assets/icon-default.png"; // Default icon if none matches
    }
  };

  const elementData = useSelector((state) => state.element.elementData);
  const icon = elementData ? getIconByElementType(elementData.elementType) : "src/assets/icon-default.png";
  
  // Map the elementType to corresponding ID
  const elementIdMap = {
    Kim: "kim",
    Mộc: "moc",
    Thủy: "thuy",
    Hỏa: "hoa",
    Thổ: "tho",
  };

  const elementId = elementData ? elementIdMap[elementData.elementType] : "default";

  return (
    <div className="element-result-main-container">
      <div className={`element-result-container`} id={elementId}>
        <div className="image">
          <img src={icon} alt="Element Icon" />
        </div>
        <div className="name-info">
          {elementData ? (
            <>
              <p>Tên: {elementData.name}</p>
              <p>Ngày sinh: {elementData.dob}</p>
              <p>Mệnh của bạn: {elementData.elementType}</p>
            </>
          ) : (
            <p>Thông tin chưa có sẵn</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ElementResult;
