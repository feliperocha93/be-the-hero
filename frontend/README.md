#### useState:
Retorna um Array [valor, funçãoDeAtualização]

#### Habilitar Emmet no React
CTRL + SHIFT + P > Open Settings(JSON)  
*Adicionar as duas linhas no JSON de configuração*
"emmet.syntaxProfiles": { "javascript": "jsx" },  
"emmet.includeLanguages": { "javascript": "javascriptreact" }
*Por padrão o Emmet vem desabilitado no React*
- Exemplo de Emmet: div.class + Enter = <div className="class"></div>

#### React icons
npm install react-icons
- Pacote que importa todas as bibliotecas famosas de ícones para o react
- Icones são importados como componentes
- Todos eles aceitam propriedade de size e color

#### Axios
Cliente HTTP responsável por fazer as chamadas na API
*Por padrão, o axios já envia os dados no formato JSON*

#### Login
Após o Login, nome de usuário precisa estar disponível em _toda a aplicação_. Solução: Salvar no _localstorage_.

#### useHistory
Do react-router-dom, usado para navegar/redirecionar.

#### useEffect
Chamar determinada função em determinado momento do componente. Ex: Assim que ele é mostrado em tela
Recebe dois parâmeros:
1-) Qual função será executada;
2-)Um array as variáveis que ele deve observar.

#### Intl
Classe Global do _JavaScript_ referente a internacionalização (Tratamento de formato de dados para apresentar ao usuário)

#### Hospedagem
- Netlify: Free
- ID de teste: ff8ee465