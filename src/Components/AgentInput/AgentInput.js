import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import TextareaAutosize from "react-textarea-autosize";
import Modal from "react-modal";
import ReferenceModal from "./ReferenceModal";
import Header from "../Header/Header";
import fire from "../../Configs/firebase.config";
import moment from "moment";
const options = [
  { value: "CASH", label: "CASH" },
  { value: "BANK", label: "BANK" },
  { value: "ONLINE", label: "ONLINE" },
];
export default function AgentInput(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [referenceCardData, setReferenceCardData] = useState([]);
  const [mobileModel, setMobileModel] = useState("");
  const [mobileAmount, setMobileAmount] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState("");
  const [safePay, setSafePay] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [firstInstallment, setFirstInstallment] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const addReferenceHandler = (data) => {
    setReferenceCardData((oldArray) => [...oldArray, data]);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const submitApplication = () => {
    let loanDetails = {
      name,
      mobile,
      userAddress,
      mobileModel,
      mobileAmount,
      downPayment,
      tenure,
      emi,
      safePay,
      dueDate: moment(dueDate).format("DD/MM/YYYY"),
      firstInstallment: moment(firstInstallment).format("DD/MM/YYYY"),
      paymentMode,
      companyName,
      contactNum,
      companyAddress,
      referenceCardData,
      date: moment().format("DD/MM/YYYY"),
      applicationNumber: moment().format("YYYYMMDDHHmms"),
    };
    fire
      .database()
      .ref("message")
      .push(loanDetails)
      .then((data) => {
        console.log(data);
        if (data) {
          sessionStorage.setItem("loanDetails", JSON.stringify(loanDetails));
          props.history.push("/preview-application");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  console.log(paymentMode);
  return (
    <div className="agent-input__wrapper container">
      <Header {...props}/>
      <h1>Loan Summary</h1>
      <div className="agent-details">
        <div className="agent-name">Mr. Aman Gupta</div>
        <div className="agent-address">T-300/2 street number 7 gautampuri delhi 110078</div>

        {/* Loan Details */}
        <div className="card__wrapper">
          <h4>Loan Details</h4>
          <div className="row ">
            <div className="col-md-4 col-sm-12">
              <div className="label">Name</div>
              <input type="text" className="value" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="label">Mobile Number</div>
              <input
                type="text"
                className="value"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                maxLength={10}
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="label">Address</div>
              <input
                type="text"
                className="value"
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="label">Mobile Model</div>
              <input
                type="text"
                className="value"
                value={mobileModel}
                onChange={(e) => setMobileModel(e.target.value)}
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="label">Mobile Amount</div>
              <input
                type="text"
                className="value"
                value={mobileAmount}
                onChange={(e) => setMobileAmount(e.target.value)}
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="label">Down Payment</div>
              <input
                type="text"
                className="value"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="label">Tenure</div>
              <input type="text" className="value" value={tenure} onChange={(e) => setTenure(e.target.value)} />
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="label">EMI</div>
              <input type="text" className="value" value={emi} onChange={(e) => setEmi(e.target.value)} />
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="label">Safe Pay</div>
              <input type="text" className="value" value={safePay} onChange={(e) => setSafePay(e.target.value)} />
            </div>
          </div>
        </div>
        {/* other Details */}
        <div className="card__wrapper">
          <h4>Other Details</h4>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="label">Due Date</div>
              <DatePicker selected={dueDate} onChange={(date) => setDueDate(date)} />
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="label">First Installment</div>
              <DatePicker selected={firstInstallment} onChange={(date) => setFirstInstallment(date)} />
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="label">Mode Of Payment</div>
              <Select
                options={options}
                placeholder={"Search By"}
                // value={paymentMode}
                onChange={(e)=>setPaymentMode(e.value)}
              />
            </div>
          </div>
        </div>
        <div className="card__wrapper">
          <h4>Reference Details</h4>
          <div className="add-button" onClick={() => setIsModalOpen(true)}>
            Add Reference
          </div>
          <div className="row no-gutters">
            {referenceCardData.length ? (
              referenceCardData.map((referenceCard, index) => {
                return (
                  <div className="col-md-4 col-sm-12 pr-2 " key={`reference-card-${index}`}>
                    <div className="card__wrapper p-3 pb-4">
                      <h4>Reference Details {index + 1}</h4>
                      <div className="label">Name</div>
                      <div className="value">{referenceCard.name}</div>
                      <div className="label">Mobile</div>
                      <div className="value">{referenceCard.mobile}</div>
                      <div className="label">Email</div>
                      <div className="value">{referenceCard.email}</div>
                      <div className="label">Permanent Address</div>
                      <div className="value">{referenceCard.permanentAddress}</div>
                      <div className="label">Current Address</div>
                      <div className="value">{referenceCard.currentAddress}</div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>Please Add at least one Reference </div>
            )}
          </div>
          <Modal isOpen={isModalOpen} contentLabel="Example Modal" className="modal-box">
            <ReferenceModal addReferenceHandler={addReferenceHandler} toggleModal={toggleModal} />
          </Modal>
        </div>

        {/* Reference Details */}
        <div className="card__wrapper">
          <h4>Job Details</h4>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="label">Company Name</div>
              <input
                type="text"
                className="value"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="label">Contact Number</div>
              <input
                type="text"
                className="value"
                value={contactNum}
                onChange={(e) => setContactNum(e.target.value)}
                maxLength={10}
              />
            </div>
            <div className="col-md-12">
              <div className="label">Address</div>
              <TextareaAutosize
                className="value"
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button className="button__generic px-5 py-3 mb-5" onClick={submitApplication}>
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
}
