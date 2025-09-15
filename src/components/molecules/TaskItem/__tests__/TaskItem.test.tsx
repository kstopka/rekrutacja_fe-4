import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TaskItem from "..";
import { AppProvider } from "../../../contexted/App/Provider";
import { StatusType } from "../../../../types/data";

const renderWithProvider = (component: React.ReactElement) => {
  return render(<AppProvider>{component}</AppProvider>);
};

describe("TaskItem component", () => {
  const task = {
    title: "Test Task",
    status: "planowane" as StatusType,
    index: 0,
  };

  it("renders task title and status", () => {
    renderWithProvider(<TaskItem {...task} />);
    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByDisplayValue("planowane")).toBeInTheDocument();
  });

  it("changes task status", () => {
    renderWithProvider(<TaskItem {...task} />);
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "w trakcie" } });
    expect(screen.getByDisplayValue("w trakcie")).toBeInTheDocument();
  });
});
