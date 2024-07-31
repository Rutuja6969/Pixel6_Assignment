import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
function Table() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const params = { skip: 0, limit: 100 };
    axios
      .get("https://dummyjson.com/users", { params })
      .then((response) => {
        let arr = [];
        let nData = response.data.users;
        nData.map((item, index) => {
          arr.push({
            index: index + 1,
            image: item.image,
            FullName:
              item.firstName + " " + item.maidenName + " " + item.lastName,
            Demography: item.gender + "/" + item.age,
            Designation: item.company.title,
            Location: item.address.address,
          });
        });
        setData(arr);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [
    {
      name: "#",
      selector: (row) => row.index,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row) => row.image,
      sortable: false,
      cell: (row) => (
        <img
          src={row.image}
          alt="Profile"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
      ),
    },
    {
      name: "FullName",
      selector: (row) => row.FullName,
      sortable: true,
    },
    {
      name: "Demography",
      selector: (row) => row.Demography,
      sortable: false,
    },
    {
      name: "Designation",
      selector: (row) => row.Designation,
      sortable: false,
    },
    {
      name: "Location",
      selector: (row) => row.Location,
      sortable: false,
    },
  ];
  return (
    <>
      <DataTable columns={columns} data={data} pagination />
    </>
  );
}

export default Table;
