import react, { Component } from "react";
import Buttons from "./Button";
import "../styles/EditModal.css";

class DeleteModal extends Component {
  render() {
    const { deletes, close, del, todo } = this.props;
    const delById = (id) => {
      del(id);
    };
    //   const { delete } = this.props;
    if (deletes) {
      return (
        <div className="modal-container">
          <div className="modal-box">
            <h1>yakin nih mau di hapus ?</h1>
            <div className="btn-group">
              <Buttons text="Ya" variant="btn-success" action={() => delById(todo.id)} />
              <Buttons text="tidak" variant="btn-warning" action={close} />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default DeleteModal;
