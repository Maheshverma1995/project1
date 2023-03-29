import React from 'react'
import { useState } from 'react';

function Contactus() {
  const [x, y] = useState(0);


 const number1 = (r) => {
  console.log(r);
    y(r.terget.value);
 }
    return (
      <div>
        <input type="number" onInput={number1}></input>
        <h1>{x}</h1>
      </div>
    )
  }

  export default Contactus
