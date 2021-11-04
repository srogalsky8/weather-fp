import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "./index";

test("Initially set to San Diego", async () => {
  const cityName = "San Diego";
  render(<Search cityName={cityName} />);
  screen.debug();
  const selectedElement = await screen.findByText(cityName);
  expect(selectedElement).toBeInTheDocument();
});

// test("can select a different city", async () => {
//   const initialCity = 'San Diego';
//   const newCity = 'Santa Clara';
//   const result = render(<Search cityName={initialCity} />);
//   const dropdownToggle = result.container.querySelector('.Dropdown-control');
//   console.log(dropdownToggle)
//   await fireEvent.click(dropdownToggle);
//   await waitFor(async () => {
//     const newElement = await screen.findByText(newCity)
//     expect(newElement).toBeInTheDocument();
//   })
// });
