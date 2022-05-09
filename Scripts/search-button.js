var input = document.getElementById('myInput');

document.getElementById('myButton').onclick = function() {
   if (input.value == "Huntington's disease"){
      location.assign("Diseases/Huntington.html");
   } else if ((input.value == "HD") || (input.value == "hd")){
      location.assign("Diseases/Huntington.html");
   } else if (input.value == "Dentatorubral-pallidoluysian atrophy"){
      location.assign("Diseases/DRPLA.html");
   } else if ((input.value == "DRPLA") || (input.value =="drpla")){
      location.assign("Diseases/DRPLA.html");
   } else if ((input.value == "SBMA") || (input.value =="sbma")){
      location.assign("Diseases/SBMA.html");
   } else if (input.value == "Spinal-bulbar muscular atrophy"){
      location.assign("Diseases/SBMA.html");
   } else if ((input.value == "SCA1") || (input.value == "sca1")){
      location.assign("Diseases/SCA1.html");
   } else if (input.value == "Spinocerebellar ataxia type 1"){
      location.assign("Diseases/SCA1.html");
   } else if ((input.value == "SCA2") || (input.value == "sca2")){
      location.assign("Diseases/SCA2.html");
   } else if (input.value == "Spinocerebellar ataxia type 2"){
         location.assign("Diseases/SCA2.html");
   } else if ((input.value == "SCA3") || (input.value == "sca3")){
         location.assign("Diseases/SCA3.html");
   } else if (input.value == "Spinocerebellar ataxia type 3"){
         location.assign("Diseases/SCA3.html");
   } else if ((input.value == "SCA6") || (input.value == "sca6")){
         location.assign("Diseases/SCA6.html");
   } else if (input.value == "Spinocerebellar ataxia type 6"){
         location.assign("Diseases/SCA6.html");
   } else if ((input.value == "SCA7") || (input.value == "sca7")){
         location.assign("Diseases/SCA7.html");
   } else if (input.value == "Spinocerebellar ataxia type 7"){
         location.assign("Diseases/SCA7.html");
   } else if ((input.value == "SCA17") || (input.value == "sca17")){
            location.assign("Diseases/SCA17.html");
   } else if (input.value == "Spinocerebellar ataxia type 17"){
            location.assign("Diseases/SCA17.html");
   } else {
      return alert('Error. No such disease');
   }
   return 1;
};

// On enter key pressed same thing as clicking button
input.onkeydown = function(e){
   if(e.keyCode == 13){
      if (input.value == "Huntington's disease"){
         location.assign("Diseases/Huntington.html");
      } else if ((input.value == "HD") || (input.value == "hd")){
         location.assign("Diseases/Huntington.html");
      } else if (input.value == "Dentatorubral-pallidoluysian atrophy"){
         location.assign("Diseases/DRPLA.html");
      } else if ((input.value == "DRPLA") || (input.value =="drpla")){
         location.assign("Diseases/DRPLA.html");
      } else if ((input.value == "SBMA") || (input.value =="sbma")){
         location.assign("Diseases/SBMA.html");
      } else if (input.value == "Spinal-bulbar muscular atrophy"){
         location.assign("Diseases/SBMA.html");
      } else if ((input.value == "SCA1") || (input.value == "sca1")){
         location.assign("Diseases/SCA1.html");
      } else if (input.value == "Spinocerebellar ataxia type 1"){
         location.assign("Diseases/SCA1.html");
      } else if ((input.value == "SCA2") || (input.value == "sca2")){
         location.assign("Diseases/SCA2.html");
      } else if (input.value == "Spinocerebellar ataxia type 2"){
            location.assign("Diseases/SCA2.html");
      } else if ((input.value == "SCA3") || (input.value == "sca3")){
            location.assign("Diseases/SCA3.html");
      } else if (input.value == "Spinocerebellar ataxia type 3"){
            location.assign("Diseases/SCA3.html");
      } else if ((input.value == "SCA6") || (input.value == "sca6")){
            location.assign("Diseases/SCA6.html");
      } else if (input.value == "Spinocerebellar ataxia type 6"){
            location.assign("Diseases/SCA6.html");
      } else if ((input.value == "SCA7") || (input.value == "sca7")){
            location.assign("Diseases/SCA7.html");
      } else if (input.value == "Spinocerebellar ataxia type 7"){
            location.assign("Diseases/SCA7.html");
      } else if ((input.value == "SCA17") || (input.value == "sca17")){
               location.assign("Diseases/SCA17.html");
      } else if (input.value == "Spinocerebellar ataxia type 17"){
               location.assign("Diseases/SCA17.html");
      } else {
         return alert('Error. No such disease');
      }
      return 1;
   }
}
