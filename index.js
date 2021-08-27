// get result
function getResult() {
  document.getElementById("result").value = eval(document.getElementById("calculation").value);
}
// input function
document.getElementById("zero").addEventListener("click", () => {
  document.getElementById("calculation").value += "0";
  getResult();
});
document.getElementById("one").addEventListener("click", () => {
  document.getElementById("calculation").value += "1";
  getResult();
});
document.getElementById("two").addEventListener("click", () => {
  document.getElementById("calculation").value += "2";
  getResult();
});
document.getElementById("three").addEventListener("click", () => {
  document.getElementById("calculation").value += "3";
  getResult();
});
document.getElementById("four").addEventListener("click", () => {
  document.getElementById("calculation").value += "4";
  getResult();
});
document.getElementById("five").addEventListener("click", () => {
  document.getElementById("calculation").value += "5";
  getResult();
});
document.getElementById("six").addEventListener("click", () => {
  document.getElementById("calculation").value += "6";
  getResult();
});
document.getElementById("seven").addEventListener("click", () => {
  document.getElementById("calculation").value += "7";
  getResult();
});
document.getElementById("eight").addEventListener("click", () => {
  document.getElementById("calculation").value += "8";
  getResult();
});
document.getElementById("nine").addEventListener("click", () => {
  document.getElementById("calculation").value += "9";
  getResult();
});
document.getElementById("period").addEventListener("click", () => {
  document.getElementById("calculation").value += ".";
});
document.getElementById("add").addEventListener("click", () => {
  document.getElementById("calculation").value += "+";
});
document.getElementById("subtract").addEventListener("click", () => {
  document.getElementById("calculation").value += "-";
});
document.getElementById("multiply").addEventListener("click", () => {
  document.getElementById("calculation").value += "*";
});
document.getElementById("divide").addEventListener("click", () => {
  document.getElementById("calculation").value += "/";
});
document.getElementById("percentage").addEventListener("click", () => {
  document.getElementById("calculation").value += "*(1/100)";
  getResult();
});

//clear calculation
document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("calculation").value = "0";
  getResult();
});
