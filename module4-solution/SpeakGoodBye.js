
var byeSpeaker = {};
// // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
  byeSpeaker.speakWord = "Good Bye";


  byeSpeaker.speak= function(name) {
    byeSpeaker.name = name;
   console.log(byeSpeaker.speakWord + " " + byeSpeaker.name);
 }
