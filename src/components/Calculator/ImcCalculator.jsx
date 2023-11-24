import React from 'react'
import "./ImcCalculator.css"

const ImcCalculator = () => {
  return (
    <div>
      <h2>Calculadore de IMC</h2>
      <form id='imc-form'>
        <div className='form-inputs'>
          <div className='form-control'>
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              name='height'
              id='height'
              placeholder='Exeplo 1,75'
            />
          </div>
          <div className='form-control'>
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              name='weight'
              id='weight'
              placeholder='Exeplo 70,5'
            />
          </div>
        </div>
        <div className='action-control'>
          <button>Calcular</button>
          <button>Limpar</button>
        </div>
      </form>
    </div>
  )
}

export default ImcCalculator