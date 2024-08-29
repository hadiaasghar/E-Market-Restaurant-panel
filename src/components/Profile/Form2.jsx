// import React from "react";

// const From2 = () => {
//   return (
//     <>
//       <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6">
//           <legend className="text-md font-semibold uppercase bg-red1 text-white px-2 py-1 rounded">
//             Restaurant Details
//           </legend>
//           <div className="grid grid-cols-1  gap-4">
//             <div className="col-span-1">
//               <label className="block text-sm font-semibold mb-2">Name</label>
//               <input
//                 type="text"
//                 className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//               />
//               <p className="text-gray-400 text-sm">Insert Name</p>
//             </div>
//             <div className="col-span-1">
//               <label className="block text-sm font-semibold mb-2">
//                 Wallet Amount
//               </label>
//               {/* <input
//                 type="text"
//                 className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//               />
//               <p className="text-gray-400 text-sm">Insert Name</p> */}
//             </div>
//             <div className="col-span-1">
//               <label className="block text-sm font-semibold mb-2">
//                 Cuisines
//               </label>
//               <select
//                 // type="text"
//                 className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//               >
//                 {" "}
//                 <option value="cuisines"> Cuisines</option>
//               </select>
//               <p className="text-gray-400 text-sm">
//                 Select the cuisine for this restaurant
//               </p>
//             </div>
//             <div className="col-span-1">
//               <label className="block text-sm font-semibold mb-2">Phone</label>
//               <input
//                 type="number"
//                 className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//               />
//               <p className="text-gray-400 text-sm">Insert Phone</p>
//             </div>
//             <div className="col-span-1">
//               <label className="block text-sm font-semibold mb-2">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//               />
//               <p className="text-gray-400 text-sm">Insert Address</p>
//             </div>
//             <div className="col-span-1">
//               <label className="block text-sm font-semibold mb-2">Zone</label>
//               <select
//                 // type="text"
//                 className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//               >
//                 {" "}
//                 <option value="cuisines">Select Zone</option>
//               </select>
//               {/* <p className="text-gray-400 text-sm">
//                 Select the cuisine for this restaurant
//               </p> */}
//             </div>
//             <div className="col-span-1 mt-4">
//               <label className="block text-sm font-semibold mb-2">
//                 Latitude
//               </label>
//               <input
//                 type="text"
//                 className="block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded"
//               />
//               <p className="text-gray-400 text-sm">Insert Latitude</p>
//             </div>
//             <div className="col-span-1 mt-4">
//               <label className="block text-sm font-semibold mb-2">
//                 Longitude
//               </label>
//               <input
//                 type="text"
//                 className="block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded"
//               />
//               <p className="text-gray-400 text-sm">Insert Longitude</p>
//               <p className="text-gray-400 text-sm pt-2">
//                 Don't Know your cordinates ?{" "}
//                 <a href="https://www.latlong.net/" className="text-red-500">
//                   use Latitude and Longitude Finder
//                 </a>
//               </p>
//             </div>
//             <div className="col-span-1 mt-4">
//               <label className="block text-sm font-semibold mb-2">
//                 Description
//               </label>
//               <textarea
//                 // placeholder="Enter description here..."
//                 className="w-full h-40 pt-3 px-3 mt-3 border border-gray-300 rounded-md bg-[#F5F5F5]
//     focus:outline-none focus:border-[#267FFF] text-start"
//                 rows="4"
//               ></textarea>
//             </div>
//             <div className="col-span-1 mt-4">
//               <label className="block text-sm font-semibold mb-2">Image</label>
//               <input
//                 type="file"
//                 className="block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded"
//               />
//               <p className="text-gray-400 text-sm">Insert Image</p>
//             </div>
//           </div>
//         </fieldset>
//       </div>
//     </>
//   );
// };

// export default From2;

import React, { useState } from "react";

const Form2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    cuisines: "",
    phone: "",
    address: "",
    zone: "",
    latitude: "",
    longitude: "",
    description: "",
    image: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.cuisines) tempErrors.cuisines = "Cuisines are required";
    if (!formData.phone || formData.phone.length < 10)
      tempErrors.phone = "Phone number must be at least 10 digits";
    if (!formData.address) tempErrors.address = "Address is required";
    if (!formData.zone) tempErrors.zone = "Zone is required";
    if (!formData.latitude) tempErrors.latitude = "Latitude is required";
    if (!formData.longitude) tempErrors.longitude = "Longitude is required";
    if (!formData.description)
      tempErrors.description = "Description is required";
    if (!formData.image) tempErrors.image = "Image is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Restaurant details saved successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6">
          <legend className="text-md font-semibold uppercase bg-red1 text-white px-2 py-1 rounded">
            Restaurant Details
          </legend>
          <div className="grid grid-cols-1 gap-4">
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Cuisines
              </label>
              <input
                type="text"
                name="cuisines"
                value={formData.cuisines}
                onChange={handleChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.cuisines && (
                <p className="text-red-500 text-sm">{errors.cuisines}</p>
              )}
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">Zone</label>
              <input
                type="text"
                name="zone"
                value={formData.zone}
                onChange={handleChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.zone && (
                <p className="text-red-500 text-sm">{errors.zone}</p>
              )}
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Latitude
              </label>
              <input
                type="text"
                name="latitude"
                value={formData.latitude}
                onChange={handleChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.latitude && (
                <p className="text-red-500 text-sm">{errors.latitude}</p>
              )}
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Longitude
              </label>
              <input
                type="text"
                name="longitude"
                value={formData.longitude}
                onChange={handleChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.longitude && (
                <p className="text-red-500 text-sm">{errors.longitude}</p>
              )}
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">{errors.description}</p>
              )}
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">Image</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-red1 p-2 rounded-md text-white mt-4"
          >
            Save Details
          </button>
        </fieldset>
      </div>
    </form>
  );
};

export default Form2;
