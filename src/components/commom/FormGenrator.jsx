import React from "react";
import { Link } from "react-router-dom";
import InputField from "./InputFields";
const FormGenrator = ({
  inputFields,//array with objects containing name, type, label
  changeHandler,// Input OnChange Handler
  submitAction,
  submitText,
  bottomCaption,
  bottomLinkText,
  bottomLinkPath
}) => {
  let inputS = inputFields.map((input, i) => {
    return (
      <InputField
        key={i}
        name={input.name}
        type={input.type}
        label={input.label}
        changeHandler={changeHandler}
      />
    );
  });
  return (
    <form >
      {inputS}
      <div className="">
        <button
          className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib text-light"
          onClick={(event) => submitAction(event)}
          value={submitText}
        >
          {submitText}
        </button>
      </div>
      <div className="lh-copy mt3">
        {bottomCaption}{" "}
        <Link to={bottomLinkPath} className="blue hover-white d-inline-block">
          {" "}
          {bottomLinkText}
        </Link>
      </div>
    </form>
  );
};
export default FormGenrator;