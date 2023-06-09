# Decodificador ONE

Este é um projeto criado para atender ao primeiro desafio proposto pela Turma 5 da ONE em parceria com a Alura.

<!-- Inserir imagem com a #vitrinedev ao final do link -->
![Site completo](README-imgs/full-light.png?#vitrineDev)

## Detalhes do projeto Frontend codificador/decodificador

O objetivo era criar um criptografador/decriptografador que utilizasse as seguintes chaves:

-   Letra A: ai
-   Letra E: enter
-   Letra I: imes
-   Letra O: ober
-   Letra U: ufat

Foi disponibilizado um modelo figma como referência, mas tivemos liberdade criativa para desenvolver o projeto.

Além do que foi pedido, foi incluída uma função que permite ao usuário definir suas próprias chaves para as vogais, se desejar. Também foi criada uma função para modo escuro, sem a utilização de frameworks, apenas com HTML, CSS e Javascript. O Sweet Alert 2 foi utilizado para criar dois alertas.

![Site completo](README-imgs/full-dark.png)

O site é composto por uma área de texto à esquerda e uma área de resultados à direita. Ele foi desenvolvido usando a abordagem de mobile-first, onde o site é primeiro desenvolvido para versão mobile, seguido das versões para tablets, e versões de desktop ao final.


<table style="border: none;">
  <tr>
    <td><img src="README-imgs/mobile-version.png" alt="Mobile-version"></td>
    <td><img src="README-imgs/tablet-version-dark.png" alt="Tablet-version"></td>
  </tr>
</table>

*Respectivamente as versões de mobile e tablet, uma em sua versão de modo claro e outras em sua versão de modo noturto*

## Funcionalidades

-   Criptografar e decriptografar texto utilizando as chaves pré-definidas ou as chaves personalizadas pelo usuário.
<br>

![Site completo](README-imgs/overlay-dark.png)

-   Alternar entre modo claro e modo escuro.
<br>

![Site completo](README-imgs/menu-light.png)

<br>

-   Exibir alertas para confirmações:

<table style="border: none;">
  <tr>
    <td><img src="README-imgs/alert-1.png" alt="Alerta 1"></td>
    <td><img src="README-imgs/alert-2.png" alt="Alerta 2"></td>
  </tr>
</table>



## Tecnologias utilizadas

-   HTML
-   CSS
-   Javascript
-   Sweet Alert 2

## Como executar o projeto

1.  Clone o repositório em sua máquina
2.  Abra o arquivo index.html em seu navegador

OU

1. Você pode acessar atravez dos links
<br>
2. https://erikcwill.github.io/ChallengeONE/ (GitHub Pages)
<br>
3. https://decodificador-one.vercel.app/ (Vercel App)

## Como utilizar o criptografador/decriptografador

1.  Insira o texto que deseja criptografar ou decriptografar na área de texto à esquerda

<br>

![Site completo](README-imgs/como-usar.png)

2.  Use os botões para definir se quer criptografar ou descriptografar
3.  Clique no botão "Criptografar" ou "Descriptografar"

<br>

![Site completo](README-imgs/botoes.png)

4.  O resultado será exibido na área de resultados à direita

![Site completo](README-imgs/resultados.png)

## Como definir chaves personalizadas

1.  Selecione a engrenagem no canto superior no menu de escolha de chaves

<br>

![Site completo](README-imgs/menus-dark.png)

2.  Insira as chaves personalizadas para cada vogal nos campos correspondentes

<br>

![Site completo](README-imgs/novas-chaves-1.png)
*É importante lembrar que os inputs recebem apenas letras minusculas, não podendo utilizar acentos e caracteres especiais*


3.  Clique no botão "Definir chaves" para salvar as chaves personalizadas


4.  As chaves personalizadas estarão disponíveis para uso nas criptografias/decriptografias seguintes

<br>

![Site completo](README-imgs/novas-chaves-2.png)

## Agradecimentos

Gostaria de agradecer à Turma 5 da ONE e à Alura por proporcionar essa oportunidade de aprendizado e aprimoramento das habilidades em desenvolvimento frontend. Foi um desafio muito interessante e gratificante de ser realizado.


| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Decodificador ONE**
| :label: Tecnologias | javascript, html, css
| :rocket: URL         | https://erikcwill.github.io/ChallengeONE
| :fire: Desafio     | https://www.alura.com.br/challenges/challenge-one-logica/sprint01-construa-decodificador-texto-com-javascript

