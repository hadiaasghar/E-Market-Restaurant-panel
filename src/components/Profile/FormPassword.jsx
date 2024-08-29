import React, { useState } from "react";

const FormPassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.oldPassword)
      tempErrors.oldPassword = "Old Password is required";
    if (!formData.newPassword)
      tempErrors.newPassword = "New Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Password changed successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6">
          <legend className="text-md font-semibold uppercase bg-red1 text-white px-2 py-1 rounded">
            Password
          </legend>
          <div className="grid grid-cols-1 gap-4">
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Old Password
              </label>
              <input
                type="password"
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.oldPassword && (
                <p className="text-red-500 text-sm">{errors.oldPassword}</p>
              )}
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.newPassword && (
                <p className="text-red-500 text-sm">{errors.newPassword}</p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              className="bg-red1 p-2 rounded-md flex gap-3 items-center text-white"
              type="submit"
            >
              Change Password
            </button>
          </div>
        </fieldset>
      </div>
    </form>
  );
};

export default FormPassword;
