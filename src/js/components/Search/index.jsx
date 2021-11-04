import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import cities from 'js/data/cities';

const cityNames = Object.keys(cities);

const Search = ({ cityName, onChange }) => {
  // TODO: doesn't seem like this dropdown library is tabbable
  return (
    <Dropdown
      options={cityNames}
      onChange={onChange}
      value={cityName}
      placeholder="Select a city"
      tabIndex="0"
    />
  );
};

export default Search;
