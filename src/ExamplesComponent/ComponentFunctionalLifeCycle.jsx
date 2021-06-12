import React from "react";

function ComponentFunctionalLifeCycle(props) {
  const [name, setName] = React.useState("");
  const [input, setInput] = React.useState("");
  React.useEffect(
    function () {
      console.log(2);
      // fetchApi()
      //   console.log("from didMount + didUpdate");
      //   return function () {
      //     console.log("from unmount");
      //   };
    },
    [name, input]
  );
  console.log("from render");
  return (
    <div>
      <h1> Hello from Component Life Cycle {props.name}</h1>
      <button
        onClick={() => {
          setName("123");
        }}
      >
        ubah
      </button>
    </div>
  );
}

export default ComponentFunctionalLifeCycle;
