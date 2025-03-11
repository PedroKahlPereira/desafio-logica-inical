let type = { 
  type1: "guerreiro",  
  type2: "mago",       
  type3: "monge",     
  type4: "ninja",      
};

class Heroi {
  constructor(name, age, type) {
    this.name = name;  
    this.age = age;    
    this.type = type;   
  }

  atacar() {
    let ataque;
    
    if (this.type === "mago") {
      ataque = "magia";  // Se o tipo for "mago", o ataque é magia
    } else if (this.type === "guerreiro") {
      ataque = "espada";  // Se o tipo for "guerreiro", o ataque é espada
    } else if (this.type === "monge") {
      ataque = "artes marciais";  // Se o tipo for "monge", o ataque é artes marciais
    } else if (this.type === "ninja") {
      ataque = "shuriken";  // Se o tipo for "ninja", o ataque é shuriken
    }

    console.log(`O ${this.type} atacou usando ${ataque}`);  
  }
}

// Criando os heróis com os tipos definidos no objeto `type`
let heroi1 = new Heroi("Sid", 21, type.type2);  // Passa "mago" (de `type.type2`)
let heroi2 = new Heroi("Tavin", 299, type.type4); // Passa "ninja" (de `type.type4`)

heroi1.atacar();  // Esperado: "O mago atacou usando magia"
heroi2.atacar();  // Esperado: "O ninja atacou usando shuriken"
