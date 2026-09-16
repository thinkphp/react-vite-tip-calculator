import { useState } from 'react';
import './App.css';

export default function App() {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState(15);
  const [customTip, setCustomTip] = useState('');
  const [people, setPeople] = useState(1);

  // Determină procentul activ (preset sau custom)
  const activeTip = customTip !== '' ? Number(customTip) : Number(tipPercentage);
  const numBill = Number(bill) || 0;
  const numPeople = Number(people) > 0 ? Number(people) : 1;

  // Calcule derivate
  const tipAmountTotal = (numBill * activeTip) / 100;
  const tipPerPerson = tipAmountTotal / numPeople;
  const totalPerPerson = (numBill + tipAmountTotal) / numPeople;

  const handlePresetTip = (value) => {
    setTipPercentage(value);
    setCustomTip('');
  };

  const handleCustomTipChange = (e) => {
    setCustomTip(e.target.value);
  };

  const handleReset = () => {
    setBill('');
    setTipPercentage(15);
    setCustomTip('');
    setPeople(1);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>SPLI<span>TTER</span></h1>
      </header>

      <div className="card">
        {/* Secțiunea stânga: Formular intrări */}
        <div className="form-section">
          {/* Input Notă */}
          <div className="input-group">
            <label htmlFor="bill">Nota de plată</label>
            <div className="input-wrapper">
              <span className="icon">$</span>
              <input
                id="bill"
                type="number"
                placeholder="0.00"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                min="0"
                step="0.01"
              />
            </div>
          </div>

          {/* Selectare Bacșiș */}
          <div className="input-group">
            <label>Selectează bacșișul %</label>
            <div className="tip-grid">
              {[5, 10, 15, 25, 50].map((rate) => (
                <button
                  key={rate}
                  type="button"
                  className={`tip-btn ${activeTip === rate && customTip === '' ? 'active' : ''}`}
                  onClick={() => handlePresetTip(rate)}
                >
                  {rate}%
                </button>
              ))}
              <input
                type="number"
                placeholder="Altul"
                className="custom-tip-input"
                value={customTip}
                onChange={handleCustomTipChange}
                min="0"
              />
            </div>
          </div>

          {/* Input Persoane */}
          <div className="input-group">
            <div className="label-wrapper">
              <label htmlFor="people">Număr persoane</label>
              {Number(people) <= 0 && <span className="error-msg">Nu poate fi 0</span>}
            </div>
            <div className={`input-wrapper ${Number(people) <= 0 ? 'input-error' : ''}`}>
              <span className="icon">👤</span>
              <input
                id="people"
                type="number"
                placeholder="1"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                min="1"
              />
            </div>
          </div>
        </div>

        {/* Secțiunea dreaptă: Afișare rezultate */}
        <div className="result-section">
          <div className="result-rows">
            <div className="result-row">
              <div className="result-label">
                <p className="title">Bacșiș</p>
                <p className="subtitle">/ persoană</p>
              </div>
              <div className="amount">${tipPerPerson.toFixed(2)}</div>
            </div>

            <div className="result-row">
              <div className="result-label">
                <p className="title">Total</p>
                <p className="subtitle">/ persoană</p>
              </div>
              <div className="amount">${totalPerPerson.toFixed(2)}</div>
            </div>
          </div>

          <button
            className="reset-btn"
            onClick={handleReset}
            disabled={!bill && people === 1 && customTip === '' && tipPercentage === 15}
          >
            RESETARE
          </button>
        </div>
      </div>
    </div>
  );
}
