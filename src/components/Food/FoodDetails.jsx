import React, { useState } from "react";
import BottomButton from "../RstCards/BottomButton";
import TitleHead from "../Header/TitleHead";

const FoodDetails = () => {
  const [showFields, setShowFields] = useState(false);
  // const [showField, setShowField] = useState(false);

  // State for form fields
  const [formValues, setFormValues] = useState({
    name: "",
    price: "",
    discountPrice: "",
    restaurant: "",
    category: "",
    quantity: "",
    attribute: "",
    image: null,
    description: "",
    publish: false,
    nonVeg: false,
    takeaway: false,
    calories: "",
    grams: "",
    fat: "",
    proteins: "",
    addonTitle: "",
    addonPrice: "",
    specificationLabel: "",
    specificationValue: "",
  });

  const [formErrors, setFormErrors] = useState({});

  // Function to toggle visibility of Add Icons fields
  // const handleAddIconsClick = () => {
  //   setShowFields((prevState) => !prevState);
  // };

  // Function to toggle visibility of Food Specifications fields
  // const handleAddSpecificationsClick = () => {
  //   setShowField((prevState) => !prevState);
  // };

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Function to handle image input change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormValues({ ...formValues, image: file });
  };

  // Function to validate form fields
  const validateForm = () => {
    let errors = {};

    if (!formValues.name) errors.name = "Name is required.";
    if (!formValues.price) errors.price = "Price is required.";
    if (!formValues.restaurant) errors.restaurant = "Restaurant is required.";
    if (!formValues.category) errors.category = "Category is required.";
    if (!formValues.quantity) errors.quantity = "Quantity is required.";
    if (!formValues.attribute) errors.attribute = "Attribute is required.";
    if (!formValues.image) errors.image = "Image is required.";
    if (!formValues.description)
      errors.description = "Description is required.";
    if (!formValues.calories) errors.calories = "Calories is required.";
    if (!formValues.grams) errors.grams = "Grams is required.";
    if (!formValues.fat) errors.fat = "Fat is required.";
    if (!formValues.proteins) errors.proteins = "Proteins is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted with the following data:");
      console.log(formValues);
    } else {
      console.log("Form validation failed.");
    }
  };

  // const [showFields, setShowFields] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  // const [errors, setErrors] = useState({ title: '', price: '' });

  const handleAddIconsClick = () => {
    setShowFields(true);
  };
  //---------------Handle SaveIconClick
  const handleSaveIconsClick = () => {
    let hasError = false;
    const newErrors = { title: "", price: "" };

    if (title.trim() === "") {
      newErrors.title = "Title is required";
      hasError = true;
    }

    if (price.trim() === "") {
      newErrors.price = "Price is required";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      console.log("Title:", title);
      console.log("Price:", price);
      // Proceed with saving the data
    }
  };

  const [showField, setShowField] = useState(false);
  const [label, setLabel] = useState("");
  const [value, setValue] = useState("");
  const [errors, setErrors] = useState({ label: "", value: "" });

  //-------------------HandleAddSpecification
  const handleAddSpecificationsClick = () => {
    setShowField(true);
  };

  const handleSaveSpecificationsClick = () => {
    let hasError = false;
    const newErrors = { label: "", value: "" };

    if (label.trim() === "") {
      newErrors.label = "Label is required";
      hasError = true;
    }

    if (value.trim() === "") {
      newErrors.value = "Value is required";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      console.log("Label:", label);
      console.log("Value:", value);
      // Proceed with saving the data
    }
  };
  return (
    <>
      <TitleHead title="Food Details" desc="Food create" link="/food" desc2="Food" />
      <div className="flex flex-col items-center">
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6">
          <legend className="text-md font-semibold uppercase bg-red1 text-white px-2 py-1 rounded">
            Food Details
          </legend>
          <div className="grid grid-cols-1 gap-4">
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm">{formErrors.name}</p>
              )}
              <p className="text-gray-400 text-sm">Insert Name</p>
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">Price</label>
              <input
                type="number"
                name="price"
                value={formValues.price}
                onChange={handleInputChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {formErrors.price && (
                <p className="text-red-500 text-sm">{formErrors.price}</p>
              )}
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Discount Price
              </label>
              <input
                type="number"
                name="discountPrice"
                value={formValues.discountPrice}
                onChange={handleInputChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              <p className="text-gray-400 text-sm">Insert Discount Price</p>
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Select Category
              </label>
              <select
                name="category"
                value={formValues.category}
                onChange={handleInputChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              >
                <option value="">Select Category</option>
                <option value="category">Select Category</option>
                {/* Add category options here */}
              </select>
              {formErrors.category && (
                <p className="text-red-500 text-sm">{formErrors.category}</p>
              )}
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Item Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formValues.quantity}
                onChange={handleInputChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {formErrors.quantity && (
                <p className="text-red-500 text-sm">{formErrors.quantity}</p>
              )}
              <p className="mt-1 text-sm text-gray-500">For unlimited set -1</p>
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Item Attribute
              </label>
              <select
                name="attribute"
                value={formValues.attribute}
                onChange={handleInputChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              >
                <option value="">Select Attribute</option>
                <option value="attribute">Select Attribute</option>
                {/* Add attribute options here */}
              </select>
              {formErrors.attribute && (
                <p className="text-red-500 text-sm">{formErrors.attribute}</p>
              )}
            </div>

            <div className="mt-4 col-span-1">
              <label className="block text-sm font-semibold mb-2">Image</label>
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                className="block w-full text-sm"
              />
              {formErrors.image && (
                <p className="text-red-500 text-sm">{formErrors.image}</p>
              )}
              <p className="text-gray-400 text-sm pt-5">Insert Image in SVG</p>
            </div>

            <div className="col-span-1 mt-4">
              <label className="block text-sm font-semibold mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formValues.description}
                onChange={handleInputChange}
                className="block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded"
              />
              {formErrors.description && (
                <p className="text-red-500 text-sm">{formErrors.description}</p>
              )}
              <p className="text-gray-400 text-sm">Insert Description</p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 mt-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="publish"
                name="publish"
                checked={formValues.publish}
                onChange={handleInputChange}
                className="rounded"
              />
              <label htmlFor="publish" className="block text-sm font-semibold">
                Publish
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="nonVeg"
                name="nonVeg"
                checked={formValues.nonVeg}
                onChange={handleInputChange}
                className="rounded"
              />
              <label htmlFor="nonVeg" className="block text-sm font-semibold">
                Non-Veg
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="takeaway"
                name="takeaway"
                checked={formValues.takeaway}
                onChange={handleInputChange}
                className="rounded"
              />
              <label htmlFor="takeaway" className="block text-sm font-semibold">
                Takeaway
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6 mt-6">
          <legend className="text-md font-semibold uppercase bg-red1 text-white px-2 py-1 rounded">
            Ingredient
          </legend>
          <div className="grid grid-cols-1  gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Calories</label>
              <input
                type="number"
                name="calories"
                defaultValue={""}
                value={formValues.calories}
                onChange={handleInputChange}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {formErrors.calories && (
                <p className="text-red-500 text-sm">{formErrors.calories}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Grams</label>
              <input
                type="number"
                name="grams"
                value={formValues.grams}
                onChange={handleInputChange}
                defaultValue={""}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {formErrors.grams && (
                <p className="text-red-500 text-sm">{formErrors.grams}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Fat</label>
              <input
                type="number"
                name="fat"
                value={formValues.fat}
                onChange={handleInputChange}
                defaultValue={""}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {formErrors.fat && (
                <p className="text-red-500 text-sm"> {formErrors.fat}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Proteins</label>
              <input
                type="number"
                name="proteins"
                value={formValues.proteins}
                onChange={handleInputChange}
                defaultValue={""}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {formErrors.proteins && (
                <p className="text-red-500">{formErrors.proteins}</p>
              )}
            </div>
          </div>
        </fieldset>

        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6 mt-6">
          <legend className="text-md font-semibold uppercase bg-red1 text-white px-2 py-1 rounded">
            Add Addons
          </legend>
          <button
            className="px-3 bg-red1 text-white py-2 rounded-md mb-3"
            onClick={handleAddIconsClick}
          >
            Add Icons
          </button>
          {showFields && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  {errors.title && (
                    <span className="text-red-500 text-sm">{errors.title}</span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Price
                  </label>
                  <input
                    className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                    type="number"
                    defaultValue={""}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />

                  {errors.price && (
                    <span className="text-red-500 text-sm">{errors.price}</span>
                  )}
                </div>
              </div>
              <button
                className="px-3 bg-red1 text-white py-2 rounded-md mt-3"
                onClick={handleSaveIconsClick}
              >
                Save Icons
              </button>
            </>
          )}
        </fieldset>

        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6 mt-6">
          <legend className="text-md font-semibold uppercase bg-red1 text-white px-2 py-1 rounded">
            Add Food Specifications
          </legend>
          <button
            className="px-3 bg-red1 text-white py-2 rounded-md mb-3"
            onClick={handleAddSpecificationsClick}
          >
            Add Food Specifications
          </button>
          {showField && (
            <>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Label
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                  />
                  {errors.label && (
                    <span className="text-red-500 text-sm">{errors.label}</span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Value
                  </label>
                  <select
                    className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  >
                    <option value="">Select Value</option>
                    <option value="any">Any</option>
                    {/* Add more value options here */}
                  </select>
                  {errors.value && (
                    <span className="text-red-500 text-sm">{errors.value}</span>
                  )}
                </div>
              </div>
              <button
                className="px-3 bg-red1 text-white py-2 rounded-md mt-3"
                onClick={handleSaveSpecificationsClick}
              >
                Save Food Specifications
              </button>
            </>
          )}
        </fieldset>

        <BottomButton handleSubmit={handleSubmit} />
      </div>
    </>

  );
};

export default FoodDetails;
