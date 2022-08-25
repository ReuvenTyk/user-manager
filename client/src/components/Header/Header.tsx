import React from "react";
interface HeaderProps {
  //getting the function from parent--> user.tsx
  addUser: Function;
}

interface HeaderState {
  fullName: string;
  email: string;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
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

  addUser = () => {
    this.props.addUser({
      fullName: this.state.fullName,
      email: this.state.email,
      status: "active",
    });
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

          <button onClick={this.addUser} className="btn btn-info text-white">
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
