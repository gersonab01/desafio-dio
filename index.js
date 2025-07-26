let xpDarthVader = 5230;
let xpLukeSkywalker = 9000;

let DarthVader = "Darth Vader";
let LukeSkywalker = "Luke skywalker";

let numeroDeLutas = 5;
let pontosPorLuta = 100;
let totalXpLuta = numeroDeLutas * pontosPorLuta;

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
  console.log(LukeSkywalker + " é um herói do tipo FERRO");
} else if (xpFinalLuke >= 1001 && xpFinalLuke <= 2000) {
  console.log(LukeSkywalker + " é um herói do tipo Bronze");
} else if (xpFinalLuke >= 2001 && xpFinalLuke <= 5000) {
  console.log(LukeSkywalker + " é um herói do tipo Prata");
} else if (xpFinalLuke >= 5001 && xpFinalLuke <= 7000) {
  console.log(LukeSkywalker + " é um herói do tipo Ouro");
} else if (xpFinalLuke >= 7001 && xpFinalLuke <= 8000) {
  console.log(LukeSkywalker + " é um herói do tipo Platina");
} else if (xpFinalLuke >= 8001 && xpFinalLuke <= 9000) {
  console.log(LukeSkywalker + " é um herói do tipo Ascendente");
} else if (xpFinalLuke >= 9001 && xpFinalLuke <= 10000) {
  console.log(LukeSkywalker + " é um herói do tipo Imortal");
} else if (xpFinalLuke >= 10001) {
  console.log(LukeSkywalker + " é um herói do tipo Radiante");
}
