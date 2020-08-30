SEQUÊNCIA PARA INICIALIZAÇÃO DO PROJETO

Certifique-se de ter o Node e o MYSQL instalado.

1. No front-end executar o comando: npm install node-modules

2. No Back-end executar o comando: npm install node-modules

3. Executar Script de criação do banco de dados
    1.1 - Abra o WorkBanch e conecte-se
    1.2 - No menu esquerdo, vá em "Data Import/Restore"
    1.3 - Marque a opção "Import from Self-Contained File" e clique nos três pontos para selecionar o arquivo
    1.4 - Selecione o arquivo "Script.sql" na raíz desse projeto
    1.5 - No menu "Default Schema to be Imported to" escolha ou crie o banco de dados que deseja utilizar
    1.6 - Clique em "Start import"

3.1. Se necessário, você pode mudar as configurações de conexão com o banco de dado em "src/config/database.js"
    2.1 - As configurações padrão atuais:
        username: 'root',
        password: '123456',
        database: 'dbCursosLeve',
        host: 'localhost',
        dialect: 'mysql'

