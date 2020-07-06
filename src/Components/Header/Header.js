import React from "react";
import { RiBankLine } from "react-icons/ri";
import fire from "../../Configs/firebase.config";
export default function Header(props) {
  const logoutHandler = () => {
    fire
      .auth()
      .signOut()
      .then(
        function () {
          props.history.push("/");
        },
        function (error) {
          alert(error.message);
        }
      );
  };
  return (
    <div className="header__wrapper">
      <div className="brand" onClick={() => props.history.push("/dashboard")}>
        <RiBankLine className="logo-image" size={28} />
        <span className="logo-text">Quick Loans</span>
      </div>
      <div className="contact-details">
        <div className="phone-number">9876524424</div>
        <div className="email">aman.gupta@gmail.com</div>
        <div onClick={logoutHandler}>Logout</div>
      </div>
    </div>
  );
}
