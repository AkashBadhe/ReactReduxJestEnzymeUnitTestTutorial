import React, { Component } from "react";
import { connect } from "react-redux";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { deposite, withdraw } from "../Actions/Balance";
export class Wallet extends Component {
  constructor() {
    super();
    this.state = { balance: 0 };
  }

  updateInput = e => {
    let value = parseFloat(e.target.value);
    this.setState({
      [e.target.name]: value
    });
  };

  depositeHandler = () => {
    this.props.deposite(this.state.balance);
  };

  withdrawHandler = () => {
    this.props.withdraw(this.state.balance);
  };

  render() {
    return (
      <div>
        <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            name={"balance"}
            onChange={this.updateInput}
            className="input-amount"
            aria-label="Amount (to the nearest dollar)"
          />
        </InputGroup>
        <div className="float-right">
          <Button
            onClick={this.withdrawHandler}
            className="btn-withdraw"
            variant="danger"
            type="submit"
          >
            Withdraw
          </Button>
          <Button
            onClick={this.depositeHandler}
            className="ml-3 btn-deposite"
            variant="success"
            type="submit"
          >
            Deposite
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      balance: state
    };
  },
  {
    withdraw,
    deposite
  }
)(Wallet);
