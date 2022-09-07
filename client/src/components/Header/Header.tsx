import React from "react";

// export let statusSelected: any;

interface HeaderProps {
  //getting the function from parent--> user.tsx
  addUser: Function;
}

export interface HeaderState {
  fullName: string;
  email: string;
  status: string;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      status: "active",
    };
  }

  handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    this.setState({
      ...this.state,
      [fieldName]: event.target.value,
    });
  };

  handleStatusSelect = (selected: string) => {
    this.setState(() => ({
      status: selected,
    }));
  };

  addUser = () => {
    this.props.addUser({
      fullName: this.state.fullName,
      email: this.state.email,
      status: this.state.status,
    });

    this.setState(() => ({
      fullName: "",
      email: "",
      status: "",
    }));
  };

  render() {
    return (
      <div className="d-flex align-items-center p-3 my-4 bg-light">
        <h5 className="me-auto mb-0">Users</h5>
        <div className="d-flex">
          <input
            type="text"
            value={this.state.fullName}
            onChange={(e) =>
              this.handleInputChange(e, "fullName")
            } /* the event and the name of the parameter from the state */
            placeholder="Full Name"
            className="form-control"
          />

          <input
            type="text"
            value={this.state.email}
            onChange={(e) => this.handleInputChange(e, "email")}
            placeholder="Email"
            className="form-control mx-3"
          />

          <select
            id="status"
            className="form-select mx-3"
            onChange={(e) => this.handleStatusSelect(e.target.value)}
          >
            <option value="active">Active</option>
            <option value="expired">Expired</option>
            <option value="banned">Banned</option>
          </select>

          <button onClick={this.addUser} className="btn btn-info text-white">
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
