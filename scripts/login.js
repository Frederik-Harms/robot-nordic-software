
/*This Script allows people to enter by using a form that asks for a
UserID and Password*/
function pasuser(form) {
if (form.id.value=="test") {
if (form.pass.value=="test") {
location="../forside.html"
} else {
alert("Forkert Adgangskode")
}
} else {  alert("Forkert Brugernavn")
}
}
