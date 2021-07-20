fucntion getValues(){
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzvalue) && Number.isInteger(buzzValue)) {

        let fbArray = FizzBuzz(fizzValue, buzzValue);
        displayData(fbArray);
    }else{
        alert("You must enter integers")
    }
}

function fizzBuzz(fizzValue, buzzValue)
{
    let returnArray = [];

    for (let index = 1; index < 100; index++) {
        
        if (index % fizzValue == 0 && index % buzzValue) {
            returnArray.push('FizzBuzz');
        } else if{
            returnArray.push('Fizz');
        }else if (index % buzzValue == 0){
            returnArray.push('Buzz');
        }else {
            returnArray.push(index);
        }
        
        returnArray.push(index);
        
    }
}

function displayData(fbArray) {
    let tableBody = document.getElementById('results');

    let templateRow = document.getElementById('fbTemplate');
    
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index+=5) {
        let tableRow = document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll('td');
        rowCols[0].textContent = fbData[i];
        rowCols[1].textContent = fbData[i+1];
        rowCols[2].textContent = fbData[i+2];
        rowCols[3].textContent = fbData[i+3];
        rowCols[4].textContent = fbData[i + 4];
        
        tableBody.appendChild(tableRow);
    }
}