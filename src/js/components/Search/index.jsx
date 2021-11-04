import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import cities from 'js/data/cities';

const cityNames = Object.keys(cities);

const Search = ({ cityName, onChange }) => {
  return (
    <Dropdown
      options={cityNames}
      onChange={onChange}
      value={cityName}
      placeholder="Select a city"
    />
  );
};

export default Search;
