import React, { useEffect, useState } from "react";

function Driver(props: any) {
  const [active, setActive] = useState(false);
  function handleClick() {
    setActive(!active);
    console.log(active);
  }
  if (active) {
    return (
      <div>
        <button onClick={handleClick}>cacher infos</button>
        <ul>
          <li>{props.name}</li>
          <li>{props.phone}</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={handleClick}>voir infos</button>
      </div>
    );
  }
}

export default Driver;
