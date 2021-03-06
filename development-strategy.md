# Calculator-refactor project

A simple program that allows users to add, subtract, divide and multiply two numbers. 

## DOM

| tag name | attributes | role |
| --- | --- | --- |
|`<section>`| `id='user-interface'`|the section that contains all user interface elements  |
|`<form>` |`id="calculator" class="forma"` | the form that allows us to handle user's input|
|`<input>` |`<input type="text" id="value1" name="value1"` | this is text field for the first number|
|`<input>` |`<input type="text" id="value2" name="value2"` | this is text field for the second number|
|`<select>`|`id="operator`| this drop-down menu allows user to select desired math operation|
|`<option>` |`value="add"`| this option describe add action|
|`<option>` |`value="min"`| this option describe subtract action|
|`<option>` |`value="div"`| this option describe divide action|
|`<option>` |`value="mul"`| this option describe multiply action|
|`<button>` |`type="button" id="calculate" class="button"`| this button activate the calculation process and display the result.|

## Styling

| class name | description | role |
| --- | --- | --- |
|`.forma` | sets position & font styling for `<form>`| make input form more user-friendly|
|`.button` | sets button with specific margin around it | make button more visible|
|`.result`| sets parameters of output field | make output value more visible|

## Listeners

| type | attached to | callback |
| --- | --- | --- |
|`'click'` |`id='calculate'` |`calculateHandler` |

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `calculateHandler(event)`| Event: a user-triggered event| Boolean: should the browser continue as normal? | reads numbers and operation user filled in and return the correct result: passes input through core logic, renders result for user, logs action for developer, and alerts the browser 'OK' |

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
|`doMath(operation, a, b)`|  operation(_String_) and a,b(_Number_)| _Number_ | it takes `a` and `b` and executes math operation prescribed by `operation`| 

