import React, { Component, useState } from "react";

export default function Login() {
  const [epic, setepic] = useState("");
  const [aadhar, setaadhar] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(epic, aadhar);
    fetch("http://localhost:5000/login-voter", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        epic,
        aadhar,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "VoterRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./voterDetails";
        }
      });
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Voter Login here:</h3>

          <div className="mb-3">
            <label>Enter epic address here:</label>
            <input
              type="epic"
              className="form-control"
              placeholder="Enter epic"
              onChange={(e) => setepic(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Enter aadhar here:</label>
            <input
              type="aadhar"
              className="form-control"
              placeholder="Enter aadhar"
              onChange={(e) => setaadhar(e.target.value)}
            />
          </div>

     
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
         
        </form>
      </div>
    </div>
  );
}