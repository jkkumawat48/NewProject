import React from "react";
import List from "./NewProject/List";
import Footer from "./NewProject/Footer";
import Routing from "./Routing";

export default function Home() {
  let token = localStorage.getItem("userLogin");
  if (!token) {
    return;
  }
  return (
    <div>
      <List />
      <Routing />
      <Footer />
    </div>
  );
}
