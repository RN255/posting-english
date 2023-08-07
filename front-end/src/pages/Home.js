import React from "react";
import List from "../components/List";
import ApiRequest from "../components/ApiRequest";

export default function Home() {
  return (
    <>
      <div className="container border mt-5 py-5">
        <div className="row">
          <div className="col">
            <p>Some information will go here</p>
            <p>But for now I will leave it blank</p>
            <p>Let's get onto that all important database</p>
            <p>Rendering the info from a database</p>
            <p>and an option for users to input information</p>
          </div>
        </div>
      </div>
      <List></List>
      <List></List>
      <List></List>
      <List></List>
      <List></List>
      <ApiRequest></ApiRequest>
    </>
  );
}
