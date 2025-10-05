import { useEffect, useState } from "react";

export const DogImages = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then((res) => res.json())
      .then(({ message }) => setDogs(message));
  }, []);
  return dogs.map((dog, i) => (
    <div
      key={i}
      className="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <img
        alt="可愛いラブラドール"
        src={dog}
        className="w-full h-48 object-cover object-center transition-transform duration-200 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200"></div>
    </div>
  ));
};
