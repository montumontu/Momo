import {restList} from "./restList";
import { RestCard } from "./card";

const Body= () => {
   console.log(restList);
    return(
      <>
      <div className="Search-container">
        <input type="text" className="search-input" placeholder="Search" value="" />
        <button className="search-btn">Search</button>
      </div>
      <div className="resturant-list">
        {restList.map((restaurant) => {
          return < RestCard {...restaurant} />;
        })}
      </div>
      </>
    );
};
export default Body;