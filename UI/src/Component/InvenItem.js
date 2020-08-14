import React, { useState, Component, useEffect } from "react";
import { Card, CardImg } from "reactstrap";
const axios = require("axios");

function InvenItem(props) {
  const [search, setSearch] = useState("fat in ");
  const [imgSrc, setSrc] = useState("");
  const error = null;
  const searchValue = props.searchValue;

  useEffect(() => {
    getJSON();
    
  });

  function getJSON() {
    setSearch((prevSearch) => prevSearch.concat(searchValue));
    axios({
      method: "GET",
      url:
        "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "d855a2f388msh798c23f7d8e4d9ap1a8892jsn2de7d6e74eb6",
        useQueryString: true,
      },
      params: {
        q: search,
      },
    })
      .then((response) => {
        console.log(response);
        setSrc(response.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <CardImg alt="new" src={imgSrc} />
    </div>
  );
}
export default InvenItem;
