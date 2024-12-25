import svg from '../img/shopping-cart-white-icon.webp';
import search from '../img/search-magnifying-glass-white-icon.webp';
import { useState } from 'react';


function Searchform() {

  const data =
  [
    {  
        name: 'Best Selling Plant Collection' 
    } ,
    { 
       name: 'Reviews' 
      },
    { 
       name: 'Footer' 
      },
    { 
       name: 'Plant' 
      },
  ];


  // State to store the search term and filtered results
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // Function to handle search and update filtered data
  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    // Filter data based on search term

    const filteredResults = data.filter(item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredResults);
  };



  return (
    <>
      <div class="searchCart">
        <form action="">
          <input type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search for a product..." />
          <button class="search">
            <img src={search} alt='' ></img>
          </button>
        </form>
        <ul>
          {filteredData.length > 0 ? (
            filteredData.map((data) => (
              <li>{data.name}</li>
            ))
          )
           : 
           (
            <li>No results found</li>
          )}
        </ul>
        <a href="" class="cartButton">
          <img src={svg} alt='' ></img>
        </a>
      </div>
    </>

  )
}
export default Searchform;