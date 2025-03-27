import { CDN_URL } from "../utils/Constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    costForTwo,
    name,
    avgRatingString,
    sla,
    cuisines,
    areaName,
  } = resData?.info;

  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} height="150px" width="200px"/>
      <h3>{costForTwo}</h3>
      <h4>{name}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{sla.slaString}</h4>
      <div>{cuisines.join(", ")}</div>
      <div>{areaName}</div>
    </div>
  );
};

export default RestaurantCard;
