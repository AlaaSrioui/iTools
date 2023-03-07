var result = ""
//output of the calculator

function addNumber(number){
  result += number
  document.getElementById("result").value = result
}
//this function adds numbers to result which is the output of the calculator

function addOperator(operator){
  if (result !== "") {
    result += operator
    document.getElementById("result").value = result
  }
}
//this function adds the operators to result which is the output of the calculator

function clearResult() {
  result = ""
  document.getElementById("result").value = result
}
//this function clears the output, means it rest the result to an empty string

function calculateResult() {
  if (result !== "") {
    var calculation = eval(result)
    result = calculation.toString()
    document.getElementById("result").value = result
  }
}//this function is responsible for calculating what we already have in the output when invoked, 
//it uses the built in function "eval" that takes numbers and operator and excute the calculation
// even if you give it a string and our output(result) is already a string.
  