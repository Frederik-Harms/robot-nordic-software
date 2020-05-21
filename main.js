const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');

// EVENT LISTENERS
date_picker_element.addEventListener('click', toggleDatePicker);

//FUNKTIONER
function toggleDatePicker (e) {
  console.log(e.path);

  if (!checkEventPathForClass(e.path, 'dates')) {
      dates_element.classList.toggle('active'); //ved klik på dato, skal en blok komme frem - det gør den ikke??
  }
}

//HJÆLPE FUNKTIONER
function checkEventPathForClass (path, selector) { // vi tjekker "event path", så denne kode registrer hvor vi klikker, og udfører et "event" udfra vores klik
  for (let i = 0; i < path.lenght; i++) { // path.lenght - betyder at når man klikker på pilene i boksen, forsvinder kassen ikke hver eneste gang 
    if (path[i].classList && path[i].classList.contains(selector)) {
      return true;
    }
  }

  return false;
}
