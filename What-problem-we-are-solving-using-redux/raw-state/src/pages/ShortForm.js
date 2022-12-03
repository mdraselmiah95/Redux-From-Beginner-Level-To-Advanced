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
    <div className="h-screen w-screen flex justify-center items-center space-y-6">
      <form onSubmit={submit} className="space-y-6 shadow-md p-10">
        <div className="flex flex-col max-w-xs">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onBlur={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="flex flex-col max-w-xs">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onBlur={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="flex flex-col max-w-xs">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onBlur={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col max-w-xs">
          <label htmlFor="name">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onBlur={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-3 bg-indigo-500 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShortForm;
