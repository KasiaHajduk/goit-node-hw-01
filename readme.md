# Otrzymujemy i wyprowadzamy całą listę kontaktów w postaci tabeli (console.table)
node index.js --action list
https://ibb.co/fkbb41W

# Otrzymujemy kontakt po id
node index.js --action get --id 5
https://ibb.co/fvrD2Sd

# Dodajemy kontakt
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://ibb.co/4pr9Nvq

# Usuwamy kontakt
node index.js --action remove --id=3
https://ibb.co/L5pvrmT
