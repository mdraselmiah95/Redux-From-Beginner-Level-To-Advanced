import React, { useState } from "react";

const ShortForm = () => {
  const [firstName, setFirstName] = useState("");
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ShortForm;
