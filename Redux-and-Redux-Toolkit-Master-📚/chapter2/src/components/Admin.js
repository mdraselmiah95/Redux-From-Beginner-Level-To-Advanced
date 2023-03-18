import React from "react";
import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountsQuery,
  useUpdateAccountMutation,
} from "../api/adminSlice";

const Admin = () => {
  const { isLoading, data, isSuccess } = useGetAccountsQuery();
  const [addAccount] = useAddAccountMutation();
  const [deleteAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();

  return (
    <div className="admin">
      <h2>This is Admin</h2>
      {isLoading ? <p>Loading...</p> : null}
      {isSuccess &&
        data &&
        data.map((account) => (
          <p key={account.id}>
            {account.id} : {account.amount}
            <button onClick={() => deleteAccount(account.id)}>DELETE</button>
            <button
              onClick={() => updateAccount({ id: account.id, amount: 202 })}
            >
              UPDATE
            </button>
          </p>
        ))}
      <button onClick={() => addAccount(101, data.length + 1)}>ADD</button>
    </div>
  );
};

export default Admin;
