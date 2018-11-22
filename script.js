var rand_answer;

var answers = ["Dont ask", "Yes", "Maybe", "No shirt No shoes no service", "Not gonna happen"];
function ask() {
  rand_answer = Math.floor(Math.random() * answers.length);
  prompt("Hello, tell me your problems");
  alert(answers[rand_answer]);
}