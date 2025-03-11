let name = "Pedro"
let xp = 1726

function ClassificarXP(xp){
let nivel= ""

if(xp<1000){
	nivel = "Ferro"
} else if(xp >= 1001 && xp <= 2000){
	nivel = "Bronze"
} else if(xp >= 2001 && xp <= 5000){
	nivel = "Prata"
} else if (xp >= 5001 && xp<= 7000){
	nivel = "Ouro"
} else if (xp>= 7001 && xp<= 8000){
	nivel = "Platina"
} else if (xp>= 8001 && xp<= 9000){
	nivel =  "Ascendente"
} else if (xp>= 9001 && xp<= 10000){
	nivel =  "Imortal"
} else 
  	nivel = "Radiante"
    
   return nivel

  }
  for (let i = 0; i < 3; i++) {
  
  let NivelHeroi = ClassificarXP(xp) 
  
console.log(`O Herói de nome **${name}** está no nível de **${NivelHeroi}**`)

}
