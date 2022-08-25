import React from "react";
import Status from "../Status/Status";
import { IUser } from "../Users/Users";

interface Props {
  users: Array<IUser>;
  deleteUser: Function;
}

function Table(props: Props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th className="w-25">Full Name</th>
          <th className="w-25">Status</th>
          <th className="w-50">Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <tr key={user._id} className="bg-light">
            <td>{user.fullName}</td>
            <td>
              <Status type={user.status}></Status>
            </td>
            <td>{user.email}</td>
            <td>
              <button
                //the add of arrow func so the function won't start before clicking
                onClick={() => props.deleteUser(user._id)}
                className="btn btn-default"
              >
                <i className="bi-trash3"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
