
  var leeftijd = prompt("hoe oud ben je");
  
  
  if(leeftijd >= 18 ){
  	var mag = prompt("oke je mag de game spelen, wil je doorgaan?");
  

  }else if(leeftijd < 18){
  document.write("je mag deze game helemaal niet spelen, wat jammer");
}

 //mag-------------------------------------------------------------------------
  if(mag == "ja"){
  	var spookhuis = prompt("je komt een spookuis tegen ga je naar binnen?");
  
  }else if(mag== "nee"){
    document.write("das pech, game over")
}

//spookhuis--------------------------------------------------------------------------
if(spookhuis == "ja"){
  	var spook = prompt("je gaat het spookhuis binnen ga je naar links of naar rechts");
  
  }else if(spookuis == "nee"){
  	document.write("das pech, game over");
}

//spook-------------------------------------------------------------------------
if(spook === "rechts"){
  	alert("je loopt naar rechts maar er is niks alleen een bord dat zegt dat je naar links moet");
    var spook = prompt("je gaat het spookhuis binnen ga je naar links of naar rechts");
  
  }else if(spook === "links"){
  	var links = prompt("je loopt naar links er is een gangpad en een trap welke kant ga je op");
}

//links-------------------------------------------------------------------------
  if(links == "gangpad"){
  	alert("")
  
  }else if(links == "trap"){
  alert("je loopt de trap op en je komt boven aan je stapt per ongeluk op een bananenschil en je valt naar beneden");
}


//korst1------------------------------------------------------------------------
if(korst2 == "ja"){
  	document.write("camembert");
  
  }else if(korst2 == "nee"){
  	document.write("mozzarella");
}
   
//korst2------------------------------------------------------------------------
if(korst1 == "ja"){
  	document.write("bleu de nachbaron");
  
  }else if(korst1 == "nee"){
  	document.write("foume d'ambert");
}
   