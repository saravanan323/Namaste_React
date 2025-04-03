import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const RestaurentContainer = (props) => {
  const [list, setList] = useState([]);
  const search = props;

  // useEffect(() => {
  //   if (search.search) {
  //     const oFilteredList = resList.filter(e => e.info?.name.includes(search.search));
  //     setList(oFilteredList);
  //   } else {
  //     setList(resList); // Reset to original list when search is empty
  //   }
  // }, [search.search, resList]); // Runs when search or resList changes

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const sUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966024&lng=77.6687231"
    const data = await fetch(sUrl);
    const json = await data.json();
    const filteredList = json.data.cards.map(e => e.card.card?.gridElements?.infoWithStyle?.restaurants).filter(e => e)[0];
    console.log(json.data.cards.map(e => e.card.card?.gridElements?.infoWithStyle?.restaurants).filter(e => e)[0]);
    setList(filteredList);
  }

  // Handle case when list is not yet populated
  return list.length === 0 ? (<Shimmer />) : ( //Condtional rendering
    <div className="res-container">
      {list.map((e) => (
        <RestaurantCard key={e.info.id} resData={e} />
      ))}
    </div>
  );
};

export default RestaurentContainer;
