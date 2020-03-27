#### React Native
- Não temos tags semânticas como no HTML
- Tudo é componente
- Estilização é sempre feita pela tag style que recebe um objeto com a estilização
- Todos os elementos do React Native são _Display Flex_ por padrão, com flexDirection: "Column"
- As propriedades são declaradas em camelCase
- Não existe herança de estilo, todo elemento deve receber sua estilização
- Toda vez que usarmos JSX precisamos importar React no arquivo

#### React Naigation
- npm install @react-navigation/native
- expo install react-native-gesture-handler react-native-reanimated react-native-screens
- react-native-safe-area-context @react-native-community/masked-view
- npm install @react-navigation/stack
- Stack navigation: Navegação por botões
- Navigatioin Container funciona como o BrowserRouter do React JS

#### Expo constants
Ajuda a obter alguns valores contantes que são diferentes dependendo do dispositivo

#### DeepLinking
Enderço do app (pelo menos dos mais famosos), dentro do seu celular. Através dele é possível acessar esse app e passar parametros. Ex: Acessar o Whatsapp e enviar uma mensagem pré-definida para determinado contato

#### Intl
O Intl do Javascript não funciona no Android, por isso, usamos npm i intl

#### useRoute
Serve para pegar os parametros enviados para a rota que o app está.