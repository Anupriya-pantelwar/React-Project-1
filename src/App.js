// import logo from "./logo.svg";
// import "./App.css";
// import { useEffect, useState } from "react";
// import User from "./UserComponet/user";
// function App() {
//   const [buttonBgColor, setButtonBgColor] = useState("red");
//   const [buttonTextColor, setButtonTextColor] = useState("white");
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (count === 1) {
//       setButtonBgColor("blue");
//     }
//     if (count === 2) {
//       setButtonBgColor("white");
//       setButtonTextColor("black");
//     }
//     if (count === 4) {
//       setButtonBgColor("red");
//       setButtonTextColor("white");

//       setCount(0);
//     }
//   }, [count]);
//   return (
//     <>
//       <div>
//         <h1>App Component Count {count}</h1>
//       </div>
//       <div
//         className="App"
//         style={{
//           backgroundColor: count === 3 ? "green" : "",
//           height: "100vh",
//           width: "100vw",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           borderRadius: "10px",
//         }}
//       >
//         <button
//           onClick={() => setCount(count + 1)}
//           style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
//         >
//           Click Me
//         </button>
//         <h1>Fetch User data</h1>
//         <User />
//       </div>
//     </>
//   );
// }

// export default App;
import React, { useEffect, useState, useRef } from "react";
import UserList from "./UserList"; // Child component

function App() {
  const [users, setUsers] = useState([]);

  const isRender = useRef(false);
  useEffect(() => {
    if (isRender.current) return (isRender.current = true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
