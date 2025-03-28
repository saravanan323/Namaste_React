import { useState, useEffect } from "react";
import resList from "../utils/MockData";
import RestaurantCard from "./RestaurantCard";

const RestaurentContainer = (props) => {
  const [list, setList] = useState(resList);
  const search = props;

  useEffect(() => {
    if (search.search) {
      const oFilteredList = resList.filter(e => e.info?.name.includes(search.search));
      setList(oFilteredList);
    } else {
      setList(resList); // Reset to original list when search is empty
    }
  }, [search.search, resList]); // Runs when search or resList changes

  return (

    <div className="res-container">
      {list.map((e) => (
        <RestaurantCard key={e.info.id} resData={e} />
      ))}
    </div>
  );
};

export default RestaurentContainer;
