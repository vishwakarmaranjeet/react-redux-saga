import React from "react";
import UserList from "./components/UserList";
import PostData from "./components/PostData";

function App() {
  return (
    <main>
      <section className="wrapper">
        <PostData />
        <UserList />
      </section>
    </main>
  );
}

export default App;
