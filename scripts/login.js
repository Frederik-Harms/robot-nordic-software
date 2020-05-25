
/*This Script allows people to enter by using a form that asks for a
UserID and Password*/
function pasuser(form) {

  //her er der brugt if else-statements, hvor brugernavnet og adgangskoden tjekkes om det er true. her er både adgangskode og brugernavn angivet til, at være 'test'. Hvis det er true, og man har indtastet de korrekte oplysninger, er der sat en location på login-knappen, som fører brugeren til forsiden.
if (form.id.value=="test") {
if (form.pass.value=="test") {
location="../forside.html"

//hvis adgangskode og eller brugernavn er falsk, kommer der en alert om, at enten brugernavn eller adgangskode er forkert, og så får man ikke lov til, at kommer ind på location.
} else {
alert("Forkert Adgangskode")
}
} else {  alert("Forkert Brugernavn")
}
}
