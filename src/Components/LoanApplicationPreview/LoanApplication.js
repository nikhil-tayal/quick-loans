import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
export default function LoanApplication(props) {
  const [loanDetails, setLoanDetails] = useState("");
  useEffect(() => {
    let loanDetails = JSON.parse(sessionStorage.getItem("loanDetails"));
    setLoanDetails(loanDetails);
  }, []);
  return (
    <div className="container">
      <Header {...props}/>
      <div className="loan-application__wrapper ">
        <h2>Loan Summary</h2>
        <div className="print__button" onClick={() => window.print()}>
          Print Application
        </div>
        <div className="font-weight-bold font-italic mt-4">{loanDetails.name}</div>
        <p>{loanDetails.userAddress}</p>
        <p className="text-info">
          Welcome to the Quick Loans. Congratulations! Your Loan of {loanDetails.mobileAmount - loanDetails.downPayment}{" "}
          is approved on <span className="font-weight-bold">{loanDetails.date}</span>
        </p>
        <div className="row">
          <div className="col-md-6 col-6">
            <div className="header d-flex justify-content-between">
              <p>Product</p>
              <p>Model</p>
              <p>Price</p>
            </div>
            <div className="value d-flex justify-content-between my-3">
              <p>Mobile Phones</p>
              <p>{loanDetails.mobileModel}</p>
              <p>{loanDetails.mobileAmount}</p>
            </div>
            <div className="header">LOAN DETAILS</div>
            <div className="value d-flex justify-content-between my-3">
              <div>
                <div>(A) Total Product Price</div>
                <div>(B) Down Payment</div>
                <div>(c) Loan Amount(A-B)</div>
                <div>(D) Processing Fee</div>
                <div>(E) Pay Now(B+D)</div>
                <div>(F) Flat Interest Rate</div>
                <div>(G) Interest Amount</div>
                <div>(H) EMI</div>
                <div>(I) Tenure</div>
                <div>(J) Safe Pay Fee</div>
                <div className="font-weight-bold">(K) Monthly Installment (H+J)</div>
              </div>
              <div>
                <div>{loanDetails.mobileAmount}</div>
                <div>{loanDetails.downPayment}</div>
                <div>{loanDetails.mobileAmount - loanDetails.downPayment}</div>
                <div>0</div>
                <div>{loanDetails.downPayment}</div>
                <div>0%</div>
                <div>0</div>
                <div>{loanDetails.emi}</div>
                <div>{loanDetails.tenure}</div>
                <div>{loanDetails.safePay}</div>
                <div>{loanDetails.emi + loanDetails.safePay}</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-6">
            <div className="header">REFERENCE DETAILS</div>
            {loanDetails.referenceCardData?.map((userReference, index) => (
              <div className="reference__wrapper my-3" key={`reference-${index}`}>
                <div className="font-weight-bold">Reference {index + 1}</div>
                <div className="d-flex justify-content-between">
                  <div>
                    <div>Name</div>
                    <div>Mobile Number</div>
                    <div>Email</div>
                    <div>Current Address</div>
                    <div>Permanent Address</div>
                  </div>
                  <div>
                    <div>{userReference.name}</div>
                    <div>{userReference.mobile}</div>
                    <div>{userReference.email}</div>
                    <div>{userReference.currentAddress}</div>
                    <div>{userReference.permanentAddress}</div>
                  </div>
                </div>
              </div>
            ))}
            <div className="header">OTHER DETAILS</div>
            <div className="d-flex justify-content-between my-3">
              <div>
                <div className="font-weight-bold">*Recommended Payment Date</div>
                <div>Due Date</div>
                <div>First Monthly Installment</div>
                <div>Term Of Loan</div>
                <div>Mode Of Payment</div>
              </div>
              <div>
                <div className="font-weight-bold">20th of every month</div>
                <div>{loanDetails.dueDate}</div>
                <div>{loanDetails.firstInstallment}</div>
                <div>{loanDetails.tenure}</div>
                <div>{loanDetails.paymentMode}</div>
              </div>
            </div>
            <p className="text-warning mb-3">Ensure Sufficient Balance in your bank for smooth experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
