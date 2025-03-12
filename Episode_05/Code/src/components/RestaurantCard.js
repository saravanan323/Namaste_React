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
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
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
