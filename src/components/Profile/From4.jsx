import React, { useState } from "react";

const Form4 = () => {
  const [formData, setFormData] = useState({
    wifi: false,
    breakfast: false,
    dinner: false,
    lunch: false,
    music: false,
    setting: false,
    reservation: false,
    friendly: false,
  });
  const [errors, setErrors] = useState({});

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.checked });
  };

  const validateForm4 = () => {
    let tempErrors = {};
    // Add validation logic if needed
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm4()) {
      // Handle form submission
      console.log("Form4 data submitted", formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center"
    >
      <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6">
        <legend className="text-md font-semibold uppercase bg-red1 text-white px-2 py-1 rounded">
          Services
        </legend>
        <div className="flex flex-col font-semibold items-start gap-2 mt-4">
          {Object.keys(formData).map((key) => (
            <div className="flex items-center gap-2" key={key}>
              <input
                type="checkbox"
                id={key}
                checked={formData[key]}
                onChange={handleCheckboxChange}
                className="h-4 w-4"
              />
              <label htmlFor={key}>
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </label>
            </div>
          ))}
        </div>
        <button type="submit" className="bg-red1 text-white px-4 py-2 rounded">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default Form4;
