const date_picker_element = dokument.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('date-picker .dates');

// EVENT LISTENERS
date_picker_element.addEventListener('click', toggleDatePicker);

//FUNCTIONS
function toggleDatePicker (e) {
  date_element.classList.toggle('active');
}
