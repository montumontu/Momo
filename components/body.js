import { restList } from "./restList";
import { RestCard } from "./card";
import { useState } from "react";

function filterData(searchInput, restaurantlist) {
  const filterData = restaurantlist.filter((restaurant) =>
    rname.includes(searchInput)
  );
  return filterData;
}

const Body = () => {

   const [restaurantlist, setrestList] = useState(restList);
   const [searchInput, setsearchInput] = useState();
  return (
    <>
      { <div className="Search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setsearchInput(e.target.value)
          }
          }
        />

        <button className="search-btn" onClick={() => {
          const data = filterData(searchInput, restaurantlist);
          setrestList(data);

        }}
        >Search</button>
      </div> }

      <div className="resturant-list">
        {restaurantlist.map((restaurant) => {
          return < RestCard {...restaurant} key={restaurant.id} />;
        })}
      </div>
    </>
  );
};
export default Body;