# SEQUÊNCIA PARA INICIALIZAÇÃO DO PROJETO

## Certifique-se de ter o Node e o MYSQL instalado.

##### 1. No terminal do *FRONT-END* executar o comando: *npm install node-modules*

##### 2. No terminal do *BACK-END* executar o comando: *npm install node-modules*

##### 3. Executar Script de criação do banco de dados
    - Abra o WorkBanch e conecte-se
    - No menu esquerdo, vá em Data "Import/Restore"
    - Marque a opção "Import from Self-Contained File" e clique nos três pontos para selecionar o arquivo
    - Selecione o arquivo "Script.sql" na raíz da pasta BACK-END
    - No menu "Default Schema to be Imported to" crie o banco de dados que deseja utilizar
    - Clique em "Start import"
    - Na pasta BACK-END, vá em "src/config/database.js" e altere as variáveis conforme sua necessidade
 
##### Subindo *FRONT-END*: *npm start*

##### Subindo *BACK-END*: *npm run dev*


 
