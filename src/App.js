import React from "react";
import UserList from "./components/UserList";
// import PostData from "./components/PostData";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <main>
      <section className="wrapper">
        <EmployeeList />
        <UserList />
      </section>
    </main>
  );
}

export default App;
