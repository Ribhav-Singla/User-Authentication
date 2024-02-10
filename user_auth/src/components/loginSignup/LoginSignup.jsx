/* eslint-disable no-unused-vars */
import React from "react";
import "./LoginSignup.css";
import { Link } from "react-router-dom";

export default function LoginSignup() {
  // Signup form
  const [userCreate, setUserCreate] = React.useState(false);
  const [formComplete, setFormComplete] = React.useState(false);
  const [signupMessage , setSignupMessage] = React.useState("");

  const signupNameCont = React.useRef(null);
  const signupEmailCont = React.useRef(null);
  const signupPassCont = React.useRef(null);

  function handleCreate(e) {
    e.preventDefault();
    async function postJSON() {
      try {
        const response = await fetch("http://localhost:8000/users",{
          method:"post",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "signupName": `${signupNameCont.current.value}`,
            "signupEmail": `${signupEmailCont.current.value}`,
            "signupPassword": `${signupPassCont.current.value}`,
          }),
        });
        const result = await response.json();
        setSignupMessage(result.message);
        console.log(result.message);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    if(!signupNameCont.current.value || !signupEmailCont.current.value || !signupPassCont.current.value){
      setFormComplete(false);
      setUserCreate(true);
    }
    else{
      postJSON();
      setFormComplete(true);
      setUserCreate(true)
    }
    signupNameCont.current.value="";
    signupEmailCont.current.value="";
    signupPassCont.current.value="";
  }

  // Login form
  const [userLogin, setUserLogin] = React.useState(false);
  const [loginFormComplete, setloginFormComplete] = React.useState(false);
  const [loginMessage , setLoginMessage] = React.useState("");

  const loginNameCont = React.useRef(null);
  const loginPassCont = React.useRef(null);

  function handleLogin(e) {
    e.preventDefault();
    async function postJSON() {
      try {
        const response = await fetch("http://localhost:8000/usersLogin",{
          method:"post",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "Name": `${loginNameCont.current.value}`,
            "Password": `${loginPassCont.current.value}`,
          }),
        });
        const result = await response.json();
        setLoginMessage(result.message);
        console.log(result);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    if(!loginNameCont.current.value || !loginPassCont.current.value){
      setloginFormComplete(false);
      setUserLogin(true);
    }
    else{
      setUserLogin(true);
      setloginFormComplete(true);
      postJSON();
    }
  }

  return (
    <>
      <div className="outer-line">
        <div className="inner-line">
          <form >
            <div className="login-main-box pt-2 pb-2">
              <div className="login-1 mt-7">
                <img src="./vector-login-sign-icon.png" alt="" width="40px" />
                <h2 className="text-2xl font-semibold mt-2 text--shadow">
                  Welcome!
                </h2>
                <h4 className=" font-normal text-gray-800 mt-1">
                  Sign in to your account
                </h4>
                <div>
                  <p
                    style={{
                      color: "red",
                      textShadow: "0 0 1px red,0 0 2px red",
                    }}
                  >
                    {userLogin
                      ? loginFormComplete
                        ? `${loginMessage}`
                        : "Please fill all details"
                      : ""}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-1 ">
                <div className="flex flex-col pl-4">
                  <label htmlFor="Name" className="font-semibold">
                    Name{" "}
                    <span className=" inline-block mb-2">
                      <img src="./star.png" width="6px" />
                    </span>
                  </label>
                  <div className="input-box">
                    <input
                      type="text"
                      name="Name"
                      className="mt-2 p-2 w-80"
                      ref={loginNameCont}
                      required
                    />
                    <img
                      src="./user.png"
                      alt=""
                      style={{ height: "27px", alignSelf: "center" }}
                    />
                  </div>
                </div>
                <div className="flex flex-col pl-4 mt-3">
                  <label htmlFor="Password" className="font-semibold ">
                    Password{" "}
                    <span className=" inline-block mb-2">
                      <img src="./star.png" width="6px" />
                    </span>
                  </label>
                  <div className="input-box">
                    <input
                      type="password"
                      name="Password"
                      className="mt-2 p-2 w-80"
                      ref={loginPassCont}
                      required
                    />
                    <img
                      src="./lock.png"
                      alt=""
                      style={{ height: "27px", alignSelf: "center" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex mt-5 pl-1 pr-1 justify-evenly"
                style={{ gap: "4.2rem" }}
              >
                <div>
                  <input type="checkbox" name="" id="" /> remember me?
                </div>
                <div>
                  <Link to="/forgotPassword">
                    <span style={{ color: "#405cf5" }}>forgot password?</span>
                  </Link>
                </div>
              </div>
              <div className="mt-3 flex justify-start pl-4 pb-2">
                <button
                  className="button-9"
                  role="button"
                  onClick={handleLogin}
                >
                  Login
                  <span className="text-xl ml-1">→</span>
                </button>
              </div>
            </div>
          </form>

          <form>
            <div className="signup-box">
              <div className="login-1">
                <img
                  src="./user-signup.png"
                  alt=""
                  width="40px"
                  className="mt-7"
                />
                <h2 className="text-2xl font-semibold mt-2 text--shadow">
                  Create account!
                </h2>
                <div>
                  <p
                    style={{
                      color: "red",
                      textShadow: "0 0 1px red,0 0 2px red",
                    }}
                  >
                    {userCreate
                      ? formComplete
                        ? `${signupMessage}`
                        : "Please fill all details"
                      : ""}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-1 ">
                <div className="flex flex-col pl-4">
                  <label
                    htmlFor="signupName"
                    className="font-semibold text--shadow"
                  >
                    Name{" "}
                    <span className=" inline-block mb-2">
                      <img src="./star.png" width="6px" />
                    </span>
                  </label>
                  <div className="input-box">
                    <input
                      type="text"
                      name="signupName"
                      className="mt-2 p-2 w-80"
                      ref={signupNameCont}
                      required
                    />
                    <img
                      src="./user.png"
                      alt=""
                      style={{ height: "27px", alignSelf: "center" }}
                    />
                  </div>
                </div>
                <div className="flex flex-col pl-4 mt-3">
                  <label
                    htmlFor="signupEmail"
                    className="font-semibold text--shadow"
                  >
                    E-mail{" "}
                    <span className=" inline-block mb-2">
                      <img src="./star.png" width="6px" />
                    </span>
                  </label>
                  <div className="input-box">
                    <input
                      type="email"
                      name="signupEmail"
                      className="mt-2 p-2 w-80"
                      ref={signupEmailCont}
                      required
                    />
                    <img
                      src="./mail.png"
                      alt=""
                      style={{ height: "22px", alignSelf: "center" }}
                    />
                  </div>
                </div>
                <div className="flex flex-col pl-4 mt-3">
                  <label
                    htmlFor="signupPassword"
                    className="font-semibold text--shadow"
                  >
                    Password{" "}
                    <span className=" inline-block mb-2">
                      <img src="./star.png" width="6px" />
                    </span>
                  </label>
                  <div className="input-box">
                    <input
                      type="password"
                      name="signupPassword"
                      className="mt-2 p-2 w-80"
                      ref={signupPassCont}
                      required
                    />
                    <img
                      src="./lock.png"
                      alt=""
                      style={{ height: "27px", alignSelf: "center" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="mt-3 pb-4 flex justify-start pl-4"
                style={{ borderBottom: "2px solid grey" }}
              >
                <button
                  className="button-9"
                  role="button"
                  onClick={handleCreate}
                >
                  Create
                  <span className="text-xl ml-1">→</span>
                </button>
              </div>

              <div className="signup-apps mt-2 pb-4">
                <div>
                  <p>Or create account using social meida!</p>
                </div>
                <div className="mt-2">
                  <img src="./apps.png" alt="" width="80px" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
