const obj = [{
    nome:"Davi",
    idade:18,
    trabalhando:true,
    hobbies:["Ler", "Jogar", "Programar"],
    detalhes: {
        profissao: "professor",
        escola:"liceu"
    }
    
},  
{
    nome:"Rebeca",
    idade:18,
    trabalhando:true,
    hobbies:["Ler", "Jogar", "Estudar"],
    detalhes: {
        profissao: "professora",
        escola:"tiradentes"
    }
    
}]

console.log(obj)

const jasonData = JSON.stringify(obj)

console.log(jasonData)

const objData = JSON.parse(jasonData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})

