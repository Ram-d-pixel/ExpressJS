# WebServ

exceltojson.js- Function to convert to Excel to JSON
jsonsearch.js- Function to search for specific JSON
excelService.js- Deals with Service to trigger exceltojson.js and jsonsearch.js and will create a random port number

Steps to follow to execute the code:

1. Open Terminal on the IDE and Exceute the command 'npm install'
2. Execute the command 'node .\ram\javascript_training\excelService.js'
3. Open any browser 
4. To trigger excel to JSON, navigate to 'http://localhost:{random portnumber}/XL2JSON'
5. To search for any JSON file, navigate to 'http://localhost:{random portnumber}/JSON?filename={jsonfileName}.json'

Required Dependencies:

Express JS
Math.Random
xlsx
portastic (Optional)
