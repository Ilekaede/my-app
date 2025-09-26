const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export const PersonTodo = () => {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todo</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on tne alcohol-fuelled engine</li>
      </ul>
    </div>
  );
};
