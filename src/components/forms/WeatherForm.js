import React from 'react';
// weatherForm.js
// import selectState from './selectState';

function weatherForm() {
  return (
  <form className='needs-validation' style={{ width: '25em' }}>
    <div className='form-group'>
      <label htmlFor="inputCity">City</label>
      <input type="text" className='form-control' id="input-city"
        required />
    </div>
    <button type="submit" className='btn btn-primary' id="btn-submit-location">Get Current Conditions</button>
  </form>
  );
}

export default weatherForm;
