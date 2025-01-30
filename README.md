# 📝 To-Do List App com React Native e Expo
Este é um projeto simples de uma aplicação de lista de tarefas (To-Do List) desenvolvida com React Native e Expo durante um curso feito na RocketSeat. O objetivo é demonstrar como o Expo facilita a criação e execução de projetos React Native, especialmente para iniciantes ou para prototipação rápida.

## 🚀 Por que usar o Expo?
O Expo é uma ferramenta incrível para desenvolver aplicativos React Native de forma rápida e eficiente. Ele oferece várias vantagens, como:

**Configuração simplificada**: Não é necessário configurar o Android Studio ou Xcode para começar a desenvolver.

**Fácil execução**: Com um único comando, você pode rodar o projeto no seu dispositivo físico, emulador ou até mesmo no navegador.

**Bibliotecas integradas**: O Expo já vem com várias bibliotecas úteis pré-instaladas, como expo-status-bar, expo-font, entre outras.

**Multiplataforma**: Com o Expo, você pode desenvolver para Android, iOS e web usando o mesmo código base.

Por essas razões, o Expo foi escolhido para este projeto, permitindo que você foque no desenvolvimento da aplicação sem se preocupar com configurações complexas.

## 📂 Como clonar e executar o projeto
Siga os passos abaixo para clonar e executar o projeto em sua máquina:

### Pré-requisitos
Node.js instalado (versão 16 ou superior).

Expo CLI instalado globalmente. Caso não tenha, instale com o comando:

bash
```
npm install -g expo-cli
```
### Passo 1: Clonar o repositório
Clone o repositório para o seu ambiente local:

bash
```
git clone https://github.com/VitorLAmorim/todo-list-react-native.git
cd todo-list-react-native
```
### Passo 2: Instalar as dependências
Instale as dependências do projeto usando o npm ou yarn:

bash
```
npm install
# ou
yarn install
```
### Passo 3: Executar o projeto
Após instalar as dependências, execute o projeto com um dos seguintes comandos:

 - Para iniciar o servidor de desenvolvimento:

bash
```
npm start
# ou
yarn start
```
 - Para rodar no Android:

bash
```
npm run android
# ou
yarn android
```
Para rodar no iOS:

bash
```
npm run ios
# ou
yarn ios
```
Para rodar no navegador (web):

bash
```
npm run web
# ou
yarn web
```
### Passo 4: Testar no seu dispositivo
 - Abra o aplicativo Expo Go no seu smartphone (disponível na Play Store ou App Store).

 - Escaneie o QR code exibido no terminal ou na página do Expo Dev Tools.

## 🛠️ Estrutura do Projeto
O projeto é simples e contém os seguintes arquivos principais:

 - App.tsx: Ponto de entrada da aplicação.

 - components/: Diretório para componentes reutilizáveis.

 - screens/: Diretório para as telas da aplicação.

 - package.json: Contém as dependências e scripts do projeto.

### Dependências Principais
 - expo: Framework para desenvolvimento React Native.

 - react e react-native: Bibliotecas principais para construir a interface do usuário.

 - expo-status-bar: Componente para personalizar a barra de status do dispositivo.

### Scripts Disponíveis
 - start: Inicia o servidor de desenvolvimento.

 - android: Executa o projeto no Android.

 - ios: Executa o projeto no iOS.

 - web: Executa o projeto no navegador.

## 📱 Funcionalidades do App
 - Adicionar novas tarefas.

 - Marcar tarefas como concluídas.

 - Remover tarefas da lista.

## 🙌 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

Feito com ❤️ por Vitor Amorim.
