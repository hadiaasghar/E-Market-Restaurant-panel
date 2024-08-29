import React, { useState, forwardRef, useImperativeHandle } from "react";

const Form1 = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profilePic: null,
  });

  const [errors, setErrors] = useState({});

  useImperativeHandle(ref, () => ({
    validate() {
      let tempErrors = {};
      if (!formData.firstName) tempErrors.firstName = "First Name is required";
      if (!formData.lastName) tempErrors.lastName = "Last Name is required";
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
        tempErrors.email = "Valid Email is required";
      if (!formData.phone || formData.phone.length < 10)
        tempErrors.phone = "Phone number must be at least 10 digits";
      if (!formData.profilePic)
        tempErrors.profilePic = "Profile Picture is required";
      setErrors(tempErrors);
      return Object.keys(tempErrors).length === 0;
    },
    getFormData() {
      return formData;
    },
  }));

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ref.current.validate()) {
      // Handle form submission
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6">
          <legend className="text-md font-semibold uppercase bg-red1 text-white px-2 py-1 rounded">
            Basic Details
          </legend>
          <div className="grid grid-cols-1 gap-4">
            {/* Input fields */}
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">Phone</label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div className="col-span-1 mt-4">
              <label className="block text-sm font-semibold mb-2">
                Profile Picture
              </label>
              <input
                type="file"
                name="profilePic"
                onChange={handleChange}
                className="block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded"
              />
              {errors.profilePic && (
                <p className="text-red-500 text-sm">{errors.profilePic}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-red1 p-2 rounded-md text-white mt-4"
          >
            Submit
          </button>
        </fieldset>
      </div>
    </form>
  );
});

export default Form1;