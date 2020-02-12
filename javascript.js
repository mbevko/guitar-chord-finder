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

let close = document.querySelector(".nav_exit_closed");
let chordOptions = document.querySelector(".chord_options_closed");
close.addEventListener('click', function () {
  if(this.className === "nav_exit_closed"){
    this.className = "nav_exit_open";
    chordOptions.className = "chord_options_open";
  }else {
    this.className = "nav_exit_closed";
    chordOptions.className = "chord_options_closed"
    minorChordsNon.className = "chord_buttons_minor_none";
    majorChordsNon.className = "chord_buttons_major_none";
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
  two.className = "b_2";
  three.className = "g_2";
  four.className = "d_2";
  five.className = "five";
  six.className = "six";
});

cChord.addEventListener('click', function () {
  one.className = "one";
  two.className = "b_1";
  three.className = "three";
  four.className = "d_2";
  five.className = "a_3";
  six.className = "six";
});

dChord.addEventListener('click', function () {
  one.className = "highe_2";
  two.className = "b_3";
  three.className = "g_2";
  four.className = "four";
  five.className = "five";
  six.className = "six";
});

eChord.addEventListener('click', function () {
  one.className = "one";
  two.className = "two";
  three.className = "g_1";
  four.className = "d_2";
  five.className = "a_2";
  six.className = "six";
});

fChord.addEventListener('click', function () {
  one.className = "highe_1";
  two.className = "b_1";
  three.className = "g_2";
  four.className = "d_3";
  five.className = "a_3";
  six.className = "six";
});

gChord.addEventListener('click', function () {
  one.className = "highe_3";
  two.className = "two";
  three.className = "three";
  four.className = "four";
  five.className = "a_2";
  six.className = "e_3";
});

aMinor.addEventListener('click', function () {
  one.className = "one";
  two.className = "b_1";
  three.className = "g_2";
  four.className = "d_2";
  five.className = "five";
  six.className = "six";
});

bMinor.addEventListener('click', function () {
  one.className = "highe_2";
  two.className = "b_3";
  three.className = "g_4";
  four.className = "d_4";
  five.className = "a_2";
  six.className = "six";
});

cMinor.addEventListener('click', function () {
  one.className = "highe_3";
  two.className = "b_4";
  three.className = "g_5";
  four.className = "d_5";
  five.className = "five";
  six.className = "e_3";
}); 

dMinor.addEventListener('click', function () {
  one.className = "highe_1";
  two.className = "b_3";
  three.className = "g_2";
  four.className = "four";
  five.className = "five";
  six.className = "six";
});

eMinor.addEventListener('click', function () {
  one.className = "one";
  two.className = "two";
  three.className = "three";
  four.className = "d_2";
  five.className = "a_2";
  six.className = "six";
}); 

fMinor.addEventListener('click', function () {
  one.className = "highe_1";
  two.className = "b_1";
  three.className = "g_1";
  four.className = "d_3";
  five.className = "a_3";
  six.className = "e_1";
});

gMinor.addEventListener('click', function () {
  one.className = "highe_3";
  two.className = "b_3";
  three.className = "g_3";
  four.className = "d_5";
  five.className = "a_5";
  six.className = "e_3";
}); 