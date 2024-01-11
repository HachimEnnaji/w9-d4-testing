import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";
import App from "../App";
import fantasy from "../data/fantasy.json";
// 1)esiste il componente
describe("esiste il welcome?", () => {
  it("renders learn react link", () => {
    render(<Welcome />);
    const welcomeComponent = screen.getByTestId("component-welcome");
    expect(welcomeComponent).toBeInTheDocument();
  });

  it("Does it renders as book as cards?", () => {
    render(<App />);
    const bookCards = screen.getAllByTestId("book-card");
    expect(bookCards).toHaveLength(fantasy.length);
  });
});
