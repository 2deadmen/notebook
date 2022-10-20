import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();
  const [err, seterr] = useState(null);

  const [creds, setcreds] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const onchange = (e) => {
    setcreds({ ...creds, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (creds.password === creds.cpassword) {
      const response = await fetch(`http://localhost:3001/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: creds.name,
          email: creds.email,
          password: creds.password,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        localStorage.setItem("token", json.authToken);
        navigate("/");
      } else {
        seterr("wrong credentials");
      }
    } else {
      alert("passwords does not match");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="container w-50 my-2">
        <div className="form-group my-2">
          <div>
            <label className="my-2" htmlFor="name">
              Name
            </label>
            <input
              className="form-control"
              onChange={onchange}
              type="text"
              placeholder=" Enter your Name"
              id="name"
              name="name"
            />
          </div>
          <label className="my-2" htmlFor="exampleInputEmail1">
            Email address
          </label>
          <input
            onChange={onchange}
            type="email"
            className="form-control"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label className="my-2" htmlFor="exampleInputPassword1">
            Password
          </label>
          <input
            onChange={onchange}
            type="password"
            required
            minLength={5}
            className="form-control"
            name="password"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label className="my-2" htmlFor="exampleInputPassword1">
            Confirm Password
          </label>
          <input
            onChange={onchange}
            required
            minLength={5}
            type="password"
            name="cpassword"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Confirm Password"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary my-2 ">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Signup;
