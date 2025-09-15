import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Select from "..";

describe("Select component", () => {
  const options = [
    { value: "new", label: "nowe" },
    { value: "in_progress", label: "w trakcie" },
    { value: "done", label: "zakończone" },
  ];

  it("renders with initial value", () => {
    render(
      <Select
        name="status"
        initialValue="new"
        options={options}
        handleChange={() => {}}
      />
    );
    expect(screen.getByDisplayValue("nowe")).toBeInTheDocument();
  });

  it("changes value on user interaction", () => {
    const handleChange = jest.fn();
    render(
      <Select
        name="status"
        initialValue="new"
        options={options}
        handleChange={handleChange}
      />
    );
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "in_progress" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
