document.getElementById("one").addEventListener("click", () => {
  document.getElementById("calculation").value += "1";
});
document.getElementById("two").addEventListener("click", () => {
  document.getElementById("calculation").value += "2";
});
document.getElementById("three").addEventListener("click", () => {
  document.getElementById("calculation").value += "3";
});
document.getElementById("four").addEventListener("click", () => {
  document.getElementById("calculation").value += "4";
});
document.getElementById("five").addEventListener("click", () => {
  document.getElementById("calculation").value += "5";
});
document.getElementById("six").addEventListener("click", () => {
  document.getElementById("calculation").value += "6";
});
document.getElementById("seven").addEventListener("click", () => {
  document.getElementById("calculation").value += "7";
});
document.getElementById("eight").addEventListener("click", () => {
  document.getElementById("calculation").value += "8";
});
document.getElementById("nine").addEventListener("click", () => {
  document.getElementById("calculation").value += "9";
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

//clear calculation
document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("calculation").value = "0";
});

// get result
document.getElementById("getResult").addEventListener("click", () => {
  document.getElementById("result").value = eval(document.getElementById("calculation").value);
});
