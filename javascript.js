let chordOptionMajor = document.querySelector(".chord_option_major");
let majorChords = document.querySelector(".chord_buttons_major");
let majorChordsNon = document.querySelector(".chord_buttons_major_none")

chordOptionMajor.addEventListener('click', function () {
  if(majorChordsNon.className === "chord_buttons_major_none"){
    majorChordsNon.className = "chord_buttons_major";
  }else{
    majorChordsNon.className = "chord_buttons_major_none";
  }
});

let chordOptionMinor = document.querySelector(".chord_option_minor");
let minorChords = document.querySelector(".chord_buttons_minor");
let minorChordsNon = document.querySelector(".chord_buttons_minor_none")

chordOptionMinor.addEventListener('click', function () {
  if(minorChordsNon.className === "chord_buttons_minor_none"){
    minorChordsNon.className = "chord_buttons_minor";
  }else{
    minorChordsNon.className = "chord_buttons_minor_none";
  }
});

let aChord = document.querySelector(".a_chord");
let cChord = document.querySelector(".c_chord");
let dChord = document.querySelector(".d_chord");
let eChord = document.querySelector(".e_chord");
let fChord = document.querySelector(".f_chord");
let gChord = document.querySelector(".g_chord");
let reset = document.querySelector(".reset");

let aMinor = document.querySelector(".a_minor");
let bMinor = document.querySelector(".b_minor");
let cMinor = document.querySelector(".c_minor");
let dMinor = document.querySelector(".d_minor");
let eMinor = document.querySelector(".e_minor");
let fMinor = document.querySelector(".f_minor");
let gMinor = document.querySelector(".g_minor"); 

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");

reset.addEventListener('click', function () {
  one.className = "one";
  two.className = "two";
  three.className = "three";
  four.className = "four";
  five.className = "five";
  six.className = "six";
});

aChord.addEventListener('click', function () {
  one.className = "one";
  two.className = "a_b";
  three.className = "a_g";
  four.className = "a_d";
  five.className = "five";
  six.className = "six";
});

cChord.addEventListener('click', function () {
  one.className = "one";
  two.className = "c_b";
  three.className = "three";
  four.className = "c_d";
  five.className = "c_a";
  six.className = "six";
});

dChord.addEventListener('click', function () {
  one.className = "d_e";
  two.className = "d_b";
  three.className = "d_g";
  four.className = "four";
  five.className = "five";
  six.className = "six";
});

eChord.addEventListener('click', function () {
  one.className = "one";
  two.className = "two";
  three.className = "e_g";
  four.className = "e_d";
  five.className = "e_a";
  six.className = "six";
});

fChord.addEventListener('click', function () {
  one.className = "f_e";
  two.className = "f_b";
  three.className = "f_g";
  four.className = "f_d";
  five.className = "five";
  six.className = "six";
});

gChord.addEventListener('click', function () {
  one.className = "g_e";
  two.className = "two";
  three.className = "three";
  four.className = "four";
  five.className = "g_a";
  six.className = "g_elow";
});

aMinor.addEventListener('click', function () {
  one.className = "one";
  two.className = "am_b";
  three.className = "a_g";
  four.className = "a_d";
  five.className = "five";
  six.className = "six";
});

bMinor.addEventListener('click', function () {
  one.className = "bm_e";
  two.className = "bm_b";
  three.className = "bm_g";
  four.className = "bm_d";
  five.className = "bm_a";
  six.className = "six";
});