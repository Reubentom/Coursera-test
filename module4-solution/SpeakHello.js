
var helloSpeaker = {};
// // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
  helloSpeaker.speakWord = "Hello";


  helloSpeaker.speak= function(name) {
    helloSpeaker.name = name;
   console.log(helloSpeaker.speakWord + " " + helloSpeaker.name);
 }
