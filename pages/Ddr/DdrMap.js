import React from "react";
import { Container } from "react-bootstrap";
import DatamapsIndia from "react-datamaps-india";

const DdrMap = ({setStateValue}) => {
  let regionData = {};
  const states = [{
    "state_id": 1,
    "state_name": "Andaman and Nicobar Islands"
  }, {
    "state_id": 2,
    "state_name": "Andhra Pradesh"
  }, {
    "state_id": 3,
    "state_name": "Arunachal Pradesh"
  }, {
    "state_id": 4,
    "state_name": "Assam"
  }, {
    "state_id": 5,
    "state_name": "Bihar"
  }, {
    "state_id": 6,
    "state_name": "Chandigarh"
  }, {
    "state_id": 7,
    "state_name": "Chhattisgarh"
  }, {
    "state_id": 8,
    "state_name": "Dadra and Nagar Haveli"
  }, {
    "state_id": 37,
    "state_name": "Daman and Diu"
  }, {
    "state_id": 9,
    "state_name": "Delhi"
  }, {
    "state_id": 10,
    "state_name": "Goa"
  }, {
    "state_id": 11,
    "state_name": "Gujarat"
  }, {
    "state_id": 12,
    "state_name": "Haryana"
  }, {
    "state_id": 13,
    "state_name": "Himachal Pradesh"
  }, {
    "state_id": 14,
    "state_name": "Jammu and Kashmir"
  }, {
    "state_id": 15,
    "state_name": "Jharkhand"
  }, {
    "state_id": 16,
    "state_name": "Karnataka"
  }, {
    "state_id": 17,
    "state_name": "Kerala"
  }, {
    "state_id": 18,
    "state_name": "Ladakh"
  }, {
    "state_id": 19,
    "state_name": "Lakshadweep"
  }, {
    "state_id": 20,
    "state_name": "Madhya Pradesh"
  }, {
    "state_id": 21,
    "state_name": "Maharashtra"
  }, {
    "state_id": 22,
    "state_name": "Manipur"
  }, {
    "state_id": 23,
    "state_name": "Meghalaya"
  }, {
    "state_id": 24,
    "state_name": "Mizoram"
  }, {
    "state_id": 25,
    "state_name": "Nagaland"
  }, {
    "state_id": 26,
    "state_name": "Odisha"
  }, {
    "state_id": 27,
    "state_name": "Puducherry"
  }, {
    "state_id": 28,
    "state_name": "Punjab"
  }, {
    "state_id": 29,
    "state_name": "Rajasthan"
  }, {
    "state_id": 30,
    "state_name": "Sikkim"
  }, {
    "state_id": 31,
    "state_name": "Tamil Nadu"
  }, {
    "state_id": 32,
    "state_name": "Telangana"
  }, {
    "state_id": 33,
    "state_name": "Tripura"
  }, {
    "state_id": 34,
    "state_name": "Uttar Pradesh"
  }, {
    "state_id": 35,
    "state_name": "Uttarakhand"
  }, {
    "state_id": 36,
    "state_name": "West Bengal"
  }];

  states.forEach((state) => {
    regionData[state.state_name] = { state_id: state.state_id };
  });

  console.log(regionData);

  const returnStateHoverComponent = ({ value }) => {
    return <span>{value}</span>;
  };

  return (
    <Container style={{ height: "400px", width: "400px",border:"1px solid black",justifyContent:"centre",alignItems:"centre",backgroundColor:"grey" }}>
      <DatamapsIndia
        hoverComponent={({ value }) => {
          return (
            <>
              <p>State: {value.name}</p>
              {value.score ? <p>{value.score}</p> : ""}
            </>
          );
        }}
       
        mapLayout={{
          title: "Live Traffic In India",
          startColor: "blue",
          endColor: "#FF6347",
          hoverTitle: "Count",
          borderColor: "#8D8D8D",
          hoverBorderColor: "#8D8D8D",
          hoverColor: "blue",
          border:"2px solid red"
        }}
      />
    </Container>
  );
};

export default DdrMap;
