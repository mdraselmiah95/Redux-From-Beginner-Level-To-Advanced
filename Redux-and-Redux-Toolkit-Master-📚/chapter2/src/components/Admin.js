import React from "react";
import { useAddAccountMutation, useGetAccountsQuery } from "../api/adminSlice";

const Admin = () => {
  const { isError, isLoading, data, error } = useGetAccountsQuery();
  const [addAccount, response] = useAddAccountMutation();

  return (
    <div className="admin">
      <h2>This is Admin {isLoading ? <p>Loading...</p> : ""}</h2>
      {data &&
        data.map((account) => (
          <p key={account.id}>
            {account.id} : {account.amount}
          </p>
        ))}
      <button onClick={() => addAccount(101, data.length + 1)}>ADD</button>
    </div>
  );
};
// top if
export default Admin;
