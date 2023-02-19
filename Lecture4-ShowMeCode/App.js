import React from 'react';
import ReactDOM from 'react-dom/client';
import Logo from './Logo.png';
// let Title=()=>(
//     <h1 className='title'>
//         Food Villa
//     </h1>
// );

// let Header= ()=>(
//         <div className="container">
//             <Title/>
//             <h1>Namste React 2023</h1>
//             <h2>Hello</h2>
//         </div>
//     );
    
let Title=()=>(
    <img src={Logo} alt="logo" className='logo' />
);
let Header = ()=>{
    return (
        <div className='header-wrapper'>
        <div className='header'>
            <Title/>
            <div className='nav-lists'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
            </div>
        </div>
    );
};

let Restaurant = ({ avgRating, cloudinaryImageId, name, cuisines, slaString, costForTwoString })=>{

    let ratingColor = (avgRating < 4) ? { backgroundColor: '#DB7C38' } : { backgroundColor: '#48C479' };
    
    return (
        <div className='restaurant'>

            <div className='res-img'>
                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="Being Hungry" className='restaurant-img'/>
            </div>
            <div className='res-title'>
                <h1 className='res-name'>{name}</h1>
                <p className='res-tags'>{cuisines.join(', ')}</p>
            </div>
            <div className='res-details'>
                <span className='res-rating' style={ratingColor} >&#9733; {avgRating}</span>
                &middot;
                <span className='res-time'>{slaString}</span>
                &middot;
                <span className='res-cost'> {costForTwoString}</span>
            </div>
            <hr/>
        </div>
    );
};

let restaurantList = [
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "15810",
            "name": "Being Hungry",
            "uuid": "db3cf71d-6aa5-48f8-b48c-71d43db14cc6",
            "city": "3",
            "area": "Hanuman Nagar",
            "totalRatingsString": "500+ ratings",
            "cloudinaryImageId": "qqyrvjpy8x41dwyjysxt",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Biryani"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "slaString": "33 MINS",
            "lastMileTravel": 1.2000000476837158,
            "slugs": {
                "restaurant": "being-hungry-towards-rto-office-kondapur",
                "city": "hyderabad"
            },
            "cityState": "3",
            "address": "1-112/90/3,Opp To Kims Hospital, Kondapur",
            "locality": "Kondapur",
            "parentId": 105,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "40% off",
                "shortDescriptionList": [
                    {
                        "meta": "40% off | Use GUILTFREE",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "40% off up to ₹100 | Use code GUILTFREE",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "40% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use GUILTFREE",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "40% off up to ₹100 | Use code GUILTFREE",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2700,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2700,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2700",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5924080~p=1~eid=00000186-6436-5487-0c01-0d7100860128",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.2 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "15810",
                "deliveryTime": 33,
                "minDeliveryTime": 33,
                "maxDeliveryTime": 33,
                "lastMileTravel": 1.2000000476837158,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.9",
            "totalRatings": 500,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "39546",
            "name": "Mehfil",
            "uuid": "4d24b2f1-59ef-41a2-9777-5947b08da1d1",
            "city": "3",
            "area": "Hitec City",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "stnwpjuu5fhehsx1dw4z",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Tandoor",
                "Chinese",
                "Kebabs"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "slaString": "26 MINS",
            "lastMileTravel": 2.9000000953674316,
            "slugs": {
                "restaurant": "mehfil-restaurant-madhapur-madhapur",
                "city": "hyderabad"
            },
            "cityState": "3",
            "address": "Jaihind Enclave, Beside Indiblaze, Madhapur, Hyderabad, Telangana 500081",
            "locality": "Jaihind Enclave",
            "parentId": 637,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "10% off",
                "shortDescriptionList": [
                    {
                        "meta": "10% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "10% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2700,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2700,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2700",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2.9 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "39546",
                "deliveryTime": 26,
                "minDeliveryTime": 26,
                "maxDeliveryTime": 26,
                "lastMileTravel": 2.9000000953674316,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.9",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "345121",
            "name": "The Nawaabs Restaurant",
            "uuid": "322cc023-ef31-4a40-bf72-e2aac2f5b8cb",
            "city": "3",
            "area": "Gachibowli",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "wqosucfihcmzg1dyqc2k",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Biryani"
            ],
            "tags": [],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 39,
            "minDeliveryTime": 39,
            "maxDeliveryTime": 39,
            "slaString": "39 MINS",
            "lastMileTravel": 2.200000047683716,
            "slugs": {
                "restaurant": "the-nawaab’s-restaurant-kondapur-kondapur",
                "city": "hyderabad"
            },
            "cityState": "3",
            "address": "H.No:3/136, Anjaiah Nagar, Gachibowli Road,  Madhapur, Hyderabad- 500081",
            "locality": "Anjaiah Nagar",
            "parentId": 211813,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "FLAT ₹100 off",
                "shortDescriptionList": [
                    {
                        "meta": "FLAT ₹100 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT ₹100 off on orders above ₹749 | Use code FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹100 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT ₹100 off on orders above ₹749 | Use code FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2700,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2700,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2700",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5958501~p=4~eid=00000186-6436-5487-0c01-0d7200860430",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2.2 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "345121",
                "deliveryTime": 39,
                "minDeliveryTime": 39,
                "maxDeliveryTime": 39,
                "lastMileTravel": 2.200000047683716,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.0",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "1691",
            "name": "Chaitanya Food Court",
            "uuid": "afc579e9-e2b4-4041-b36a-c976c9714752",
            "city": "3",
            "area": "Kukatpally",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "lyzlpgvi7jh12frwvlle",
            "cuisines": [
                "Biryani",
                "Chinese",
                "Andhra",
                "North Indian"
            ],
            "tags": [],
            "costForTwo": 60000,
            "costForTwoString": "₹600 FOR TWO",
            "deliveryTime": 41,
            "minDeliveryTime": 41,
            "maxDeliveryTime": 41,
            "slaString": "41 MINS",
            "lastMileTravel": 6.400000095367432,
            "slugs": {
                "restaurant": "chaitanya-food-court-kukatpally",
                "city": "hyderabad"
            },
            "cityState": "3",
            "address": "Near Malaysian Township Circle,JNTU-Hitech City Road,Kphb Colony",
            "locality": "Kukatpally",
            "parentId": 1865,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "50% off",
                "shortDescriptionList": [
                    {
                        "meta": "50% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "50% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 5500,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 5500,
                "message": "",
                "title": "Delivery Charge",
                "amount": "5500",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "6.4 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "1691",
                "deliveryTime": 41,
                "minDeliveryTime": 41,
                "maxDeliveryTime": 41,
                "lastMileTravel": 6.400000095367432,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "IT_IS_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "6372",
            "name": "Raja Rani Ruchulu",
            "uuid": "c9074b67-f115-4c98-baaf-723b22b66744",
            "city": "3",
            "area": "Kukatpally",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "cyg49t7uytu2mhb4hgub",
            "cuisines": [
                "Biryani",
                "Indian",
                "Chinese",
                "Tandoor",
                "North Indian",
                "Haleem"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 42,
            "minDeliveryTime": 42,
            "maxDeliveryTime": 42,
            "slaString": "42 MINS",
            "lastMileTravel": 7.5,
            "slugs": {
                "restaurant": "raja-rani-ruchulu-vivekananda-nagar-kukatpally",
                "city": "hyderabad"
            },
            "cityState": "3",
            "address": "Beside V V Statue, Opposite Ramdevrao Hospital, Vivekananda Nagar, Kukatpally, Hyderabad",
            "locality": "Vivekananda Nagar",
            "parentId": 8315,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "FLAT ₹100 off",
                "shortDescriptionList": [
                    {
                        "meta": "FLAT ₹100 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT ₹100 off on orders above ₹749 | Use code FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹100 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT ₹100 off on orders above ₹749 | Use code FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 6200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 6200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "6200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "7.5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "6372",
                "deliveryTime": 42,
                "minDeliveryTime": 42,
                "maxDeliveryTime": 42,
                "lastMileTravel": 7.5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "IT_IS_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "344923",
            "name": "Baskin Robbins",
            "uuid": "dffd5122-a7b3-4cb9-814f-4064c154114a",
            "city": "3",
            "area": "Sri Ram Nagar",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "nxeoltl04sgm9p3kkyrj",
            "cuisines": [
                "Desserts"
            ],
            "tags": [],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 2.9000000953674316,
            "slugs": {
                "restaurant": "baskin-robbins-sri-ram-nagar-kondapur-kondapur",
                "city": "hyderabad"
            },
            "cityState": "3",
            "address": "H.No.157/2, P.No.2A, Sri Ram Nagar, Kondapur, Hyderabad, Telangana-500084",
            "locality": "Sri Ram Nagar, Kondapur",
            "parentId": 5588,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "30% off",
                "shortDescriptionList": [
                    {
                        "meta": "30% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "30% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2700,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2700,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2700",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5923802~p=7~eid=00000186-6436-5487-0c01-0d730086071d",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2.9 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "344923",
                "deliveryTime": 25,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 25,
                "lastMileTravel": 2.9000000953674316,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "386987",
            "name": "Lucky Multicuisine Restaurant",
            "uuid": "ffd75687-9895-464a-82d0-c0ca4064df8a",
            "city": "3",
            "area": "Kukatpally",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "g8c7gkig9zxgqxpeqmas",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Tandoor",
                "South Indian"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 32,
            "minDeliveryTime": 32,
            "maxDeliveryTime": 32,
            "slaString": "32 MINS",
            "lastMileTravel": 4.400000095367432,
            "slugs": {
                "restaurant": "lucky-multi-cuisine-restaurant-kukatpally-kukatpally",
                "city": "hyderabad"
            },
            "cityState": "3",
            "address": "Shop No.B-2, B-3, B-4, Phase-IV, KPHB Colony, Hyderabad - 500072",
            "locality": "Kphb Colony",
            "parentId": 18963,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "40% off",
                "shortDescriptionList": [
                    {
                        "meta": "40% off | Use SWIGGYIT",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "40% off up to ₹80 | Use code SWIGGYIT",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "40% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use SWIGGYIT",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "40% off up to ₹80 | Use code SWIGGYIT",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4100,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4100,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4100",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "4.4 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "386987",
                "deliveryTime": 32,
                "minDeliveryTime": 32,
                "maxDeliveryTime": 32,
                "lastMileTravel": 4.400000095367432,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "IT_IS_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.4",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "353236",
            "name": "KS Bakers",
            "uuid": "605fba26-7bd6-488d-90e8-a69b7e632e8e",
            "city": "3",
            "area": "Kondapur",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "d585f2b6a8155530cdea3ba15d52860b",
            "cuisines": [
                "Bakery",
                "Pizzas",
                "Desserts",
                "Snacks",
                "Fast Food"
            ],
            "tags": [],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 31,
            "minDeliveryTime": 31,
            "maxDeliveryTime": 31,
            "slaString": "31 MINS",
            "lastMileTravel": 2,
            "slugs": {
                "restaurant": "ks-bakers-kondapur-kondapur",
                "city": "hyderabad"
            },
            "cityState": "3",
            "address": "Pt No: 34A & 45A, Svy No: 206, Sai ram Nagar, Botanical Garden Road, Kondapur, Hyderabad",
            "locality": "Botanical Garden Road",
            "parentId": 574,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "20% off",
                "shortDescriptionList": [
                    {
                        "meta": "20% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "20% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2700,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2700,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2700",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "353236",
                "deliveryTime": 31,
                "minDeliveryTime": 31,
                "maxDeliveryTime": 31,
                "lastMileTravel": 2,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "653637",
            "name": "Coconut Juice Bar",
            "uuid": "3245546f-d3c4-47ab-a549-a5fd49610300",
            "city": "3",
            "area": "Kondapur",
            "totalRatingsString": "50+ ratings",
            "cloudinaryImageId": "e40e9fc6162274b3e8ab2f4a36459332",
            "cuisines": [
                "Beverages",
                "Ice Cream"
            ],
            "tags": [],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "slaString": "27 MINS",
            "lastMileTravel": 1.399999976158142,
            "slugs": {
                "restaurant": "coconut-juice-bar-gachibowli-gachibowli-2",
                "city": "hyderabad"
            },
            "cityState": "3",
            "address": "Plot No. 1512 & 15135, Raja Rajeshwara Nagar, Kondapur, Serlingampally Circle No 20, Hyderabad, Telangana - 500084",
            "locality": "Raja Rajeshwara Nagar",
            "parentId": 9743,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2700,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2700,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2700",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5967519~p=10~eid=00000186-6436-5487-0c01-0d7400860a6e",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.3 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "653637",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "lastMileTravel": 1.399999976158142,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 50,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "27447",
            "name": "Pista House Restaurant & Bakery\t",
            "uuid": "9c988bb5-a93a-44de-a47f-b4ccab64cc8b",
            "city": "3",
            "area": "Hitec City",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "v7btfi5brrsijry8j02n",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Chinese",
                "Kebabs",
                "Mughlai",
                "Tandoor",
                "Desserts"
            ],
            "tags": [],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 31,
            "minDeliveryTime": 31,
            "maxDeliveryTime": 31,
            "slaString": "31 MINS",
            "lastMileTravel": 2.5999999046325684,
            "slugs": {
                "restaurant": "pista-house-multicuisine-restaurant-kondapur-kondapur",
                "city": "hyderabad"
            },
            "cityState": "3",
            "address": "Plot: 7 Survey Number 6, Tirumala House, Beside Bata showroom, opposite Botanical Garden, Kondapur to Gachibowli road",
            "locality": "Kondapur",
            "parentId": 319765,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2700,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2700,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2700",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2.5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "27447",
                "deliveryTime": 31,
                "minDeliveryTime": 31,
                "maxDeliveryTime": 31,
                "lastMileTravel": 2.5999999046325684,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "5140",
            "name": "Ocean of Bakes",
            "uuid": "0eed5a79-a62e-441f-b6ba-7b72c1b410d9",
            "city": "3",
            "area": "Kukatpally",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "sazzqtmsnkbn8vzhtw3o",
            "cuisines": [
                "Desserts"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 49,
            "minDeliveryTime": 49,
            "maxDeliveryTime": 49,
            "slaString": "49 MINS",
            "lastMileTravel": 7.099999904632568,
            "slugs": {
                "restaurant": "ocean-of-bakes-nizampet-nizampet-pragathi-nagar",
                "city": "hyderabad"
            },
            "cityState": "3",
            "address": "D.NO.16-2-183, SRI SAI NAGAR,HYDERNAGAR,NIZAMPET X ROADS ,Kukatpally Circle No 24,Hyderabad,Telangana-500072",
            "locality": "Nizampet",
            "parentId": 19453,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "FLAT ₹100 off",
                "shortDescriptionList": [
                    {
                        "meta": "FLAT ₹100 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT ₹100 off on orders above ₹749 | Use code FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹100 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT ₹100 off on orders above ₹749 | Use code FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 6200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 6200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "6200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "7 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "5140",
                "deliveryTime": 49,
                "minDeliveryTime": 49,
                "maxDeliveryTime": 49,
                "lastMileTravel": 7.099999904632568,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "IT_IS_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "33399",
            "name": "The Red Dragon",
            "uuid": "32b27c5a-286e-4fa5-8eb2-4a4d3d5c69e5",
            "city": "3",
            "area": "Kondapur",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "rg03s3af0rtfvsfb8lmg",
            "cuisines": [
                "Chinese"
            ],
            "tags": [],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 38,
            "minDeliveryTime": 38,
            "maxDeliveryTime": 38,
            "slaString": "38 MINS",
            "lastMileTravel": 1.2999999523162842,
            "slugs": {
                "restaurant": "red-dragon-kondapur-kondapur",
                "city": "hyderabad"
            },
            "cityState": "3",
            "address": "Beside Kolkota rolls,Near SS mini mart,safari nagar,Prashanth nagar colony,kondapur,Hyderabad",
            "locality": "Near Ss Mini Mart",
            "parentId": 5419,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "40% off",
                "shortDescriptionList": [
                    {
                        "meta": "40% off | Use MISSEDYOU",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "40% off up to ₹80 | Use code MISSEDYOU",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "40% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use MISSEDYOU",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "40% off up to ₹80 | Use code MISSEDYOU",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2700,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2700,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2700",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5962971~p=13~eid=00000186-6436-5487-0c01-0d7500860d51",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.2 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "33399",
                "deliveryTime": 38,
                "minDeliveryTime": 38,
                "maxDeliveryTime": 38,
                "lastMileTravel": 1.2999999523162842,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.5",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "120129",
            "name": "Shah Ghouse Hotel",
            "uuid": "a3177899-355f-4109-8a1f-b24b31afbcd8",
            "city": "3",
            "area": "Land Mark Residency",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "von4k7mxgbgv0w58apx6",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Chinese",
                "Mughlai",
                "Tandoor"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "slaString": "24 MINS",
            "lastMileTravel": 1.399999976158142,
            "slugs": {
                "restaurant": "shah-ghouse-hotel-restaurant-kondapur-kondapur",
                "city": "hyderabad"
            },
            "cityState": "3",
            "address": "2-25/A, Beside Apollo Hospital, Near Kondapur Kothaguda 'X' Road, Kondapur, Hyderabad",
            "locality": "Kothaguda 'X' Road",
            "parentId": 19271,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2700,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2700,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2700",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.3 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "120129",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "lastMileTravel": 1.399999976158142,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.8",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "221756",
            "name": "La Pino'z Pizza",
            "uuid": "919f06a0-8675-400f-bc84-250aa159a247",
            "city": "3",
            "area": "Hitec City",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "rgjfx1v2hapqnutnxazg",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Beverages",
                "Snacks"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 37,
            "minDeliveryTime": 37,
            "maxDeliveryTime": 37,
            "slaString": "37 MINS",
            "lastMileTravel": 2.200000047683716,
            "slugs": {
                "restaurant": "la-pino'z-madhapur-madhapur",
                "city": "hyderabad"
            },
            "cityState": "3",
            "address": "Bizness Square 16, Hitech City Rd, Laxmi Cyber City, Whitefields, HITEC City, Hyderabad, Telangana 500081",
            "locality": "Madhapur",
            "parentId": 4961,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "50% off",
                "shortDescriptionList": [
                    {
                        "meta": "50% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "50% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2700,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2700,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2700",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2.2 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "221756",
                "deliveryTime": 37,
                "minDeliveryTime": 37,
                "maxDeliveryTime": 37,
                "lastMileTravel": 2.200000047683716,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.8",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "70891",
            "name": "Vasista's Sri Lakshmi",
            "uuid": "46869fcb-0908-4fbd-8465-c99d8880ea5e",
            "city": "3",
            "area": "Kondapur Main Road",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "x9xjymfjmmupziz6whzj",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Andhra",
                "Chinese",
                "Mughlai"
            ],
            "tags": [],
            "costForTwo": 35000,
            "costForTwoString": "₹350 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 2.9000000953674316,
            "slugs": {
                "restaurant": "vasista-sri-lakshmi-kondapur-kondapur",
                "city": "hyderabad"
            },
            "cityState": "3",
            "address": "1-55/12/M/1-A-5-B, Kondapur Main Road, Gautami Enclave, Kondapur, Hyderabad, Telangana 500084, India",
            "locality": "Kondapur Main Road",
            "parentId": 387872,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "30% off",
                "shortDescriptionList": [
                    {
                        "meta": "30% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "30% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2700,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2700,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2700",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5964675~p=16~eid=00000186-6436-5487-0c01-0d7600861000",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2.9 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "70891",
                "deliveryTime": 25,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 25,
                "lastMileTravel": 2.9000000953674316,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.0",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    }
];

let Body = ()=>{
    return (
        <div className='restaurantList'>
            {restaurantList.map((restaurant)=>{
                return <Restaurant {...restaurant.data} key={restaurant.data.id} />
            })}
        </div>
    );
};

let Footer = ()=>{
    return (
        <h1>Footer</h1>
    );
};
let ApplicationComponenet=()=>{
    return(
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    );
}
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ApplicationComponenet />);