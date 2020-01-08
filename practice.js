// ex-1
function ex_1() {
  var num1_ex_1 = Number(document.getElementById("number-1").value);
  var num1_ex_2 = Number(document.getElementById("number-2").value);
  // var sum = 0;
  if (num1_ex_1 === num1_ex_2) {
    var sum = (num1_ex_1 + num1_ex_2) * 3;
    alert(sum);
    return false;
  }
  var sum = num1_ex_1 + num1_ex_2;
  alert(sum);
  return false;
}
// ex2
function ex_2() {
  var num1_ex_1 = Number(document.getElementById("number-1-2").value);
  var num1_ex_2 = 19;
  // var sum = 0;
  console.log(num1_ex_1);
  if (num1_ex_1 > num1_ex_2) {
    var result = (num1_ex_1 - num1_ex_2) * 3;
    // console.log(result);
    alert(result);
    return false;
  }
  var result = num1_ex_2 - num1_ex_1;
  alert(result);
  return false;
}

//ex3
function ex_3(a) {

  var string_hidden = document.getElementById("number-1-3").value;
  var sum = 0;
  var result = []; //show result
  var result_ex4 = [];
  var temp; //variable temp check condition
  // alert(string_hidden); return false;
  for (var i = 0; i < string_hidden.length; i++) {
    if (string_hidden[i] != "*") {
      sum += Number(string_hidden[i]);
    }
  }
  // // alert(sum);
  for (var j = 0; j <= 9; j++) {
    temp = sum + j;
    temp %= 3;
    if (temp === 0) {
      result.push(string_hidden.replace("*", j));
      // console.log(result);
    }
  }

  // console.log(result);
  if (a != 6) {
    alert(result);
    return false;
  }
  for (var k = 0; k < result.length; k++) {
    if (result[k] % 2 === 0) {
      result_ex4.push(result[k]);
    }
  }
  var check_empty_array = result_ex4.length;
  if (check_empty_array === 0) {
    alert('Result is empty');
    return false;
  }
  alert(result_ex4);
  return false;

}

function ex_4() {
  var a = 6;
  var pre_result = ex_3(a);
}
