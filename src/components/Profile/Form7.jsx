import React, { useState } from "react";

const Form7 = () => {
  const [formData, setFormData] = useState({
    bankName: "",
    branchName: "",
    holderName: "",
    accountNumber: "",
    otherInformation: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.bankName) {
      newErrors.bankName = "Bank Name is required.";
    }
    if (!formData.branchName) {
      newErrors.branchName = "Branch Name is required.";
    }
    if (!formData.holderName) {
      newErrors.holderName = "Holder Name is required.";
    }
    if (!formData.accountNumber || isNaN(formData.accountNumber)) {
      newErrors.accountNumber = "Please enter a valid account number.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form7 submitted!");
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
      <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6">
        <legend className="text-md font-semibold uppercase bg-red1 text-white px-2 py-1 rounded">
          Bank Details
        </legend>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Bank Name
              </label>
              <input
                type="text"
                value={formData.bankName}
                onChange={(e) =>
                  setFormData({ ...formData, bankName: e.target.value })
                }
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.bankName && (
                <p className="text-red-500 text-sm">{errors.bankName}</p>
              )}
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Branch Name
              </label>
              <input
                type="text"
                value={formData.branchName}
                onChange={(e) =>
                  setFormData({ ...formData, branchName: e.target.value })
                }
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.branchName && (
                <p className="text-red-500 text-sm">{errors.branchName}</p>
              )}
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Holder Name
              </label>
              <input
                type="text"
                value={formData.holderName}
                onChange={(e) =>
                  setFormData({ ...formData, holderName: e.target.value })
                }
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.holderName && (
                <p className="text-red-500 text-sm">{errors.holderName}</p>
              )}
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Account Number
              </label>
              <input
                type="number"
                value={formData.accountNumber}
                onChange={(e) =>
                  setFormData({ ...formData, accountNumber: e.target.value })
                }
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.accountNumber && (
                <p className="text-red-500 text-sm">{errors.accountNumber}</p>
              )}
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Other Information
              </label>
              <input
                type="text"
                value={formData.otherInformation}
                onChange={(e) =>
                  setFormData({ ...formData, otherInformation: e.target.value })
                }
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-red1 text-white px-4 py-2 rounded mt-4"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Form7;
