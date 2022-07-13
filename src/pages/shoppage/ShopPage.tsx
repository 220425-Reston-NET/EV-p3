import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ShopPage.css";

function ShopPage() {
  let uEmail = "";
  let uPassword = "";

  // make a function if loging info matches our user in db = storepage else:
  // user not found message display.
  const [users, setUser] = useState({
    userID: 0, //what datatype isreal want
    name: "",
    email: "",
    password: "",
  });

  function GetCustomerEmail(e: React.ChangeEvent<HTMLInputElement>) {
    uEmail = e.target.value;
    console.log(uEmail);
  }

  function GetCustomerPassword(e: React.ChangeEvent<HTMLInputElement>) {
    uPassword = e.target.value;
    console.log(uPassword);
  }
  //   onSubmit function here
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    fetch(
      "http://Essentialvibesproject-env.eba-mmmzminf.us-east-1.elasticbeanstalk.com/api/User/SearchUserByEmailAndPassword?" +
        new URLSearchParams({
          Email: uEmail,
          Password: uPassword,
        })
      // {}
    )
      .then((response) => response.json())
      .then((users) => {
        // change/ attached user to user id in db
        setUser((previousData) => users);

        goToNewCustInfo();
      });
  }

  const navigate = useNavigate();
  const goToNewCustInfo = () => {
    navigate("/store");
  };
  return (
    <div className="signin-image">
      <h2 className="h1-style">
        Please login using your signed up information
      </h2>

      <form onSubmit={onSubmit}>
        <br />
        <br />
        <div className="inner-form-login">
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
          <br />
          {/* <button>{userEmail}</button> */}
          <input type={"submit"} value={"Sign in"} className="sinput" />
          {/* </Link> */}
          <aside className="asside">
          <Link  className="signup-signin" to={""} >
            <input
            type={"button"}
              value={"Forget your password?"}
              // className="signup-link"
            />
          </Link>
          </aside>
          <aside className="asside">
          <Link className="signup-signin" to={`/signup`}>
            {/* <button>{userEmail}</button> */}
            <input
              type={"submit"}
              value={"New to Luscious Blends? Please click here to sign up"}
              // className="signup-link"
            />
          </Link>
        </aside>
         
        </div>
      
      </form>
      
      <br />
      

      <div>
        
      </div>
    </div>
  );
}

export default ShopPage;
