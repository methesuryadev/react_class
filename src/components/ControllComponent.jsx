import React, { useState, useMemo } from "react";

function ControllComponent() {
  const [name, setName] = useState("");
  const [mno, setMno] = useState("");

  return (
    <div>
      <label>Your name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label>Mobile no:</label>
      <input
        type="text"
        value={mno}
        onChange={(e) => {
          setMno(e.target.value);
        }}
      />
      <h1>{name}</h1>
      <h1>{mno}</h1>
    </div>
  );
}

export default ControllComponent;
