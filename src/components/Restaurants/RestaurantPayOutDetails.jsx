import React, { useState } from "react";
import BottomButton from "../RstCards/BottomButton";

const RestaurantPayOutDetails = () => {
  const [formData, setFormData] = useState({
    amount: "",
    note: "",
    method: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.amount) {
      newErrors.amount = "Amount is required.";
    } else if (formData.amount <= 0) {
      newErrors.amount = "Amount must be greater than zero.";
    }

    if (!formData.note) {
      newErrors.note = "Note is required.";
    }

    if (!formData.method) {
      newErrors.method = "Please select a withdrawal method.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Proceed with form submission or API call
      console.log("Form is valid, submitting data:", formData);
    } else {
      console.log("Form has errors.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center"
    >
      <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
        <legend className="text-md font-semibold uppercase bg-red1 text-white px-2 py-1 rounded">
          Create Restaurants Payout
        </legend>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className={`block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded ${
                errors.amount ? "border-red-500" : ""
              }`}
            />
            {errors.amount && (
              <p className="text-red-500 text-xs mt-1">{errors.amount}</p>
            )}
            <h1 className="text-sm text-gray-400">Insert Amount</h1>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Note</label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleInputChange}
              className={`block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded ${
                errors.note ? "border-red-500" : ""
              }`}
            ></textarea>
            {errors.note && (
              <p className="text-red-500 text-xs mt-1">{errors.note}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="method"
              className="block text-sm font-semibold mb-2"
            >
              Withdrawal Methods
            </label>
            <select
              name="method"
              id="method"
              value={formData.method}
              onChange={handleInputChange}
              className={`block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded ${
                errors.method ? "border-red-500" : ""
              }`}
            >
              <option value="">Select Withdrawal Method</option>
              <option value="bank">Bank Transfer</option>
              <option value="paypal">PayPal</option>
              <option value="crypto">Cryptocurrency</option>
            </select>
            {errors.method && (
              <p className="text-red-500 text-xs mt-1">{errors.method}</p>
            )}
          </div>
        </div>
      </fieldset>
      <BottomButton />
    </form>
  );
};

export default RestaurantPayOutDetails;
