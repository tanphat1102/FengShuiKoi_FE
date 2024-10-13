import React, { useState } from "react";
import "./DynamicInputField.scss";

const DynamicInputFields = (props) => {
  const [inputFields, setInputFields] = useState([{ value: "" }]);

  // Function to add a new input field
  const handleAddFields = () => {
    setInputFields([...inputFields, { value: "" }]);
  };

  // Function to remove an input field by index
  const handleRemoveFields = (index) => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };

  // Function to update the value of an input field
  const handleValueChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  return (
    <div className={"dynamic-input-container"}>
      {inputFields.map((inputField, index) => (
        <div className={"input-container"} key={index}>
          <label htmlFor="koi">
            {props.title} {index}:
          </label>
          <input
            type="text"
            id="koi"
            placeholder="Nhập màu cá"
            value={inputField.value}
            onChange={(e) => handleValueChange(index, e)}
          />

          <button
            className={"delete-btn"}
            onClick={() => handleRemoveFields(index)}
          >
            <span className="material-symbols-outlined delete-icon">
              delete
            </span>
          </button>
        </div>
      ))}

      <button className={"add-btn"} onClick={handleAddFields}>
        <span className="material-symbols-outlined add-icon">add</span>Thêm{" "}
        {props.title}
      </button>
    </div>
  );
};

export default DynamicInputFields;
