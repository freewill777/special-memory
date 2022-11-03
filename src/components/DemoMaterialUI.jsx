import { useState } from "react";

import Infocard from "./Infocard";

export default function DemoMaterialUI() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> {count}</h1>
      <Infocard
        title="Chicken"
        share={() => setCount(count + 1)}
        operation="add 1"
      />
      <Infocard
        title="Fish"
        share={() => setCount(count - 1)}
        operation="remove 1"
      />
      <Infocard title="Pork" />
      <Infocard title="Dinosaur" />
      <Infocard />
    </>
  );
}
