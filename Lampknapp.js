/*

  Lightswitch del 1: Funktioner och booleaner


  Övningen tränar funktioner, variabler, uttryck, datatypen boolean (true/false), tilldelningar och villkor.


  Skriv din kod i js-filen. Öppna ditt HTML-dokument i din webbläsare.

  Prova din kod genom att anropa funktionerna du skapat i webbläsarens konsol.

*/

/*

. Skapa en variabel som ska hålla reda om på ljuset är tänt eller släckt.

  Du kan kalla den theLightIsOn.

  Ge den värdet false för att ange att ljuset inte är på.

*/

let theLightIsOn = false


/*

. Skriv en funktion för att tända ljuset.

  Du kan kalla den turnOnTheLight.

  I funktionen ska du ändra värdet på variabeln theLightIsOn till true.

  Prova funktionen i webbläsarens konsol, genom att skriva turnOnTheLight()

*/

function turnOnTheLight(){
  theLightIsOn = true 
  alert('Lampan tänds')
}


/*

. Skriv en funktion som berättar om ljuset är på eller inte.

  Du kan kalla den isTheLightOn.

  Låt funktionen returnera true eller false som svar.

  Prova funktionen i webbläsarens konsol, genom att skriva isTheLightOn()

*/

function isTheLightOn(){
  return theLightIsOn
  

}


/*

. Skriv en funktion som kan släcka ljuset.

  Den ska bara ändra värdet på variabeln theLightIsOn till false.

  Du kan t ex kalla den turnOffTheLight.

  Prova funktionen genom att först anropa turnOffTheLight() och sedan isTheLightOn()

*/

function turnOffTheLight() {
  theLightIsOn = false
  alert('Lampan släcks')
}


/*

. Skriv nu en funktion som antingen slår på eller av ljuset, beroende på om ljuset är tänt eller släckt.

  Du kan t ex kalla den för toggleTheLight.

*/

function toggleTheLight(){
  if (theLightIsOn){
    turnOffTheLight()
  } else {
    turnOnTheLight()
  }
}


/*

. Skriv nu en funktion som returnerar en sträng som berättar om ljuset är på eller av.

  Om ljuset är på, låt funktionen returnera texten “Ljuset är tänt”.

  Om ljuset är av, returnera istället texten “Ljuset är släckt”.

*/

function Lampstatus(){
  if (theLightIsOn){
    document.getElementById("statusmessage").textContent = 'Ljuset är tänt'
   } else {
    document.getElementById("statusmessage").textContent = 'Ljuset är släckt'
  }
}
