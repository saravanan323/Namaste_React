import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const RestaurentContainer = (props) => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (props.search) {
      const oFilteredList = list.filter(e => e.info?.name.toLowerCase().includes(props.search.toLowerCase()));
      setFilteredList(oFilteredList);
    } else {
      setFilteredList(list); // Reset to original list when search is empty
    }
  }, [props.search, filteredList]); // Runs when search or resList changes

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const sUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966024&lng=77.6687231";//"http://localhost:8080/swiggy"; //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966024&lng=77.6687231"
    const data = await fetch(sUrl);
    const json = await data.json();
    const oFilteredList = json.data.cards.map(e => e.card.card?.gridElements?.infoWithStyle?.restaurants).filter(e => e)[0];
    console.log(json.data.cards.map(e => e.card.card?.gridElements?.infoWithStyle?.restaurants).filter(e => e)[0]);
    setList(oFilteredList);
    setFilteredList(oFilteredList);
  }

  // Handle case when list is not yet populated
  return list.length === 0 ? (<Shimmer />) : ( //Condtional rendering
    <div className="res-container">
      {filteredList.map((e) => (
        <RestaurantCard key={e.info.id} resData={e} />
      ))}
    </div>
  );
};

export default RestaurentContainer;
