import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Main from "./index";

// jest.mock('js/fetches/weather', () => ({
//   getCurrentAndForecast: jest.fn(async () => Promise.resolve({ daily: [] }))
// }))

test("renders with San Diego and loading icon", async () => {
  render(<Main />);
  const loadingIcon = await screen.findByAltText("loading icon");
  expect(loadingIcon).toBeInTheDocument();
});

// test("initially loads San Diego's weather", async () => {
//   render(<Main />);
//   await waitForElementToBeRemoved(() => screen.findByAltText('loading icon'))
//   screen.debug();
// });
