function calculateHandler(event) {
  // read & process user input from event

  const form = event.target.form;
  const val1 = parseInt(form.value1.value);
  const val2 = parseInt(form.value2.value);
  const op = form.operator.value;

  //const val1 = parseInt(document.querySelector("#value1").value); //parseInt convert string into num
  //const val2 = parseInt(document.querySelector("#value2").value);
  //const op = document.querySelector("#operator").value;

  // pass user input through core logic
  const result = doMath(op, val1, val2);
  //this line throw an error:
  //function doMath is not defined at HTMLButtonElement.calculateHandler

  // render output to DOM for user
  document.getElementById('result').innerHTML = result;

  // log user action for developers
  console.log('\n-- user action --');
  console.log('value1:', '(' + typeof val1 + ')', val1);
  console.log('value2:', '(' + typeof val2 + ')', val2);
  console.log('operation:', '(' + typeof op + ')', op);
  console.log('result:', '(' + typeof result + ')', result);

  // return true for the browser
  return true;
}
