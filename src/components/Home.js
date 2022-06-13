import React, { useEffect, useState } from "react";

const Home = () => {
  const [homesState, setHomeState] = useState([]);
  useEffect(() => {
    const homesDataPromise = Promise.resolve([
      {
        title: "Test home 1",
        image: "listing.jpg",
        location: "Test location 1",
        price: "1",
      },
      {
        title: "Test home 2",
        image: "listing.jpg",
        location: "Test location 2",
        price: "1",
      },
      {
        title: "Test home 3",
        image: "listing.jpg",
        location: "Test location 3",
        price: "1",
      },
      {
        title: "Test home 4",
        image: "listing.jpg",
        location: "Test location 4",
        price: "1",
      },
      {
        title: "Test home 5",
        image: "listing.jpg",
        location: "Test location 5",
        price: "1",
      },
    ]);
    homesDataPromise.then((homesData) => setHomeState(homesData));
  });

  let homes;

  homes = homesState.map((home) => {
    <div data-testid="home">Home!</div>;
  });

  // console.log("home", homes);
  return <div>{homes}</div>;
};

export default Home;
