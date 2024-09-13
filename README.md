# Desafio-Target-2
Desafio Técnico da vaga de Estágio em Desenvolvimento - Ribeirão Preto da Target Sistemas  
### Candidato: Erik Gonçalves Coutinho - Estudante de Eng. de Computação UTFPR

1. Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.  
IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;   
**R.:** **`npm run desafio1 "numero"` (não precisa das aspas, apenas ilustrativo sobre o número)**
2. Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.  
IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;  
**R.:** **`npm run desafio2 "texto"` (neste caso precisa das aspas)**  
3. Observe o trecho de código abaixo: `int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);`  
Ao final do processamento, qual será o valor da variável SOMA?  
**R.: 77.**
4. Descubra a lógica e complete o próximo elemento:  
a. 1, 3, 5, 7, ___  
**R.: 9, ímpares.**  
b. 2, 4, 8, 16, 32, 64, ____  
**R.: 128, o dobro do anterior.**  
c. 0, 1, 4, 9, 16, 25, 36, ____  
**R.: 49, quadrados dos números em sequência (0<sup>2</sup>,1<sup>2</sup>,2<sup>2</sup>...).**  
d. 4, 16, 36, 64, ____  
**R.: 100, quadrados dos pares (2<sup>2</sup>,4<sup>2</sup>,6<sup>2</sup>...).**  
e. 1, 1, 2, 3, 5, 8, ____  
**R.: 13, Fibonacci.**  
f. 2, 10, 12, 16, 17, 18, 19, ____  
**R.: 20, dados os 4 finais da sequência, acrescentei 1.**  
5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  
**R.:** Ligo um único interruptor qualquer por tempo suficiente a geralmente esquentar uma lâmpada, o desligo e ligo outro qualquer e mantenho-o ligado. Logo em seguida na primeira ida em uma sala qualquer, verifico se está ligada, se estiver, sei qual interruptor a ligou, se não estiver, verifico sua temperatura para saber se foi desligada recentemente (primeiro interruptor que liguei) ou se está fria (o outro interruptor que não toquei), e vou a outra sala qualquer para repetir as mesmas verificações e mapeio então, qual interruptor pertence a qual sala. 