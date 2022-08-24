import React from "react";
import Header from "../Header/Header";
import Table from "../Table/Table";

export type StatusType = "active" | "expired" | "banned";

export interface IUser {
  fullName: string;
  email: string;
  status: StatusType;
  id?: string;
}

interface UsersProps {}

interface UsersState {}

class Users extends React.Component<UsersProps, UsersState> {
  render() {
    return (
      <div className="bg-dark bg-opacity-10 border px-2">
        <Header></Header>
        <Table></Table>
      </div>
    );
  }
}

export default Users;
