import React, { useState } from "react";

const Form3 = () => {
  const [formData, setFormData] = useState({ file: null });
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const validateForm3 = () => {
    let tempErrors = {};
    if (!formData.file) tempErrors.file = "File is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm3()) {
      // Handle form submission
      console.log("Form3 data submitted", formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center"
    >
      <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6">
        <legend className="text-md font-semibold uppercase bg-red1 text-white px-2 py-1 rounded">
          Gallery
        </legend>
        <div className="py-2">
          <input type="file" onChange={handleFileChange} className="w-full" />
          {errors.file && <p className="text-red-500 text-sm">{errors.file}</p>}
        </div>
        <button type="submit" className="bg-red1 text-white px-4 py-2 rounded">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default Form3;
