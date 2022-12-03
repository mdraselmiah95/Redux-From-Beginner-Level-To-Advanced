import React, { useState } from "react";

const ShortForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const userInfo = {
      firstName,
      lastName,
      email,
      password,
    };
    console.log(userInfo);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onBlur={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onBlur={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onBlur={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onBlur={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ShortForm;
