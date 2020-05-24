// dette er containeren som definerer hvilket step man er på, samt hvilket step som er default-steppet, altså start-steppet. Den definerer samtidig hvor langt man er i processen ved at vise de enkelt steps. der er benyttet let i stedet for var, da det er mere struktureret.
let currentTab = 0; // Den tab (side) som man starter på,m er defineret til, at være den første tab, altså currentTab = 0

showTab(currentTab); // Denne viser hvilket tab man er på, altså den nuværende tab.


//denne funktion bestemmer, hvad der skall vises på de forskellige tabs
function showTab(n) {


// Denne let er et array, (document.getElementsByClassName), som bestemmer hvad der skal vises, ved at gå hele html'en igennem, for at finde den rigtige class eller id. På den måde samles der en liste, over de udvalgte dele, som skal udføres i den givne funktion, altså de forskellige steps.
  let x = document.getElementsByClassName("tab");
  x[n].style.display = "block";


//der bliver her brugt if-else loops til at validere, om man har skrevet noget i input felterne, for hvis man ikke har,. kan man ikke gå videre. Det sker ved, at den ændrer i tab'en til henholdsvis -display: none- hvis det ikk er true, eller -display: inline block- hvis det er true, og så går man videre


//BOOLEANS DATA  SES F.EKS HER I IF STATEMENTET, HVOR DEN VENDER TILBAGE MED VALUE TRUE ELLER FALSE.
  if (n == 0) {
    document.getElementById("prevBtnskabelon").style.display = "none";
  } else {
    document.getElementById("prevBtnskabelon").style.display = "inline";
  }

  //Her gællder det samme, som i ovenstående eksempel, her er der bare defineret en længde på form-wizarden, så den ved, at når man er kommet to steps igennem, så viser den knappen "start" i stedet for ""videre".
  if (n == (x.length - 2)) {
    document.getElementById("nextBtnskabelon").innerHTML = "START";
  } else {
    document.getElementById("nextBtnskabelon").innerHTML = "VIDERE";
  }

//denne viser det korrekte step og tab man er på
  fixStepIndicator(n)
}

//nedenfor, er der brugt function by declarations. altså hvilken kode som skal vises inden for de forskelllige curly-brackets
function nextPrev(n) {

  // her bliver tab'en tildelt X-declaration via et array. "document.getElementsByClassName".
  let x = document.getElementsByClassName("tab");

  // hvis et inputfelt her, ikke er udfyldt, bliver den returned som false, og så får man ikke lov at gå videre
  if (n == 2 && !validateForm()) return false;

  // Derfor skjuler den samtidig her den næste tab, da ovenstående var false, og så får man ikke lov at gå videre
  x[currentTab].style.display = "none";

  // denne forøger eller trækker fra currentTab, så den bestemmer, hvilken tab man er på
  currentTab = currentTab + n;


//hvis(if) du er nået til den sidste tab, så køre den, den sidste kode
  if (currentTab >= x.length) {

// return false gør, at man ikke kommer videre til næste tab, men derimod den side man har angivet i "action" i regForm'en.  i dette tilfælde kontrolpanelet, så der lægges bare en sti hen till kontrolpanel-html'en.
    document.getElementById("regFormskabelon").submit();
    return false;
  }

//hvis if-statementet ikke er true, går den derimod videre til nsæte tab.
  showTab(currentTab);
}

//endnu en functions by declaration herunder
function validateForm() {

// denne funktion validerer, om alle dataene fra inputfelterne er true, altså X,Y,I.
  let x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");

  // DETTE ER ET FOR LOOP, HVOR "I" BLIVER TILDELT 0. HVIS "I" ER MINDRE END CURRENT TAB LENGTH (ALTSÅ INGENTING), SÅ SKAL DEN FORTAGE SIG:
  for (i = 0; i < y.length; i++) {

 // AF DETTE IF STATEMENT, HVOR SAMMENLIGNINGS OPRETOREN BESKRIVER AT "CURRENT TAB" ER DET SAMMEN SOM INGENTING (EMPTY).
    if (y[i].value == "") {

      // HVIS IF STATEMENT OPDAGER AT INPUT FELTET ER DET SAMME SOM INGENTING (EMPTY), SÅ VIL DEN BLIVE INVALID (IKKE GODKENDT).
      y[i].className += " invalid";
      // og så sætter den valid til false.
      valid = false;
    }
  }
    // HVIS IF STATEMENTET ER TRUE, SÅ VIL DEN VALIDERE, OG DERFOR VIL MAN MED SUCEESS KUN TRYKKE PÅ VIDERE.
  if (valid) {
    document.getElementsByClassName("stepp")[currentTab].className += " finish";
  }
  return valid; // denne returnere valid-resultatet.
}

function fixStepIndicator(n) {
  // denne let fjerner alle aktive steps
  let i, x = document.getElementsByClassName("stepp");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //og aktiverer her currentTab som aktiv.
  x[n].className += " active";
}
