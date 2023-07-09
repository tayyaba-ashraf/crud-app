/**on this page data will be displayed to user so that user can read ,and that data is fetched from api */
import { getAllByText } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [apidata, setapidata] = useState([]);

  const getData = () => {
    axios
      .get("https://642167e986992901b2b293d1.mockapi.io/Employee")
      .then((response) => {
        setapidata(response.data);
        /**when get request will become successfull it means rows or records or data from api
         * has fetched successfully and after that ->then() part will execute ,as a result rows are stored in
         * data property of ->response object
         */
      });
  };

  function DeleteData(id) {
    axios
      .delete(`https://642167e986992901b2b293d1.mockapi.io/Employee/${id}`)
      .then(() => {
        /**means when data will be successfully deleted then getData will called*/
        getData();
      }).catch((err)=>{
        console.log(err);
    
      })
  }

  const saveDataToLocalStorage = (id, E_name, E_age, E_email) => {
    // data will store in local storage in key-value pair form means JSON formate
    localStorage.setItem("id", id);
    localStorage.setItem("name", E_name);
    localStorage.setItem("age", E_age);
    localStorage.setItem("email", E_email);
  };
  /**this  hook function useEffect will must execute whenever our component will mount*/
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container bg-seconday">
        <div className="row">
          <div className="text-dark p-4 text-center ">
            <h3>Data View</h3>
          </div>

          <div className="mb-2 mt-2">
            {/* /create is route name which is defined in App.js */}
            <Link to="/create">
              <button className="btn btn-primary">INSERT DATA</button>
            </Link>
          </div>

          <div className="col-md-12">
            <table className="table table-bordered table-striped table-dark table-hover">
              <thead>
                <tr>
                  <th>EMPLOYEE ID</th>
                  <th>EMPLOYEE NAME</th>
                  <th>EMPLOYEE AGE</th>
                  <th>EMPLOYEE EMAIL</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {
                  /**because we will write JSX that why we have opened brace-> {} */
                  /**all rows have stored in apidata ,one by one they will be iterated using map */
                  apidata.map((item) => {
                    return (
                      <>
                        {/* kun k data api may inhi state varibles may stored ha ye keys hain actually */}
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.E_name}</td>
                          <td>{item.E_age}</td>
                          <td>{item.E_email}</td>
                          <td>
                            <Link to="/edit">
                            <button className="btn btn-primary" onClick={() => { saveDataToLocalStorage(item.id,item.E_name,item.E_age,item.E_email)}}>
                            EDIT </button>
                            </Link> 
                            {/* E_name , E_age ,E_email are the keys created in api 
                            we created these in Create component
                            */}
                          </td>
                          <td>
                            <button
                              className="btn btn-danger"onClick={() => {  if (window.confirm("Are you sure to delete this data??")) {DeleteData(item.id)}
                              }}
                            >
                              DELETE
                            </button>
                              
                            {/* window is an object of data whic shows msg with ok and cancel option
                      if condition becomes true in window.confirm then deletedata function will execute */}
                          </td>
                        </tr>
                      </>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Read;
