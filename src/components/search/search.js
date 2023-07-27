import { useState } from 'react';
import {AsyncPaginate} from 'react-select-async-paginate';
import {GEO_API_URL, geoApiOptions} from "../../api";

const EMPTY_ARRAY = [];

const Search = ({onSearchChange}) => {

  const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`, geoApiOptions)
            .then(response => response.json())
            .then(response => ({
                options: (response?.data || EMPTY_ARRAY).map(city => ({
                    value: `${city?.latitude} ${city?.longitude}`,
                    label: `${city?.name} ${city?.countryCode}`,
                }))
            }))
            .catch(err => {
                console.error(1, err);
                return { options: [] };
            });
    };

  const handleOnChange = (searchData) => {
      setSearch(searchData);
      onSearchChange(searchData);
  };

  return (
     <div>
         {/*<AsyncPaginate*/}
         <AsyncPaginate
             placeholder='Search for city'
             debounceTimeout={500}
             value={search}
             onChange={handleOnChange}
             loadOptions={loadOptions}
         />
     </div>
  )
};

export default Search;