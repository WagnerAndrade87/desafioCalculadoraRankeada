/*# 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 

  
Bons estudos 😉*/

//let numberOfWins
//let numberOfDefeatss

let numberOfWins = ranked (50,10)
let ranking = classificacao(numberOfWins)

console.log(ranking)


function ranked (wins, defeats){
    let rankedBalance = (wins - defeats)
    return rankedBalance
}

function classificacao (vitorias) {
    switch (true) {
        case vitorias >= 101:
            return `O Herói tem ${vitorias} vitórias de saldo está no nível Imortal`
            break;
        case vitorias > 90 && vitorias <=100:
            return `O Herói tem ${vitorias} vitórias de saldo está no nível Lendario`
            break;
        case vitorias > 80 && vitorias <=90:
            return `O Herói tem ${vitorias} vitórias de saldo está no nível Diamante`
            break;
        case vitorias > 50 && vitorias <=80:
            return `O Herói tem ${vitorias} vitórias de saldo está no nível Ouro`
            break;
        case vitorias > 20 && vitorias <=50:
            return `O Herói tem ${vitorias} vitórias de saldo está no nível Prata`
            break;
        case vitorias > 10 && vitorias <=20:
            return `O Herói tem ${vitorias} vitórias de saldo está no nível Broze`
            break;
        case vitorias < 10:
            return `O Herói tem ${vitorias} vitórias de saldo está no nível Ferro`
            break;
    }
    return 'Seu herói não se classficou'
}