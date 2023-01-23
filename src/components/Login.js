import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message, error.code);
      });
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        //Register Successfully
        const user = auth.user;
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message, error.code);
      });
  };
  return (
    <div className="login">
      <Link to={"/"}>
        <img
          src="data:image/png;base64,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"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h2>Sign in with Amazon</h2>
        <form action="post">
          <input
            className="login__input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="login__input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={signIn} className="login__btn" type="submit">
            Sign In
          </button>
        </form>
        <div className="login__condition">
          <input type="checkbox" />
          <p>
            By signing-in you agree to amazon Conditions of use & sales.Please
            see our privacy notice,our cookies Notices and Our intrese-Based Ads
            Notice.
          </p>
        </div>
        <button onClick={register} className="login__btn registerbtn">
          Create Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
