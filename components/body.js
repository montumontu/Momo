import { restList } from "./restList";
import { RestCard } from "./card";
import { useState } from "react";

function filterData(searchInput, restlist) {
  const filterData = restlist.filter((restaurant) =>
    restList.rname.includes(searchInput)
  );
  return filterData;
}

const Body = () => {

   const [restlist, setrestList] = useState(restList);
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
          const data = filterData(searchInput, restlist);
          setrestList(data);

        }}
        >Search</button>
      </div> }

      <div className="resturant-list">
        {restList.map((restaurant) => {
          return < RestCard {...restaurant} key={restaurant.id} />;
        })}
      </div>
    </>
  );
};
export default Body;