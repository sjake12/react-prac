import { useState, useEffect } from "react";

function Dropdown() {
  const [country, setCountry] = useState([]);

  const countries = [
    {
      name: "India",
      value: "IN",
      cities: ["Delhi", "Mumbai"],
    },
    {
      name: "Pak",
      value: "PK",
      cities: ["Lahore", "Karachi"],
    },
    {
      name: "Bangladesh",
      value: "BG",
      cities: ["Dhaka", "Chittagong"],
    },
  ];

  const options = countries.map((item, index) => {
    return (
      <option key={index} value={index}>
        {item.name}
      </option>
    );
  });

  const handleChange = (e) => {
    setCountry([e.target.value]);
    console.log(e.target.value);
  };

  return (
    <div className="container">
      <select onChange={handleChange}>{options}</select>
      <select>
        {countries[country] &&
          countries[country].cities.map((city, i) => {
            return <option key={i}>{city}</option>;
          })}
      </select>
    </div>
  );
}

export default Dropdown;
