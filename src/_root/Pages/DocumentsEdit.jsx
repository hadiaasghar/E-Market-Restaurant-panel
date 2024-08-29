import React, { useState } from "react";
import BottomButton from "../../components/RstCards/BottomButton";

const DocumentsEdit = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formError, setFormError] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setFormError(""); // Clear any previous error
    }
  };

  const handleSubmit = () => {
    if (!selectedImage) {
      setFormError("Please select an image.");
      return;
    }

    // If validation passes, log the data to the console
    console.log("Form submitted with the following data:");
    console.log("Selected Image:", selectedImage);
  };

  return (
    <div className="mx-5 flex flex-col justify-center items-center my-5">
      <fieldset className="border rounded-md w-full lg:w-[70%] md:w-[80%] border-gray-300 px-6 py-5">
        <legend className="text-md font-semibold bg-red1 text-white px-2 py-1 rounded">
          FSSAI certificate
        </legend>
        <label htmlFor="fileInput">Front Image</label>
        <br />
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          className="mb-2 bg-[#F5F5F5] w-full px-2 py-1 rounded-md border"
          onChange={handleImageChange}
        />
        {formError && <p className="text-red-500 text-sm">{formError}</p>}
        {selectedImage && (
          <div className="mt-1">
            <img
              src={selectedImage}
              alt="Selected Preview"
              className="w-16 h-20 rounded-md border"
            />
          </div>
        )}
      </fieldset>
      <BottomButton handleSubmit={handleSubmit} />
    </div>
  );
};

export default DocumentsEdit;
