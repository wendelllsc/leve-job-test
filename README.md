#SEQUÊNCIA PARA INICIALIZAÇÃO DO PROJETO

##Certifique-se de ter o Node e o MYSQL instalado.

#1. No terminal do *FRONT-END* executar o comando: *npm install node-modules*

#2. No terminal do *BACK-END* executar o comando: *npm install node-modules*

# 3. Executar Script de criação do banco de dados
    	3.1 - Abra o WorkBanch e conecte-se
    	3.2 - No menu esquerdo, vá em "Data Import/Restore"
    	3.3 - Marque a opção "Import from Self-Contained File" e clique nos três pontos para selecionar o arquivo
    	3.4 - Selecione o arquivo "Script.sql" na raíz da pasta BACK-END
   	3.5 - No menu "Default Schema to be Imported to" crie o banco de dados que deseja utilizar
   	3.6 - Clique em "Start import"
	3.7 - Na pasta BACK-END, vá em "src/config/database.js" e altere as variáveis conforme sua necessidade

 
