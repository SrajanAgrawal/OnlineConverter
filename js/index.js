
var convertToBinary = document.getElementById("convertToBinary").addEventListener("click" , function() {
  var inputRequired = document.querySelector(".inputRequired input").value;
  var output = inputRequired.toString(2);
  console.log(output);
  // console.log(inputRequired);
  // var rem = [];
  // while(inputRequired > 0) {
  //   rem.push(parseInt(inputRequired % 2));
  //   inputRequired = parseInt(inputRequired / 2);
  // }
  // console.log(rem);
  // for(var i=0 ; i<(rem.length)/2 ; i++) {
  //   rem[i] = rem[i] + rem[rem.length-1-i];
  //   rem[rem.length-1-i] = rem[i] - rem[rem.length-1-i];
  //   rem[i] = rem[i] - rem[rem.length-1-i];
  // }
  // console.log(rem);
  var outputRequired = document.querySelector(".outputRequired input").value =  inputRequired.toString(2);
});
