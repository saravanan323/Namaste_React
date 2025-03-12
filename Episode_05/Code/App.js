import React from "react";
import ReactDOM from "react-dom/client";

/* Header
	- Logo 
	- Nav Menu
		- Home
		- About Us
		- Contact Us
		- Cart
   Body
    - search
	- restaurant container 
	- restaruant card
   Footer
	
*/

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png"
      />
      <ul>
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>CONTACT US</li>
        <li>CART</li>
      </ul>
    </div>
  );
};

const ResCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3>{resData.info.costForTwo}</h3>
      <h4>{resData.info.name}</h4>
      <h4>{resData.info.avgRatingString}</h4>
      <h4>{resData.info.sla.slaString}</h4>
      <div>{resData.info.cuisines.join(",")}</div>
      <div>{resData.info.areaName}</div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "636313",
      name: "The Rameshwaram Cafe",
      cloudinaryImageId: "0adee855c65fa947a256764a87a55658",
      locality: "Brookefield",
      areaName: "Marathahalli",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian"],
      avgRating: 4.6,
      parentId: "384316",
      avgRatingString: "4.6",
      totalRatingsString: "43K+",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 8,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "8.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-06 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-South%20Indian.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "14K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8f5d42d6-4f59-47a0-bca5-7d3b38feb7d9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/the-rameshwaram-cafe-brookefield-marathahalli-rest636313",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "4750",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/33930a4d-06dc-490c-8812-773624dcb4b4_4750.JPG",
      locality: "Kaikondrahalli",
      areaName: "Sarjapur Road",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.2,
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "33K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-07 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Sandwiches.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Sandwiches.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8f5d42d6-4f59-47a0-bca5-7d3b38feb7d9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/subway-kaikondrahalli-sarjapur-road-rest4750",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "72821",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/1/58da57d6-6af0-41c0-94c2-1d6cbbd4faba_72821.jpg",
      locality: "Dodda Kannali",
      areaName: "Kaikondrahalli",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "50K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-07 06:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8f5d42d6-4f59-47a0-bca5-7d3b38feb7d9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/burger-king-dodda-kannali-kaikondrahalli-rest72821",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "23682",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/e83494ee-3c0b-4194-abd3-4619fa906aab_23682.jpg",
      locality: "HSR Layout",
      areaName: "HSR Layout",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "74K+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 6.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-06 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "12K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8f5d42d6-4f59-47a0-bca5-7d3b38feb7d9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/mcdonalds-hsr-layout-rest23682",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "928814",
      name: "Asha Tiffins",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/21/bfeed2db-045b-4948-93b9-b95d6804d0a5_928814.jpg",
      locality: "Marathahalli",
      areaName: "Munnekollal",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "sandwich",
        "Pizzas",
        "Beverages",
        "Juices",
        "Italian",
      ],
      avgRating: 4.5,
      veg: true,
      parentId: "236243",
      avgRatingString: "4.5",
      totalRatingsString: "8.9K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-06 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8f5d42d6-4f59-47a0-bca5-7d3b38feb7d9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/asha-tiffins-marathahalli-munnekollal-rest928814",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "313792",
      name: "Brahmins Tiffin Centre",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/5/4de2f50f-a0da-4b79-9bad-fc78c8a3696d_313792.jpg",
      locality: "Silver Spring Layout",
      areaName: "Marathahalli",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Fast Food"],
      avgRating: 4.5,
      veg: true,
      parentId: "20078",
      avgRatingString: "4.5",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 6.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-06 12:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹19",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8f5d42d6-4f59-47a0-bca5-7d3b38feb7d9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/brahmins-tiffin-centre-silver-spring-layout-marathahalli-rest313792",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "787587",
      name: "Vardhas",
      cloudinaryImageId: "f1bc9ddf53de574cdc35ab2f717df234",
      locality: "VSR Complex",
      areaName: "Bellandur Sarjapur",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian", "Snacks", "Oriental", "Sweets"],
      avgRating: 4.5,
      veg: true,
      parentId: "21428",
      avgRatingString: "4.5",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-06 15:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8f5d42d6-4f59-47a0-bca5-7d3b38feb7d9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/vardhas-vsr-complex-bellandur-sarjapur-rest787587",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "31192",
      name: "Sri Udupi Park - Opp Bescom",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/28/87d2e6ec-3780-4d2c-a1c1-2e4b05e60aa7_31192.jpg",
      locality: "Phoenix Marketcity Mall",
      areaName: "Mahadevapura",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Jain", "Chinese", "Desserts"],
      avgRating: 4.4,
      veg: true,
      parentId: "381856",
      avgRatingString: "4.4",
      totalRatingsString: "85K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 9.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "9.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-06 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8f5d42d6-4f59-47a0-bca5-7d3b38feb7d9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/sri-udupi-park-opp-bescom-phoenix-marketcity-mall-mahadevapura-rest31192",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const ResContainer = () => {
  return (
    <div className="res-container">
      {resList.map((e) => (
        <ResCard key={e.info.id} resData={e} />
      ))}
    </div>
  );
};

const Body = (
  <div className="body">
    <Header />
    <div className="search-container">
      <input className="search" placeholder="Search......." />
    </div>
    <ResContainer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Body);
