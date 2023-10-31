import React, { useState } from 'react';
// import { useDispatch } from 'react-redux'
// import { createGoal } from '../features/goals/goalSlice'
import './visa.css';

const VisaCard = () => {
    const [cardNumber, setCardNumber] = useState("################");
    const [holderName, setHolderName] = useState("FULL NAME");
    const [month, setMonth] = useState("MM");
    const [year, setYear] = useState("YY");
    const [cvv, setCVV] = useState("");
    const [back, setBack] = useState(false);

    // const dispatch = useDispatch()
    let cards = JSON.parse(localStorage.getItem('cards')) || [];
    const onSubmit = (e) => {
      e.preventDefault();
      const newCard = { cardNumber, holderName, month, year, cvv};
      localStorage.setItem('cards', JSON.stringify([...cards, newCard]));

    //   dispatch(createGoal({ cardNumber, holderName, month, year, cvv}))

      setCardNumber('')
      setHolderName('')
      setMonth('')
      setYear('')
      setCVV('')
      alert("Card Added Successfully");
      window.location.reload();
    }

    const cardBack = () => {
        setBack(true);
    };

    const cardFront = () => {
        setBack(false);
    };

    const complete =
        cardNumber !== '' && holderName !== '' && month !== 'MM' && year !== 'YY' && cvv !== '';

    return (
        <div className="container">
            <div className="card-container">
                <div style={!back ? {} : { display: 'none' }} className="front">
                    <img className="visa-logo" src="visa.png" alt="" />
                    <div className="image">
                        <img src="chip.png" alt="" />

                    </div>
                    <div className="card-number-box">{cardNumber}</div>
                    <div className="flexbox">
                        <div className="box">
                            <span>card holder</span>
                            <div className="card-holder-name">{holderName}</div>
                        </div>
                        <div className="box">
                            <span>expires</span>
                            <div className="expiration">
                                <span className="exp-month">{month}/</span>
                                <span className="exp-year">{year}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={back ? {} : { display: 'none' }} className="back">
                    <div className="stripe"></div>
                    <div className="box">
                        <span>cvv</span>
                        <div className="cvv-box">{cvv}</div>
                        <img src="visa.png" alt="" />
                    </div>
                </div>
            </div>
            <form action="">
                <div onClick={cardFront} className="inputBox">
                    <span>card number</span>
                    <input
                        value={cardNumber}
                        type="number"
                        maxLength="16"
                        className="card-number-input"
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                </div>
                <div onClick={cardFront} className="inputBox">
                    <span>card holder</span>
                    <input
                        value={holderName}
                        type="text"
                        className="card-holder-input"
                        onChange={(e) => setHolderName(e.target.value)}
                    />
                </div>
                <div className="flexbox">
                    <div onClick={cardFront} className="inputBox">
                        <span>expiration mm</span>
                        <select
                            value={month}
                            name=""
                            id=""
                            className="month-input"
                            onChange={(e) => setMonth(e.target.value)}
                        >
                            <option value="month" selected disabled>month</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                    <div onClick={cardFront} className="inputBox">
                        <span>expiration yy</span>
                        <select
                            value={year}
                            name=""
                            id=""
                            className="year-input"
                            onChange={(e) => setYear(e.target.value)}
                        >
                            <option value="year" selected disabled>year</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                        </select>
                    </div>
                    <div className="inputBox">
                        <span>cvv</span>
                        <input
                            onClick={cardBack}
                            value={cvv}
                            type="text"
                            maxLength="4"
                            className="cvv-input"
                            onChange={(e) => setCVV(e.target.value)}
                        />
                    </div>
                </div>
                <button onClick={onSubmit} disabled={!complete} className="submit-btn">
                    ADD
                </button>
            </form>
        </div>
    );
};

export default VisaCard;
