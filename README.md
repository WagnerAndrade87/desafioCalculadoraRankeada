Calculadora de Partidas Rankeadas
No segundo desafio do curso Formação Lógica de Programação da DIO, intitulado "Calculadora de Partidas Rankeadas", o objetivo principal era desenvolver uma solução capaz de classificar heróis com base em seu desempenho em partidas ranqueadas.

Para a resolução deste desafio, foram empregados os seguintes conceitos fundamentais da programação:

Variáveis: Para armazenar dados como o número de vitórias e derrotas.
Operadores: Para realizar cálculos, como a subtração entre vitórias e derrotas.
Estruturas de Decisão (if/else): Para definir o nível do herói com base no saldo de vitórias.
Funções: Para organizar o código em blocos reutilizáveis e lógicos.
A solução implementada utilizou duas funções distintas:

A primeira função tinha a responsabilidade de calcular o saldo de vitórias, subtraindo o número de derrotas do número de vitórias. O resultado desta operação (o saldo rankeado) era então retornado.

Posteriormente, uma segunda função era encarregada de realizar o rankeamento do herói, seguindo a seguinte tabela de classificação:
<ul>
  <li>Se o número de vitórias for menor que 10, o nível é Ferro.</li>
  <li>Se o número de vitórias estiver entre 11 e 20, o nível é Bronze.</li>
  <li>Se o número de vitórias estiver entre 21 e 50, o nível é Prata.</li>
  <li>Se o número de vitórias estiver entre 51 e 80, o nível é Ouro.</li>
  <li>Se o número de vitórias estiver entre 81 e 90, o nível é Diamante.</li>
  <li>Se o número de vitórias estiver entre 91 e 100, o nível é Lendário.</li>
  <li>Se o número de vitórias for maior ou igual a 101, o nível é Imortal.</li>
</ul>
Ao final da execução da segunda função, a resposta era apresentada no console através da seguinte mensagem formatada:

"O Herói tem saldo de {saldoVitorias} e está no nível de {nivel}"
