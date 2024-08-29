import React, { useState } from "react";
import { FaFileAlt } from "react-icons/fa";

const Form5 = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [showDays, setShowDays] = useState(false);
  const [sections, setSections] = useState(
    daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: [] }), {})
  );
  const [errors, setErrors] = useState({});

  const handleAddSection = (day) => {
    setSections({
      ...sections,
      [day]: [...sections[day], { from: "", to: "" }],
    });
  };

  const validateForm5 = () => {
    let tempErrors = {};
    Object.keys(sections).forEach((day) => {
      sections[day].forEach((section, index) => {
        if (!section.from || !section.to) {
          if (!tempErrors[day]) tempErrors[day] = [];
          tempErrors[day][index] = "Both 'From' and 'To' times are required";
        }
      });
    });
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm5()) {
      // Handle form submission
      console.log("Form5 data submitted", sections);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center"
    >
      <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 space-x-3 border-gray-300 p-6">
        <legend className="text-md font-semibold uppercase bg-red1 text-white px-2 py-1 rounded">
          Working Hours
        </legend>
        <h1 className="text-red1 py-5 font-semibold">
          NOTE: Please Click on Edit Button After Making Changes in Working
          Hours, Otherwise Data may not Save!!
        </h1>
        <button
          className="bg-red1 text-white px-4 py-2 font-semibold rounded shadow mb-6"
          onClick={() => setShowDays(true)}
        >
          Add Working Hours
        </button>

        {showDays && (
          <div>
            {daysOfWeek.map((day, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-center mb-4">
                  <h2 className="font-semibold mr-4">{day}</h2>
                  <button
                    className="bg-red1 text-white px-4 py-2 rounded shadow"
                    onClick={() => handleAddSection(day)}
                  >
                    Add
                  </button>
                </div>

                {sections[day].length > 0 && (
                  <div className="grid grid-cols-7 gap-1 items-center pb-2 font-semibold">
                    <label className="text-gray-700 col-span-3">From</label>
                    <label className="text-gray-700 col-span-3">To</label>
                    <span className="text-gray-700">Actions</span>
                  </div>
                )}

                {sections[day].map((section, secIndex) => (
                  <div
                    key={secIndex}
                    className="grid grid-cols-7 gap-2 items-center mb-4"
                  >
                    <div className="flex items-center col-span-3">
                      <input
                        type="time"
                        value={section.from}
                        onChange={(e) => {
                          const newSections = [...sections[day]];
                          newSections[secIndex].from = e.target.value;
                          setSections({ ...sections, [day]: newSections });
                        }}
                        className="border rounded px-4 py-2 w-full"
                      />
                    </div>

                    <div className="flex items-center col-span-3">
                      <input
                        type="time"
                        value={section.to}
                        onChange={(e) => {
                          const newSections = [...sections[day]];
                          newSections[secIndex].to = e.target.value;
                          setSections({ ...sections, [day]: newSections });
                        }}
                        className="border rounded px-4 py-2 w-full"
                      />
                    </div>

                    <div>
                      <button className="text-white bg-red1 rounded p-3">
                        <FaFileAlt />
                      </button>
                    </div>
                    {errors[day] && errors[day][secIndex] && (
                      <p className="text-red-500 text-sm">
                        {errors[day][secIndex]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        <button type="submit" className="bg-red1 text-white px-4 py-2 rounded">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default Form5;
