import React, { useState } from "react";
import './SignUp.css'

function SignUpPage() {
  let userName = "";
  let userAddress = "";
  let userEmail = "";
  let userPassword = "";

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
    userName = e.target.value;
    console.log(userName);
  }

  function UpDateCustomerEmail(e: React.ChangeEvent<HTMLInputElement>) {
    userEmail = e.target.value;
    console.log(userEmail);
  }

  function UpDateCustomerAddress(e: React.ChangeEvent<HTMLInputElement>) {
    userAddress = e.target.value;
    console.log(userAddress);
  }

  function UpDateCustomerPassword(e: React.ChangeEvent<HTMLInputElement>) {
    userPassword = e.target.value;
    console.log(userPassword);
  }

  // submit event handler
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    // stop page from refreshing
    e.preventDefault();
  }
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <h4 className="siignup">
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
              <input
                type={"submit"}
                value={"Submit"}
                className="submit-style"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpPage;
