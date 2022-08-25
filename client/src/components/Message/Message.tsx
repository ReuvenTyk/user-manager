import React from "react";
interface Props {
  type: "warning" | "info" | "danger" | "success";
  children?: React.ReactNode;
}
function Status(props: Props) {
  function getBadgeCss() {
    switch (props.type) {
      case "success":
        return "alert-success";
      case "warning":
        return "alert-warning";
      case "danger":
        return "alert-danger";
      case "info":
        return "alert-info";
      default:
        return "alert-secondary";
    }
  }
}

function Message(props: Props) {
  return (
    <div className="alert alert-warning" role="alert">
      {props.children}
    </div>
  );
}

export default Message;
