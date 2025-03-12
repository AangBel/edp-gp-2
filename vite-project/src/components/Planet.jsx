import React from "react";

const Planet = () => {
  return (
    <>
      <div>
        <title>A Star Wars Planet</title>
      </div>
      <div>
        <h1 id="name"></h1>
        <div id="generalInfo">
          <p>
            Terrain: <span id="terrain"></span>{" "}
          </p>
          <p>
            Population: <span id="population"></span> people
          </p>
          <p>
            Climate: <span id="climate"></span>
          </p>
        </div>
        <div id="planets">
          <h2>Characters</h2>
          <p>
            <span id="characters"></span>
          </p>
        </div>
        <div id="films">
          <h2>Films appeared in</h2>
          <ul></ul>
        </div>
      </div>
    </>
  );
};

export default Planet;
