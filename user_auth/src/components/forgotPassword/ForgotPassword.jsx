/* eslint-disable no-unused-vars */
import React from "react";
import "./ForgotPassword.css";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [userReset, setUserReset] = React.useState(false);
  const [formComplete, setFormComplete] = React.useState(false);
  const [resetMessage, setResetMessage] = React.useState("");

  const nameCont = React.useRef(null);
  const passCont = React.useRef(null);
  const confirmPasswordCont = React.useRef(null);

  function handleReset(e) {
    e.preventDefault();
    async function postJSON() {
      try {
        const response = await fetch(
          "http://localhost:8000/users/resetPassword",
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Name: `${nameCont.current.value}`,
              Password: `${passCont.current.value}`,
              ConfirmPassword: `${confirmPasswordCont.current.value}`,
            }),
          }
        );
        const result = await response.json();
        setResetMessage(result.message);
        console.log(result);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    if (
      !nameCont.current.value ||
      !passCont.current.value ||
      !confirmPasswordCont.current.value
    ) {
      setFormComplete(false);
      setUserReset(true);
    } else {
      setUserReset(true);
      setFormComplete(true);
      postJSON();
      
    }
    nameCont.current.value="";
    passCont.current.value="";
    confirmPasswordCont.current.value="";
  }

  return (
    <>
      <div className="outer-line">
        <div className="inner-line">
          <form>
            <div className="login-reset-box">
              <Link to="/">
                <img src="./exit.png" width="24px" className="exit" />
              </Link>
              <div className="login-1 mt-7 pt-5">
                <img src="./vector-login-sign-icon.png" alt="" width="40px" />
                <h2 className="text-2xl font-semibold mt-2 text--shadow">
                  Welcome Back!
                </h2>
                <h4 className=" font-normal text-gray-800 mt-1">
                  Reset your password
                </h4>
                <div>
                  <p
                    style={{
                      color: "red",
                      textShadow: "0 0 1px red,0 0 2px red",
                    }}
                  >
                    {userReset
                      ? formComplete
                        ? `${resetMessage}`
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
                      ref={nameCont}
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
                      ref={passCont}
                      required
                    />
                    <img
                      src="./lock.png"
                      alt=""
                      style={{ height: "27px", alignSelf: "center" }}
                    />
                  </div>
                </div>
                <div className="flex flex-col pl-4 mt-3">
                  <label htmlFor="confirmPassword" className="font-semibold ">
                    Confirm Password
                    <span className=" inline-block mb-2">
                      <img src="./star.png" width="6px" />
                    </span>
                  </label>
                  <div className="input-box">
                    <input
                      type="password"
                      name="ConfirmPassword"
                      className="mt-2 p-2 w-80"
                      ref={confirmPasswordCont}
                      required
                    />
                    <img
                      src="./lock.png"
                      alt=""
                      style={{ height: "27px", alignSelf: "center" }}
                    />
                  </div>
                </div>
                <div className="mt-3 flex justify-start pl-4 pb-5">
                  <button
                    className="button-9"
                    role="button"
                    onClick={handleReset}
                  >
                    Submit
                    <span className="text-xl ml-1">→</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
