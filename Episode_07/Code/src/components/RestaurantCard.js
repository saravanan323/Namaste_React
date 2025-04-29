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
      <img src={CDN_URL + cloudinaryImageId} />
      <div className="res-card-details">
        <h3>{costForTwo}</h3>
        <h4>{name}<br/>{avgRatingString}<br/>{sla.slaString}</h4>
        <p>{cuisines.join(", ")}<br/>{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
