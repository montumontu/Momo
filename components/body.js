import { restList } from "./restList";
import { RestCard } from "./card";
import { useState } from "react";

function filterData(searchInput, restList) {
  const filterData = restList.filter((restaurant) =>
    restlist.rname.includes(searchInput)
  );
  return filterData;
}

const Body = () => {

  // const [restList, setrestList] = useState(restList);
  // const [searchInput, setsearchInput] = useState();
  return (
    <>
      {/* <div className="Search-container">
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
          const data = filterData(searchInput, restList);
          setrestList(data);

        }}
        >Search</button>
      </div> */}

      <div className="resturant-list">
        {restList.map((restaurant) => {
          return < RestCard {...restaurant} key={restaurant.id} />;
        })}
      </div>
    </>
  );
};
export default Body;