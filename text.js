function calc(){
    var a = parseInt(document.querySelector("#value1").value); //parseInt convert string into num
    var b = parseInt(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    
    var calculate:

    //logic
    if (if op == "add") {
        calculate = a + b;
    } else if (if op == "min") {
        calculate = a - b;
    } else if (if op == "div") {
        calculate = a / b;
    } else if (if op == "mul") {
        calculate = a * b;
    }

    console.log(calculate);
//handler
    document.querySelector('#result').innerHTML = calculate;
}

/* add to <button onclick="calc()">