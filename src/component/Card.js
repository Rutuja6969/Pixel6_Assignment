import React from "react";
import Table from "./Table";

function Card() {
  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Mexico",
    "Japan",
    "China",
    "India",
    "Brazil",
    "South Africa",
    "Nigeria",
    "Russia",
    "Argentina",
    "South Korea",
    "Saudi Arabia",
    "Turkey",
    "Indonesia",
    "Thailand",
  ];
  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-header">
          <div className="d-flex align-items-center">
            <div>
              <h5>Employees</h5>
            </div>
            <div className="ms-auto">
              <div className="d-flex">
                <select
                  id="category-filter"
                  className="form-select form-control"
                >
                  <option value="All">Select Country </option>
                  {countries.map((country) => (
                    <option value={country}>{country} </option>
                  ))}
                </select>
                <select
                  id="category-filter"
                  className="form-select form-control"
                  style={{ marginLeft: "10px", padding: "5px" }}
                >
                  <option value="All">Select Gender</option>
                  <option value="Male"> Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <Table></Table>
        </div>
      </div>
    </div>
  );
}

export default Card;
