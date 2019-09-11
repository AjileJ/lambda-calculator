import React from "react";

export const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
     
      <div className = "opebtncon">
      <button className = "opebtn">{props.operators.value}</button>
      </div>
      
    </>
  );
};
// export default OperatorButton
