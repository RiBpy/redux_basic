import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";
const UserContainer = () => {
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return userData.loading ? (
    <h3>LOADING...</h3>
  ) : userData.error ? (
    <h4>{userData.error}</h4>
  ) : (
    <div>
      <h3>User Lists</h3>
      <table bgcolor="#eee" border={2} align="center">
      <tbody>
        <tr>
          <th>Serial</th>
          <th>Full Name</th>
          <th>User Name</th>
        </tr>
        
          {userData &&
            userData.users &&
            userData.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserContainer;
