Se você já desenvolveu alguma aplicação, provavelmente já se deparou com situações em que erros ocorreram em produção e afetaram seus usuários. Esses erros podem ser causados pelo comportamento imprevisto do usuário em nossas aplicações ou até mesmo por falhas no nosso próprio código.

O problema é: como lidar com esses erros de maneira eficiente e rápida? Uma das soluções mais populares atualmente é utilizar o Sentry, uma plataforma de monitoramento de erros que permite identificar e solucionar problemas em tempo real.

Eu venho utilizando o Sentry em diversas aplicações que desenvolvo, como no backend do Adagio, uma rede social para músicos que estou criando.

## O que é Sentry?

O Sentry é uma plataforma de gerenciamento de erros que permite rastrear e corrigir problemas em aplicações web e móveis. Com o Sentry, é possível receber notificações em tempo real sobre erros que ocorrem em produção, além de contar com uma interface amigável para analisar e resolver esses problemas de maneira ágil.

## Como funciona o Sentry?

A plataforma captura os erros que ocorrem em sua aplicação em tempo real, apresentando uma visão completa dos problemas, como o tipo de erro, a linha de código onde ele ocorreu e até mesmo o ambiente em que o erro foi gerado.

### Como utilizar o Sentry em suas aplicações?

Para utilizar o Sentry em sua aplicação, você precisa criar uma conta na plataforma e instalar a biblioteca correspondente à linguagem em que sua aplicação foi desenvolvida. O Sentry possui bibliotecas para diversas linguagens, incluindo JavaScript, Python, Ruby, Java, Go, entre outras.

Uma vez instalada a biblioteca, é preciso configurá-la corretamente, definindo as informações de sua aplicação, como o ambiente de produção, o projeto e as credenciais de acesso ao Sentry. Com isso, o Sentry passa a capturar automaticamente os erros que ocorrem em sua aplicação, permitindo que você possa monitorá-los em tempo real.

Este é um projeto de exemplo de uso do Sentry


## Como rodar

- crie um arquivo .env baseado no arquivo.env.example disponível no repositório, inserindo sua credencial (DSN) obtida na plataforma Sentry.
- instale as dependências do projeto através do npm install ou yarn install
- rode o projeto utilizando npm run start ou yarn start
