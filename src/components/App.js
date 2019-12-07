import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("idan");

  const handleChangeName = () => {
    if (title === "idan") {
      setTitle("beygel");
    } else {
      setTitle("idan");
    }
  };

  return (
    <div className='App'>
      <button
        className='btn-circle'
        onClick={e => {
          handleChangeName();
        }}
      >
        change name
      </button>
      <button className='btn-circle' onClick={e => {}}>
        change name
      </button>
      {`hello world - ${title}`}
    </div>
  );
};

export default App;
