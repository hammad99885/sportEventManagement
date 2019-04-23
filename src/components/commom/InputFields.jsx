import React from 'react';

const InputField = ({name, type, label, changeHandler}) => {
    return ( 
        <div className="form-group">
                <label className="db fw6 lh-copy f6" htmlFor={name}>
                  {label}
                </label>
                <input
                  onChange={changeHandler}
                  type={type}
                  className="text-light form-control white pa2  bg-transparent"
                  name={name}
                  id={name}
                />
                <label htmlFor={name} className="animated-label" />
                
              </div>
     );
}
 
export default InputField;