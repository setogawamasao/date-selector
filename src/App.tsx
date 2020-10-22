import React, { useState } from "react";

import { DateSelector } from "./DateSelector";
const App = () => {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <>
      <h1>Hello date selector</h1>
      <DateSelector startYear={2016} setDate={setDate} />
      <div>{`date : ${date?.toString()}`}</div>
      <div>{`year : ${date?.getFullYear()}`}</div>
      <div>{`month : ${date ? date.getMonth() + 1 : undefined}`}</div>
      <div>{`day : ${date?.getDate()}`}</div>
    </>
  );
};

export default App;
