import { useEffect, useState } from "react";

export const DogImages = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then((res) => res.json())
      .then(({ message }) => setDogs(message));
  }, []);
  return dogs.map((dog, i) => (
    <img key={i} alt="dog" src={dog} height={300}></img>
  ));
};
