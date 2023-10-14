import React, { useEffect, useState } from "react";
import axios from "axios";

const Task4 = () => {
    
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://dummyjson.com/users');
                setUserData(res?.data?.users);
                console.log(userData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // Set loading to false regardless of success or error
            }
        };

        fetchData();
    }, []);


  return (
    <>
    <div className="text-light" style={{backgroundColor:"black"}}>
      <h3 className="text-center p-3">Dummy Data</h3>
        {loading ? (
          <h3 className="text-center">...Loading...</h3>
        ) : (
          <table className="ms-2">
            <thead>
              <tr className="border">
                <th className="border">Sr No.</th>
                <th className="border">Profile Pic</th>
                <th className="border">FirstName</th>
                <th className="border">Last Name</th>
                <th className="border">Gender</th>
                <th className="border">Email</th>
                <th className="border">UserName</th>
                <th className="border">Domain</th>
               <th className="border">IP</th>
                <th className="border">University</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.id} className="border">
                  <td className="border">{user.id}</td>
                  <td className="border px-3"><img src={user.image} style={{width:"40px"}}/></td>
                  <td className="border px-3">{user.firstName}</td>
                  <td className="border px-3">{user.lastName}</td>
                  <td className="border px-3">{user.gender}</td>
                  <td className="border px-3">{user.email}</td>
                  <td className="border px-3">{user.username}</td>
                  <td className="border px-3">{user.domain}</td>
                  <td className="border px-3">{user.ip}</td>
                  <td className="border px-3">{user.university}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Task4;
