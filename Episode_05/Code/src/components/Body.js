import RestaurentContainer from "./RestaurantContainer";

const Body = () => (
  <div className="body">
    <div className="search-container">
      <input className="search" placeholder="Search......." />
    </div>
    <RestaurentContainer />
  </div>
);

export default Body;
