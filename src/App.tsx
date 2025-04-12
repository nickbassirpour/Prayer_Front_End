import { useState } from "react";
import stIgnatius from "./assets/st_ignatius.png";
import "./App.css";

function App() {
  return (
    <section className="grid gap-2 md:grid-cols-2 md:items-center md:text-left">
      <div>
        <a href="https://traditioninaction.org">
          <img
            src={stIgnatius}
            alt="Saint of the Day"
            className="w-full h-64 object-cover"
          />
        </a>
      </div>
      <div>
        <h1 className="mb-2 text-3xl font-medium">St Ignatius</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
          odit. Id vel dolorum debitis deserunt cupiditate numquam excepturi
          voluptas eligendi aperiam quidem nisi nostrum maiores nobis maxime
          eum, distinctio qui?
        </p>
      </div>
    </section>
  );
}

export default App;
