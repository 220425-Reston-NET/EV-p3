import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUpPage() {
  let uName = "";
  let uAddress = "";
  let uEmail = "";
  let uPassword = "";
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  const [users, setUsers] = useState([
    {
      userId: 0,
      name: "",
      address: "",
      email: "",
      password: "",
    },
  ]);

  function UpDateCustomerName(e: React.ChangeEvent<HTMLInputElement>) {
    uName = e.target.value;
    console.log(uName);
  }

  function UpDateCustomerEmail(e: React.ChangeEvent<HTMLInputElement>) {
    uEmail = e.target.value;
    console.log(uEmail);
  }

  function UpDateCustomerAddress(e: React.ChangeEvent<HTMLInputElement>) {
    uAddress = e.target.value;
    console.log(uAddress);
  }

  function UpDateCustomerPassword(e: React.ChangeEvent<HTMLInputElement>) {
    uPassword = e.target.value;
    console.log(uPassword);
  }

  // submit event handler
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    // stop page from refreshing
    e.preventDefault();

    fetch(
      "http://Essentialvibesproject-env.eba-mmmzminf.us-east-1.elasticbeanstalk.com/api/User/AddUser",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // Essentialvibesproject-env.eba-mmmzminf.us-east-1.elasticbeanstalk.com/api/User/AddUser
        },
        body: JSON.stringify({
          name: uName,
          address: uAddress,
          email: uEmail,
          pasword: uPassword,
        }),
      }
    );
    goToNewCustInfo();
  }
  const navigate = useNavigate();
  const goToNewCustInfo = () => {
    navigate("/shop");
  };

  return (
    <>
      <div className="signup-image">
        <form onSubmit={onSubmit}>
          <br />
          <h4 className="h1-style">
            Sign up for your free Luscious Blends account
          </h4>
          <div className="inner-form">
            <div className="form-group">
              <label htmlFor="name">Full Name: </label>
              <input
                className="form-control form-control-lg"
                type="text"
                name="userName"
                onChange={UpDateCustomerName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname"> Home Address:</label>
              <input
                className="form-control"
                type="text"
                name="userAddress"
                onChange={UpDateCustomerAddress}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email"> Email:</label>
              <input
                className="form-control"
                type="text"
                name="userEmail"
                onChange={UpDateCustomerEmail}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"> Password</label>
              <input
                className="form-control"
                type="password"
                name="userPassword"
                onChange={UpDateCustomerPassword}
              />
              <label htmlFor="password">Confirm Password</label>
              <input
                className="form-control"
                type="password"
                name="userPassword"
                // onChange={UpDateCustomerPassword}
              />
              <br />

              <input
                type={"submit"}
                value={"Submit"}
                className="submit-style"
              />
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                />
                Check here to indicate that you have read and agree to the terms
                and conditions of Luscious Blends
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpPage;
