import React, { Component } from "react";
import Wallet from "../Components/Wallet";
import { Container } from "react-bootstrap";

export class App extends Component {
  render() {
    return (
      <Container>
        <h1>Loot Check</h1>
        <hr />
        <Wallet />
      </Container>
    );
  }
}

export default App;
