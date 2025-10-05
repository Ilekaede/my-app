const Profile = () => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <img
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
        className="w-full h-32 object-cover object-center transition-transform duration-200 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200"></div>
    </div>
  );
};

export const Gallery = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
};
