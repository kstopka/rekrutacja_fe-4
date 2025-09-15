import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "..";
import { AppProvider } from "../../../contexted/App/Provider";

const renderWithProvider = (component: React.ReactElement) => {
  return render(<AppProvider>{component}</AppProvider>);
};

describe("App component", () => {
  it("renders correctly", () => {
    renderWithProvider(<App />);
    expect(screen.getByText("Lista zadań")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Dodaj swoje zadanie...")
    ).toBeInTheDocument();
    expect(screen.getByText("Dodaj zadanie")).toBeInTheDocument();
  });
  it("allows users to add a new task", () => {
    renderWithProvider(<App />);
    const input = screen.getByPlaceholderText("Dodaj swoje zadanie...");
    const addButton = screen.getByText("Dodaj zadanie");
    fireEvent.change(input, { target: { value: "Nowe zadanie" } });
    fireEvent.click(addButton);
    expect(screen.getByText("Nowe zadanie")).toBeInTheDocument();
  });
});
