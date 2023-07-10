import React from "react";

const User = ({name, address, phone}) => {
  return (
    <div className="user-card">
      <h1>{name}</h1>
      <h2>{address}</h2>
      <h3>{phone}</h3>
    </div>
  );
};

export default User;
