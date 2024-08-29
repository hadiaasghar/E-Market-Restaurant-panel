import React, { useState } from "react";

const Form6 = () => {
  const [formData, setFormData] = useState({
    deliveryChargesPerKm: "",
    minimumDeliveryCharges: "",
    minimumDeliveryChargesWithinKm: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (
      !formData.deliveryChargesPerKm ||
      isNaN(formData.deliveryChargesPerKm)
    ) {
      newErrors.deliveryChargesPerKm = "Please enter a valid number.";
    }
    if (
      !formData.minimumDeliveryCharges ||
      isNaN(formData.minimumDeliveryCharges)
    ) {
      newErrors.minimumDeliveryCharges = "Please enter a valid number.";
    }
    if (
      !formData.minimumDeliveryChargesWithinKm ||
      isNaN(formData.minimumDeliveryChargesWithinKm)
    ) {
      newErrors.minimumDeliveryChargesWithinKm = "Please enter a valid number.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form6 submitted!");
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
      <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6">
        <legend className="text-md font-semibold uppercase bg-red1 text-white px-2 py-1 rounded">
          Delivery Charge
        </legend>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Delivery Charges Per km
              </label>
              <input
                type="text"
                value={formData.deliveryChargesPerKm}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    deliveryChargesPerKm: e.target.value,
                  })
                }
                placeholder="3"
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.deliveryChargesPerKm && (
                <p className="text-red-500 text-sm">
                  {errors.deliveryChargesPerKm}
                </p>
              )}
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Minimum Delivery Charges
              </label>
              <input
                type="text"
                value={formData.minimumDeliveryCharges}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    minimumDeliveryCharges: e.target.value,
                  })
                }
                placeholder="10"
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.minimumDeliveryCharges && (
                <p className="text-red-500 text-sm">
                  {errors.minimumDeliveryCharges}
                </p>
              )}
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Minimum Delivery Charges Within Km
              </label>
              <input
                type="text"
                value={formData.minimumDeliveryChargesWithinKm}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    minimumDeliveryChargesWithinKm: e.target.value,
                  })
                }
                placeholder="3"
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.minimumDeliveryChargesWithinKm && (
                <p className="text-red-500 text-sm">
                  {errors.minimumDeliveryChargesWithinKm}
                </p>
              )}
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

export default Form6;
