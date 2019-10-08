
  var leeftijd = prompt("hoe oud ben je");
  
  
  if(leeftijd >= 18 ){
  	var mag = prompt("oke je mag de game spelen, wil je doorgaan?");

     //mag-------------------------------------------------------------------------
  if(mag == "ja"){
    var spookhuis = prompt("je komt een spookhuis tegen ga je naar binnen?");

    //spookhuis--------------------------------------------------------------------------
if(spookhuis == "ja"){
    var spook = prompt("je gaat het spookhuis binnen ga je naar links of naar rechts");
  
  //spook-------------------------------------------------------------------------
if(spook === "links"){
    var links = prompt("je loopt naar links er is een gangpad en een trap welke kant ga je op");

    //links-------------------------------------------------------------------------
  if(links == "gangpad"){
    var sleutel = prompt("je loopt het gangpad in en er hangen 2 sleutels ze zijn beiden genummerd 1,3 welke sleutel neem je mee?");


//sleutel------------------------------------------------------------------------
if(sleutel === "1"){
    var aquarium = prompt("je ziet 5 deuren ze zijn allemaal genummerd 1,2,3,4,5? gebruik je de sleutel op deur 1?");
 
//aqaurium------------------------------------------------------------------------
if(aquarium === "ja"){
    alert("je opent de deur en stapt naar binnen je valt gelijk naar beneden in een aquarium vol met piranhas");
    document.write("game over");
  
  }else if(aquarium == "nee"){
    alert("je gaat niet door de deur heen maar je hoort wat achter je lopen dus besluit het toch wel te doen je stapt naar binnen en je valt in een aquarium vol met piranhas");
    document.write("game over");
}
  
  //sleutel--------------------------------------------------------------------------------------------------
  }else if(sleutel === "3" ){
    alert("je pakt sleutel 3 en je zet 1 stap naar achteren en valt ergens naar beneden");
    var deuren = prompt("je kijkt om je kijkt om je heen en je ziet 2 deuren welke deur kies je? ga je naar links of naar rechts");


//deuren
if(deuren === "links"){
    alert("je opent de deur met de sleutel er zit alleen een monster achter je wordt gegrepen en opgegeten");
    document.write("game over");
  
  }else if(deuren === "rechts"){
  var lift = prompt("je opent de deur er zit een lift achter ga je de lift in?");
console.log("godev")
//lift-------------------------------------------------------------------------------------
if(lift == "ja"){
    alert("je gaat de lift in en hij gaat automatisch naar boven je komt boven aan je kijkt om je heen en je ziet een bord staan met ga naar links en de uitgang je gaat naar buiten");
    document.write("gewonnen");
  
  }else if(lift == "nee"){
  alert("je besluit niet de lift in te gaan je hoort achter je 2 deuren openslaan en 2 monters verschijnen je wordt opgegeten");
   document.write("game over");
 }
}

  

  }else if(links == "trap"){
  alert("je loopt de trap op en je komt boven aan je stapt per ongeluk op een bananenschil en je valt naar beneden");
  document.write("game over")
}

}else if(spook === "rechts"){
    alert("je loopt naar rechts en je ziet een lift je gaat naar beneden met de lift de deur opent en er springen 2 monsters op je");
    document.write("game over"); 
  }
  

  }else if(spookhuis == "nee"){
    document.write("game over");
}
  
 
  }else if(mag== "nee"){
    document.write("game over")
}
  

  }else if(leeftijd < 18){
  document.write("je mag deze game helemaal niet spelen, wat jammer");
}
}