let nivel = "";

let xpDarthVader = 5230;
let xpLukeSkywalker = 9000;

let DarthVader = "Darth Vader";
let LukeSkywalker = "Luke skywalker";

let numeroDeLutas = 5;
let pontosPorLuta = 100;
let totalXpLuta = numeroDeLutas * pontosPorLuta;

let lutas = 0;

do {
  lutas++;
  console.log(LukeSkywalker, "venceu a luta", lutas, "!");
} while (lutas < numeroDeLutas);

let xpFinalLuke = xpLukeSkywalker + totalXpLuta;
let xpFinalDart = xpDarthVader - totalXpLuta;

if (xpDarthVader < xpLukeSkywalker) {
  console.log(LukeSkywalker + " é mais forte que " + DarthVader + "!");
}

console.log(
  LukeSkywalker +
    " tem " +
    xpFinalLuke +
    " pontos XP e " +
    DarthVader +
    " tem " +
    xpFinalDart +
    " pontos de XP, após " +
    numeroDeLutas +
    " lutas."
);

if (xpFinalLuke <= 1000) {
  nivel = "Ferro";
} else if (xpFinalLuke >= 1001 && xpFinalLuke <= 2000) {
  nivel = "Bronze";
} else if (xpFinalLuke >= 2001 && xpFinalLuke <= 5000) {
  nivel = "Prata";
} else if (xpFinalLuke >= 5001 && xpFinalLuke <= 7000) {
  nivel = "Ouro";
} else if (xpFinalLuke >= 7001 && xpFinalLuke <= 8000) {
  nivel = "Platina";
} else if (xpFinalLuke >= 8001 && xpFinalLuke <= 9000) {
  nivel = "Ascendente";
} else if (xpFinalLuke >= 9001 && xpFinalLuke <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}
console.log("O Herói de nome " + LukeSkywalker + " esta no nível de " + nivel);
