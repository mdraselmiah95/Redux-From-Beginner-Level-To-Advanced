import React, { useState } from "react";

const ShortForm = () => {
  const [firstName, setFirstName] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(firstName);
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
            onBlur={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onBlur={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onBlur={(e) => setFirstName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ShortForm;
