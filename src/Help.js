
import React, { useState } from "react";

const Help = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <h6>Pick an appropriate slot</h6><br/>
      <input
        name="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      /><br/><br/><br/>
      <Data date={date} />
    </div>
  );
};

export default Help;

const Data = ({ date }) => {
  return (
    <div>
      <h2>Showing slots for: {date.toString()}</h2>
    </div>
  );
};
