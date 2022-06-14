import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const Home = () => {
  const [homesState, setHomeState] = useState([]);

  useEffect(() => {
    const homesDataPromise = apiClient.getHomes();
    homesDataPromise.then((homesData) => setHomeState(homesData));
  }, []);

  let homes;

  homes = homesState.map((home, index) => (
    <div key={index} data-testid="home">
      Home!
    </div>
  ));

  // console.log("home", homes);
  return <div>{homes}</div>;
};

export default Home;
