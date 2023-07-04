import {restList} from "./card";
import { RestCard } from "./card";

const Body= () => {
    return(
      <>
      <div className="Search-container">
        <input type="text" className="search-input" placeholder="Search" value="" />
        <button className="search-btn">Search</button>
      </div>
      <div className="resturant-list">
        {restList.map((restaurant) => {
          return < RestCard {...restaurant.data} />;
        })}
      </div>
      </>
    );
};
export default Body;