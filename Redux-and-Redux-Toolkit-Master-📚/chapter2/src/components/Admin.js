import React from "react";
import { useGetAccountsQuery } from "../api/adminSlice";

const Admin = () => {
  const { isError, isLoading, data, error } = useGetAccountsQuery();

  return (
    <div className="admin">
      <h2>This is Admin {isLoading ? <p>Loading...</p> : ""}</h2>
      {data &&
        data.map((account) => (
          <p>
            {account.id} : {account.amount}
          </p>
        ))}
    </div>
  );
};

export default Admin;
