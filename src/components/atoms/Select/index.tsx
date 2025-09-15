import React, { JSX } from "react";
import { ISelectProps } from "./types";

const Select = ({
  name,
  initialValue,
  options,
  handleChange,
}: ISelectProps): JSX.Element => {
  return (
    <select name={name} value={initialValue} onChange={handleChange}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default React.memo(Select);
