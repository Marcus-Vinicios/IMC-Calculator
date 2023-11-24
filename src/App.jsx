import { useState } from 'react'

import { data } from "./data/data"
import ImcCalculator from './components/Calculator/ImcCalculator'

import './App.css'
import TableIMC from './components/TableIMC/TableIMC';

function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!weight || !height) { return };

    weight = +weight.replace(",", ".");
    height = +height.replace(",", ".");

    const imc = (weight / (height * height)).toFixed(1)

    console.log(weight, height);
    console.log(`IMC: ${imc}`);

    setImc(imc);

    data.forEach((item) => {
      if (imc >= item.min && imc <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    })

    if (!info) { return }
  }

  const resetCalc = (e) => {
    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
  }

  return (
    <div className='container'>
      {!imc
        ?
        <ImcCalculator calcImc={calcImc} />
        :
        <TableIMC
          data={data}
          imc={imc}
          info={info}
          infoClass={infoClass}
          resetCalc={resetCalc}
        />
      }
    </div>
  )
}

export default App
