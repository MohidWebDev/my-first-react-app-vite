import { useState } from "react";

const Area = () => {
  const [length, setLength] = useState(0);
  const [area, setArea] = useState(0);

  function calculateArea(e) {
    e.preventDefault();
    const areaOfSquare = length * length;
    setArea(areaOfSquare);
  }
  return (
    <div>
      <div>
        <form onSubmit={calculateArea}>
          <input
            type="number"
            name="square-length"
            id="square-length"
            placeholder="Enter length of sides of square"
            onChange={(e) => {
              setLength(Number(e.target.value));
            }}
          />
          <button type="submit">Calculate Area</button>
        </form>

        <div>Area of Square is {area}</div>
      </div>
    </div>
  );
};
export default Area;
