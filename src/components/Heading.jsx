import React from "react";
function Heading() {
  const d = new Date();
  const t = d.getHours();
  let message;
  const customStyle = {
    color: ""
  };

  if (t < 12) {
    message = "Good Morning";
    customStyle.color = "red";
  } else if (t < 18) {
    message = "Good Afternoon";
    customStyle.color = "green";
  } else {
    message = "Good Night";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {message}
    </h1>
  );
}

export default Heading;
