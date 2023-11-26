import React from 'react';

function FilterCheckbox({ isChecked, setIsChecked }) {

  function handleChecked() {
    setIsChecked(!isChecked);
  }

  return (
      <button className={`switch-btn ${isChecked ? "switch-btn_on" : ""}`} type="button" onClick={handleChecked}></button>
  );
}

export default FilterCheckbox;
