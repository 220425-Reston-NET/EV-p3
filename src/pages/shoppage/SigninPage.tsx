import React, { useState } from "react";

function SigninPage() {
  let userEmail = "";
  let userPassword = "";

  // make a function if loging info matches our user in db = storepage else:
  // user not found message display.
  const [users, setUser] = useState({
    userID: 0, //what datatype isreal want
    name: "",
    email: "",
    password: "",
  });

  function GetCustomerEmail(e: React.ChangeEvent<HTMLInputElement>) {
    userEmail = e.target.value;
    console.log(userEmail);
  }

  function GetCustomerPassword(e: React.ChangeEvent<HTMLInputElement>) {
    userPassword = e.target.value;
    console.log(userPassword);
  }
  //   onSubmit function here
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    }
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div className="inner-form-login">
            <h2>Please login using your signed up information</h2>
            {/* check for erro then display it => set error in else  */}
            {/* {error != "" ? <div className="error">{error}</div> : ""} */}
            {/* name="pokeName" onChange={updatePokeName} */}
            <div className="form-group">
              <label htmlFor="email"> Email Address </label>
              <input
                className="form-control form-control-lg"
                type="email"
                name="userEmail"
                onChange={GetCustomerEmail}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input
                className="form-control form-control-lg"
                type="password"
                name="userPassword"
                onChange={GetCustomerPassword}
              ></input>
            </div>
            {/* <Link className="poke-link" to={`/drug${userEmail}`}> */}
            {/* <button>{userEmail}</button> */}
            <input type={"submit"} value={"LOGIN"} />
            {/* </Link> */}
          </div>
        </form>
      </div>
    </>
  );
}

export default SigninPage;
