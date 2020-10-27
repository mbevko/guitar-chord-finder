
let aChord = document.querySelector(".a_chord");
let bChord = document.querySelector(".b_chord");
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

let majorButton = document.querySelector(".major_chords");
let minorButton = document.querySelector(".minor_chords");
let arrow = document.querySelector(".arrow");
let arrowTwo = document.querySelector(".arrow_two");

majorButton.addEventListener('click', function() {
  aChord.classList.toggle("a_chord_clicked");
  bChord.classList.toggle("b_chord_clicked");
  cChord.classList.toggle("c_chord_clicked");
  dChord.classList.toggle("d_chord_clicked");
  eChord.classList.toggle("e_chord_clicked");
  fChord.classList.toggle("f_chord_clicked");
  gChord.classList.toggle("g_chord_clicked");
  arrow.classList.toggle("arrow_down");
}); 

minorButton.addEventListener('click', function() {
  aMinor.classList.toggle("a_minor_clicked");
  bMinor.classList.toggle("b_minor_clicked");
  cMinor.classList.toggle("c_minor_clicked");
  dMinor.classList.toggle("d_minor_clicked");
  eMinor.classList.toggle("e_minor_clicked");
  fMinor.classList.toggle("f_minor_clicked");
  gMinor.classList.toggle("g_minor_clicked");
  arrowTwo.classList.toggle("arrow_down_two");
}); 


reset.addEventListener('click', function () {
  document.querySelector(".chord_display").innerText = " ";
  one.className = "one";
  two.className = "two";
  three.className = "three";
  four.className = "four";
  five.className = "five";
  six.className = "six";
});

aChord.addEventListener('click', function () {
  document.querySelector(".chord_display").innerText = "A";
  one.className = "one";
  two.className = "b_2";
  three.className = "g_2";
  four.className = "d_2";
  five.className = "five";
  six.className = "six";
});

bChord.addEventListener('click', function () {
  document.querySelector(".chord_display").innerText = "B";
  one.className = "highe_1";
  two.className = "b_2";
  three.className = "g_2";
  four.className = "d_2";
  five.className = "a_1";
  six.className = "six";
});

cChord.addEventListener('click', function () {
  document.querySelector(".chord_display").innerText = "C";
  one.className = "one";
  two.className = "b_1";
  three.className = "three";
  four.className = "d_2";
  five.className = "a_3";
  six.className = "six";
});

dChord.addEventListener('click', function () {
  document.querySelector(".chord_display").innerText = "D";
  one.className = "highe_2";
  two.className = "b_3";
  three.className = "g_2";
  four.className = "four";
  five.className = "five";
  six.className = "six";
});

eChord.addEventListener('click', function () {
  document.querySelector(".chord_display").innerText = "E";
  one.className = "one";
  two.className = "two";
  three.className = "g_1";
  four.className = "d_2";
  five.className = "a_2";
  six.className = "six";
});

fChord.addEventListener('click', function () {
  document.querySelector(".chord_display").innerText = "F";
  one.className = "highe_1";
  two.className = "b_1";
  three.className = "g_2";
  four.className = "d_3";
  five.className = "a_3";
  six.className = "six";
});

gChord.addEventListener('click', function () {
  document.querySelector(".chord_display").innerText = "G";
  one.className = "highe_3";
  two.className = "two";
  three.className = "three";
  four.className = "four";
  five.className = "a_2";
  six.className = "e_3";
});

aMinor.addEventListener('click', function () {
  document.querySelector(".chord_display").innerText = "Am";
  one.className = "one";
  two.className = "b_1";
  three.className = "g_2";
  four.className = "d_2";
  five.className = "five";
  six.className = "six";
});

bMinor.addEventListener('click', function () {
  document.querySelector(".chord_display").innerText = "Bm";
  one.className = "highe_2";
  two.className = "b_3";
  three.className = "g_4";
  four.className = "d_4";
  five.className = "a_2";
  six.className = "six";
});

cMinor.addEventListener('click', function () {
  document.querySelector(".chord_display").innerText = "Cm";
  one.className = "highe_3";
  two.className = "b_4";
  three.className = "g_5";
  four.className = "d_5";
  five.className = "a_3";
  six.className = "e_3";
}); 

dMinor.addEventListener('click', function () {
  document.querySelector(".chord_display").innerText = "Dm";
  one.className = "highe_1";
  two.className = "b_3";
  three.className = "g_2";
  four.className = "four";
  five.className = "five";
  six.className = "six";
});

eMinor.addEventListener('click', function () {
  document.querySelector(".chord_display").innerText = "Em";
  one.className = "one";
  two.className = "two";
  three.className = "three";
  four.className = "d_2";
  five.className = "a_2";
  six.className = "six";
}); 

fMinor.addEventListener('click', function () {
  document.querySelector(".chord_display").innerText = "Fm";
  one.className = "highe_1";
  two.className = "b_1";
  three.className = "g_1";
  four.className = "d_3";
  five.className = "a_3";
  six.className = "e_1";
});

gMinor.addEventListener('click', function () {
  document.querySelector(".chord_display").innerText = "Gm";
  one.className = "highe_3";
  two.className = "b_3";
  three.className = "g_3";
  four.className = "d_5";
  five.className = "a_5";
  six.className = "e_3";
}); 