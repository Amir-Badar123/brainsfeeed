import React, { Component } from "react";
import { Modal } from "react-bootstrap";
class LearMore extends Component {
  state = {};
  render() {
    return (
      <div>
        <Modal
          show={this.props.showModal}
          id="lineModal"
          size="md"
          onHide={this.props.hideModal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <div> Hello </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default LearMore;
