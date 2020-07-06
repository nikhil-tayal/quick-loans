import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function ReferenceModal(props) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const addReferenceHandler = () => {
    let referenceObject = {
      name,
      mobile,
      email,
      permanentAddress,
      currentAddress,
    };
    props.addReferenceHandler(referenceObject);
    props.toggleModal();
  };
  return (
    <div className="reference-modal__wrapper">
      <div className="card__wrapper">
        <h4>Add Reference</h4>
        <span className="cross__button" onClick={props.toggleModal}>
          <IoIosCloseCircleOutline size={26} />
        </span>
        <div className="label mt-2">Name</div>
        <input type="text" className="value" value={name} onChange={(e) => setName(e.target.value)} />
        <div className="label mt-2">Mobile Number</div>
        <input
          type="text"
          className="value"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          maxLength={10}
        />
        <div className="label mt-2">Email *</div>
        <input type="text" className="value" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div className="label mt-2">Permanent Address</div>
        <input
          type="text"
          className="value"
          value={permanentAddress}
          onChange={(e) => setPermanentAddress(e.target.value)}
        />
        <div className="label mt-2">Current Address</div>
        <input
          type="text"
          className="value"
          value={currentAddress}
          onChange={(e) => setCurrentAddress(e.target.value)}
        />
        <button className="button__generic" onClick={addReferenceHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}
