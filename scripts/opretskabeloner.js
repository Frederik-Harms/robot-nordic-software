// DETTE ER VORES DEFINERET CONTAINER, SOM SKAL INDEHOLDE HVILKET STEP VI ER PÅ - ALTSÅ HVOR LANGT ER VI I PROCESSEN, FOR AT VÆRE FÆRDIG. DER ER BENYTTET LET DA DET VIRKER MERE STRUKTURET, END AT BENYTTE VAR - OG DERFOR TVINGER DET EN KODE STRUKTUR.
  let currentTab = 0;
    showTab(currentTab);

// DENNE FUNKTION, DEFINERE DE FORSKELLIGE TING SOM DER SKAL SKE PÅ HVER ENKELT TAB/STEP
  function showTab(n) {

// DENNE VARIABLE BENYTTER DERFOR ET ARRAY    (document.getElementsByClassName), VED AT GENNEMSØGE HELE HTML DOKUMENTET AUTOMATISK, OG PÅ DEN MÅDE SAMLES EN LISTE (SES NEDENFOR) OVER DE UDVALGTE DELE, SOM SKAL UDFØRES I DEN KALDTE FUNKTION, ALTSÅ PÅ HVER ENKELT STEP.
  let x = document.getElementsByClassName("tab");
    x[n].style.display = "block";

//IF-ELSE BLIVER BENYTTET TIL AT HVIS N ER 0 (hvis altså feltet ikke er udfyldt på step 1), SÅ KALDER DEB FUNKTIONEN "ANULLLEREKNAP" DISPLAY NONE, HVILKET VIL SIGE AT DEN IKKE BLIVER VIST. BOOLEANS DATA  SES F.EKS HER I IF STATEMENTET, HVOR DEN VENDER TILBAGE MED VALUE TRUE ELLER FALSE.
  if (n == 0) {
    document.getElementById("ANNULLERKNAP").style.display = "none";

//OMVENDT HVIS IF STATEMENTER ER "FALSE", SÅ KALDER DEN 	FUNKTIONEN "ANULLLEREKNAP" DISPLAY "INLINE", HVILKET VIL SIGE AT KNAPPEN BLIVER VIST. DENNE KODE ER RELEVANT PÅ STEP 1, DA DET IKKE SKAL VÆRE MULIGT AT GÅ TILBAGE, DA DER PÅ FORHÅND IKKE ER UDFYLDT NOGET.
  } else {
    document.getElementById("ANNULLERKNAP").style.display = "inline";

//DETTE ER DET SAMME PRINCIP, SOM I OVERSTÅENDE EKSEMPEL. HER 	ER VALUE ALTSÅ LÆNGDEN PÅ FORM WIZARD, HVIS DETTE ER TRUE (ALLE STEPS ER UDFYLDT), SÅ BLIVER DEN VIST SOM DEN SIDSTE KNAP ALTSÅ START.
  }
  if (n == (x.length - 1)) {
    document.getElementById("VIDEREKNAP").innerHTML = "START";

//IGEN HVIS ALLE FELTERNE IKKE ER UDFYLDT ALTSÅ STATEMENTET ER FALSE, SÅ BLIVER "VIDERE" KNAPPEN VIST.
  } else {
    document.getElementById("VIDEREKNAP").innerHTML = "VIDERE";
  }

//VISER HVILKET STEP, MAN ER IGANG MED.
  fixStepIndicator(n)
}

//DER ER BENYTTET FUNCTIONS BY DECLORATION, SOM VIST NEDENFOR. ( ER DE FORSKELLIGE PARAMETRE. TEKSTEN INDENFOR { ER DET KODE DER SKAL UDFØRES.
function nextPrev(n) {

 // CONTAINERNE HER BENYTTER SIG AF ET ARRAY 		"document.getElementsByClassName". X BLIVER TILDELT TAB.
  let x = document.getElementsByClassName("tab");

  // IF-STATEMENTET FORTÆLLER HER AT HVIS DET ER SANDT AT DET SPECFIKKE FELT ER TOMT, SÅ RETURN FALSE.
  if (n == 1 && !validateForm()) return false;

  // GRUNDET RETURN FALSE SKJULER DEN, DET NÆSTE TAB (DISPLAY NONE) DA FELTERNE IKKE ER UDFYLDT, OG DERFOR KOMMER MAN IKKE VIDERE.
  x[currentTab].style.display = "none";

  // VED ENTEN AT ØGE ELLER TRÆKKE FRA "CURRENT TAB" , VIL IF STATEMENTET DERFOR VÆRE FALSE DA DET IKKE LÆNGERE = 1, SOM ER TRUE.
  currentTab = currentTab + n;

  // HVIS DET ER SANDT AT DU ER NÅET, TIL DET SIDSTE STEP SÅ KØR BLOKKEN AF KODE.
  if (currentTab >= x.length) {

// RETURN FALSE, GØR DET MULIGT AT NÅR MAN HAR TRYKKET "START", SÅ VIL MAN IKKE  KOMME VIDERE TIL NÆSTE STEP, MEN DERIMOD HVAD MAN HAR SAT SOM ACTION I SIN REGFORM I HTML´EN. I DETTE TILFÆLDE ØNSKER VI AT KOMME TIL KONTROLPANEL.
    document.getElementById("regForm").submit();
    return false;
  }

// DERIMOD HVIS IF-STATEMENTET IKKE ER TRUE, SÅ SKAL DEN GÅ VIDERE TIL NÆSTE STEP
  showTab(currentTab);
}

//HER ER DER BENYTTET ENDNU EN FUNCTIONS BY DECLORATION, SOM VIST NEDENFOR.
  function validateForm() {

// DENNE FUNKTION BLIVER BRUGT TIL AT VALIDERE DATA FRA INPUT FELTERNE. ALLE X,Y,I ER TRUE.
  let x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");

// DETTE ER ET FOR LOOP, HVOR "I" BLIVER TILDELT 0. HVIS "I" ER MINDRE END CURRENT TAB LENGTH (ALTSÅ INGENTING), SÅ SKAL DEN FORTAGE SIG:
  for (i = 0; i < y.length; i++) {

 // SÅ BENYTTER DEN SIG AF DETTE IF STATEMENT, HVOR SAMMENLIGNINGS OPRETOREN BESKRIVER AT "CURRENT TAB" ER DET SAMMEN SOM INGENTING (EMPTY).
    if (y[i].value == "") {

      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  let i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}
