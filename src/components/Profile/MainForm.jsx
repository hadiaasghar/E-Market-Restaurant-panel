
import React, { useState, useRef } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./From4";
import Form5 from "./Form5";
import Form6 from "./Form6";
import Form7 from "./Form7";
import FormPassword from "./FormPassword";
import BottomButton from "../RstCards/BottomButton";

const MainForm = () => {
  const form1Ref = useRef();
  const form2Ref = useRef();
  const form3Ref = useRef();
  const form4Ref = useRef();
  const form5Ref = useRef();
  const form6Ref = useRef();
  const form7Ref = useRef();

  const validateAndSave = () => {
    const isForm1Valid = form1Ref.current.validate();
    const isForm2Valid = form2Ref.current.validate();
    const isForm3Valid = form3Ref.current.validate();
    const isForm4Valid = form4Ref.current.validate();
    const isForm5Valid = form5Ref.current.validate();
    const isForm6Valid = form6Ref.current.validate();
    const isForm7Valid = form7Ref.current.validate();

    if (
      isForm1Valid &&
      isForm2Valid &&
      isForm3Valid &&
      isForm4Valid &&
      isForm5Valid &&
      isForm6Valid &&
      isForm7Valid
    ) {
      // Gather all form data
      const allFormData = {
        form1: form1Ref.current.getFormData(),
        form2: form2Ref.current.getFormData(),
        form3: form3Ref.current.getFormData(),
        form4: form4Ref.current.getFormData(),
        form5: form5Ref.current.getFormData(),
        form6: form6Ref.current.getFormData(),
        form7: form7Ref.current.getFormData(),
      };
      console.log("All Form Data: ", allFormData);
    }
  };

  return (
    <>
      <Form1 ref={form1Ref} />
      <FormPassword />
      <Form2 ref={form2Ref} />
      <Form3 ref={form3Ref} />
      <Form4 ref={form4Ref} />
      <Form5 ref={form5Ref} />
      <Form6 ref={form6Ref} />
      <Form7 ref={form7Ref} />
      <BottomButton validateAndSave={validateAndSave} />
    </>
  );
};

export default MainForm;
