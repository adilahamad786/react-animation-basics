import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  state = {
    modalIsOpen : false
  };

  showModal() {
    this.setState({ modalIsOpen : true});
  };

  showModal = this.showModal.bind(this);

  closeModal() {
    this.setState({ modalIsOpen : false});
  };

  closeModal = this.closeModal.bind(this);

  render() {

    return (
      <div className="App">
        <h1>React Animations</h1>
        { this.state.modalIsOpen && <Modal show={this.state.modalIsOpen} closed={this.closeModal} />}
        { this.state.modalIsOpen && <Backdrop show={this.state.modalIsOpen} />}
        <button className="Button" onClick={this.showModal} >Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
