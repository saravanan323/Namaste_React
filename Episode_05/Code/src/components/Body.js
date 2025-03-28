import { useState } from "react";
import RestaurentContainer from "./RestaurantContainer";

const Body = () => {
  const [search, setSearch] = useState();

  return (
    <div className="body">
      <div className="search-container">
        <input className="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search......." />
      </div>
      <RestaurentContainer search={search} />
    </div>
  )
};

export default Body;
