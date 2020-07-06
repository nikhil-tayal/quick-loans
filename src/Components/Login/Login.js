import React, { useState } from "react";
import fire from "../../Configs/firebase.config";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const loginHandler = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        if (data) {
          props.history.push("/dashboard");
        }
      })
      .catch(function (error) {
        setError(error.message);
        console.log(error);
      });
  };
  return (
    <div className=" login__wrapper">
      <div className="container">
        <div className="login-header">Login Page</div>
        <form onSubmit={loginHandler} className="form-container">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          {error ? <div className="text-danger">{error}</div> : null}
          <button className="button__generic py-2 px-5" onClick={loginHandler}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
