
function displayResult (arr, callback){


    arr.forEach(element => {
    
        element = callback(element);
        // console.log(element);

    });

    // console.log(arr)
}

// for of neperraso masyvo elementu reiksmiu

function checkIf (element){

    if (element.indexOf('7')==-1){
        element+='7';
        // console.log(element)
        return element;
    }

    else return element;
}

arr1 = ['G','F','C'];
arr2 = ['Dm', 'G7', 'E', 'A'];

displayResult(arr2, checkIf);
