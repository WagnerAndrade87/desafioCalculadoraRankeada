let numberOfWins = ranked (50,10)
let ranking = classification(numberOfWins)

console.log(ranking)


function ranked (wins, defeats){
    let rankedBalance = (wins - defeats)
    return rankedBalance
}

function classification (vitorias) {
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