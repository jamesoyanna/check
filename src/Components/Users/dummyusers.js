import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

function Users() {
  const Api =
    "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json";
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);

  let query = new URLSearchParams(useLocation().search);
  let id = query.get("id");
  //now we need to just minus one from original data to get user details
  let new_id = id - 1;
  let Person_Data = Data[new_id];
  const { push } = useHistory();

  const Handle = () => {
    push("/data");
  };

  useEffect(() => {
    const fetch_data = async () => {
      setLoading(true);
      const response = await axios.get(Api);
     setData(response.data);
      setLoading(false);
    };
    fetch_data();
  }, []);



  if (Loading) {
    return <h1>loading...</h1>;
  }



const FetchData = ({results}) => {
  return (
    <>
      <h1>Details of Users</h1>
      {results.map((result, i) => (
        <React.Fragment key={i}>
          <div>
            <h5>First Name: {result.first_name}</h5>
            <h5>Last:{result.last_name}</h5>
            <h5>Company: {result.company_name}</h5>
            <h5>City: {result.city}</h5>
            <h5>City: {result.state}</h5>
            <h5>City: {result.web}</h5>
            <h5>City: {result.zip}</h5>
          </div>
        </React.Fragment>
      ))}
    </>
  );
 
}


  return (
    <>
      <button onClick={Handle}>
        <i className="fas fa-arrow-left"></i>
        Details:
      </button>
      <div>
        <ul>
          {/* {Data && <FetchData results = {results}} */}
          {/* {Object.entries(Person_Data).map(([key, item]) => (
            <li key={key}>{item.name}</li>
          ))} */}
        </ul>

        {/* <p>First Name:</p>
        <p>Last Name:</p>
        <p>Company Name:</p>
        <p>City:</p>
        <p>State:</p>
        <p>Zip:</p>
        <p>Email:</p>
        <p>Web:</p>
        <p>Age:</p> */}
      </div>

      {Data && <FetchData results={Data} />}
    </>
  );
}

export default Users;
