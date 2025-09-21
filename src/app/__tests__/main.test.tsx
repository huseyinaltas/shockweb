import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../downloadPage";
// import Policy from "../policy/page";

describe("Page Component", () => {
  test("should render 'Dictionary And Translation' text", () => {
    render(<Home />);
    expect(screen.getByText("Dictionary And Translation")).toBeDefined();
  });

  test("should render a heading with correct text", () => {
    render(<Home />);
    const headings = screen.getAllByRole("heading", {
      name: "Dictionary And Translation",
    });
    expect(headings.length).toBeGreaterThan(0); // Ensure that we found at least one matching heading
    expect(headings[0].style.color).toBe("white"); // You can also make more specific assertions if needed
  });

  test("Clicking Components", async () => {
    render(<Home />);
    const privacy = screen.getAllByText("Privacy Policy");
    await userEvent.click(privacy[0]);
    expect(privacy[0]).toBeDefined();
    // render(<Policy />);
    // const dataSecurity = screen.getAllByText("Data Security");
    // expect(dataSecurity[0]).toBeDefined();
  });
});
