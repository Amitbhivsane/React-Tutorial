import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [SearchParasm, setSearchParasm] = useSearchParams();
  const age = SearchParasm.get("age");
  const city = SearchParasm.get("city");

  return (
    <div>
      <h1>Filter</h1>
      <h2>age is : {age}</h2>
      <h2>city is: {city}</h2>
      <h3>http://localhost:3000/filter?age=50&city=jalgaon</h3>
      <button onClick={() => setSearchParasm({ age: 40 })}>
        Set Search 40 age
      </button>
      <br />
      <input
        onChange={(e) => setSearchParasm({ text: e.target.value })}
        placeholder="set search value"
        type="text"
      />
    </div>
  );
};

export default Filter;
