import React, { useState } from 'react';
import './signup.css'; // Make sure to import your CSS file

const SignupForm = () => {
  const [current, setCurrent] = useState(1);

  const handleNext = () => {
    if (current < 4) {
      setCurrent(current + 1);
    }
  };

  const handlePrev = () => {
    if (current > 1) {
      setCurrent(current - 1);
    }
  };

  const handleSubmit = () => {
    alert("Your Form Successfully Signed up");
    setCurrent(1);
  };

  return (
    <div className="container">
      <header>Signup Form</header>
      <div className="progress-bar">
        <div className={`step ${current >= 1 ? 'active' : ''}`}>
          <p>Name</p>
          <div className={`bullet ${current >= 1 ? 'active' : ''}`}><span>1</span></div>
          <div className={`check ${current >= 1 ? 'active' : ''}`}></div>
        </div>
        <div className={`step ${current >= 2 ? 'active' : ''}`}>
          <p>Contact</p>
          <div className={`bullet ${current >= 2 ? 'active' : ''}`}><span>2</span></div>
          <div className={`check ${current >= 2 ? 'active' : ''}`}></div>
        </div>
        <div className={`step ${current >= 3 ? 'active' : ''}`}>
          <p>Birth</p>
          <div className={`bullet ${current >= 3 ? 'active' : ''}`}><span>3</span></div>
          <div className={`check ${current >= 3 ? 'active' : ''}`}></div>
        </div>
        <div className={`step ${current >= 4 ? 'active' : ''}`}>
          <p>Submit</p>
          <div className={`bullet ${current >= 4 ? 'active' : ''}`}><span>4</span></div>
          <div className={`check ${current >= 4 ? 'active' : ''}`}></div>
        </div>
      </div>
      <div className="form-outer">
        <form>
          <div className="page slide-page" style={{ marginLeft: `-${(current - 1) * 25}%` }}>
            <div className="title">Basic Info:</div>
            <div className="field">
              <div className="label">First Name</div>
              <input type="text" />
            </div>
            <div className="field">
              <div className="label">Last Name</div>
              <input type="text" />
            </div>
            <div className="field">
              <button className="firstNext next" onClick={handleNext}>Next</button>
            </div>
          </div>
          <div className="page">
            <div className="title">Contact Info:</div>
            <div className="field">
              <div className="label">Email Address</div>
              <input type="text" />
            </div>
            <div className="field">
              <div className="label">Phone Number</div>
              <input type="Number" />
            </div>
            <div className="field btns">
              <button className="prev-1 prev" onClick={handlePrev}>Previous</button>
              <button className="next-1 next" onClick={handleNext}>Next</button>
            </div>
          </div>
          <div className="page">
            <div className="title">Date of Birth:</div>
            <div className="field">
              <div className="label">Date</div>
              <input type="text" />
            </div>
            <div className="field">
              <div className="label">Gender</div>
              <select>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="field btns">
              <button className="prev-2 prev" onClick={handlePrev}>Previous</button>
              <button className="next-2 next" onClick={handleNext}>Next</button>
            </div>
          </div>
          <div className="page">
            <div className="title">Login Details:</div>
            <div className="field">
              <div className="label">Username</div>
              <input type="text" />
            </div>
            <div className="field">
              <div className="label">Password</div>
              <input type="password" />
            </div>
            <div className="field btns">
              <button className="prev-3 prev" onClick={handlePrev}>Previous</button>
              <button className="submit" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
