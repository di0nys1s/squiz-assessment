var listvalues = [
  { id: 1, email: "rose@gmail.com", password: "1234", username: "Rose" },
  { id: 2, email: "john@gmail.com", password: "1234", username: "John" },
  { id: 3, email: "seyhan@gmail.com", password: "1234", username: "Seyhan" }
];

var smiles = [];

localStorage.setItem("lists", JSON.stringify(listvalues));
var email;
var password;

$(".btn-login").click(function(event) {
  event.preventDefault();
  email = $("#inputEmail").val();
  password = document.getElementById("inputPassword").value;

  if (email === null || email === "") {
    document.querySelector(".email-warn").textContent =
      "Email cannot be empty.";
    document.querySelector(".password-warn").textContent =
      "Password cannot be empty.";
    $("#inputEmail, #inputPassword").css("border-color", "red");
    $(".warn").css({ visibility: "visible", color: "red" });
  } else if (email != null || email != "") {
    listvalues.map(value => {
      if (email === value.email && password === value.password) {
        var name = value.username;
        var getInput = name;
        localStorage.setItem("uname", getInput);
        $(location).attr("href", "/home.html");
      }
    });
  } else {
    document.querySelector(".email-warn").textContent =
      "Please type your email again.";
    document.querySelector(".password-warn").textContent =
      "Please type your password again.";
    $("#inputEmail, #inputPassword").css("border-color", "red");
    $(".warn").css({ visibility: "visible", color: "red" });
  }
});

let uname = localStorage.getItem("uname");
$(".welcome-header").text("Welcome " + uname);

document.querySelector(".my-table th").textContent = uname;

var btnValue = $(".home-button").attr("value");
console.log(btnValue === "Button");

var randLocationX = 0;
var randLocationY = 0;
var windowWidth = window.outerWidth;
var windowHeight = window.outerHeight;

randLocationX = Math.round(Math.random() * windowWidth);
randLocationY = Math.round(Math.random() * windowHeight);

var smile = $(".smile").css({
  position: "relative",
  top: randLocationY,
  left: randLocationX
});

function randomSmiley() {
  randLocationX = Math.round(Math.random() * windowWidth);
  randLocationY = Math.round(Math.random() * windowHeight);
  $(smile).css({
    visibility: "visible",
    top: randLocationY,
    left: randLocationX
  });
  $("body").append(smile);
}

$(".smile").hover(function() {
  randomSmiley();
});

$(".home-button").click(function() {
  randomSmiley();
});

console.log(windowWidth);
console.log(windowHeight);

const numbers = [1, 2, 3, 4, 5];
const increasedByOne = numbers.map(x => {
  return x + 1;
});

const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum);
console.log(increasedByOne);
