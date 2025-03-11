let jogadores = [
{win: 60, derrotas: 5 },
{win: 20, derrotas: 1},
{win: 16, derrotas: 10},
]


function calcularRanked(vitorias,derrotas){
	let saldo = vitorias - derrotas
	let rank = "" 
    
 if(saldo<10){
rank = "Ferro"
} else if(saldo>= 11 && saldo<= 20){
rank = "Bronze"
} else if(saldo>=21 && saldo<= 50){
rank = "Prata"
} else if(saldo>=51 && saldo<= 80){
rank = "Ouro"
} else if(saldo>= 81 && saldo<= 90){
rank = "Diamante"
} else if(saldo>= 91 && saldo<= 100){
rank = "Lendário"
} else if(saldo>= 101){
rank = "Imortal"
}
return{ saldo, rank} 
}
for (let i = 0; i < jogadores.length; i++) {
let resultado = calcularRanked(jogadores[i].win, jogadores[i].derrotas)

console.log(`O Herói tem de saldo de **${resultado.saldo}** e está no nível de **${resultado.rank}**`);
}
