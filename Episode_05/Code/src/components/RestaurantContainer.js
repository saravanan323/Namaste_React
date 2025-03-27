import { useState } from "react";
import resList from "../utils/MockData";
import RestaurantCard from "./RestaurantCard";

const RestaurentContainer = () => {
  const [list, setList] = useState(resList);

  return (
    
    <div className="res-container">
      {list.map((e) => (
        <RestaurantCard key={e.info.id} resData={e} />
      ))}
    </div>
  );
};

export default RestaurentContainer;
