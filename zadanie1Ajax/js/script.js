

fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    .then(response => response.json())
    .then((data) => {
        
        document.getElementById('dataButton').addEventListener("click", myScript);
       function myScript() {
            document.getElementById('dane-programisty').textContent = `${data.imie}  ${data.nazwisko} ${data.zawod} ${data.firma}`;

        }
        
        
    });   

    