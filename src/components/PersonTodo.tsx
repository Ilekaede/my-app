const person = {
  name: "Gregorio Y. Zara",
};

export const PersonTodo = () => {
  return (
    <div className="card bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="flex items-center mb-6">
        <img
          className="w-16 h-16 rounded-full border-4 border-white shadow-lg mr-4"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <div>
          <h2 className="text-2xl font-bold">{person.name}'s Todo</h2>
          <p className="text-gray-300">Aeronautics Engineer</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span>Improve the videophone</span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span>Prepare aeronautics lectures</span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <span>Work on the alcohol-fuelled engine</span>
        </div>
      </div>
    </div>
  );
};
