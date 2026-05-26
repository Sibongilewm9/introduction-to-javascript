const button = document.querySelector("button");
const heading = document.querySelector("h1");

// 1.Take the button and wait for a prompt using the addEventListener
button.addEventListener("click", function () {
  // 2.Waiting on the prompt to be triggered using "click"
  // 3.When the prompt is triggered a name will be asked
  const name = prompt("What is your name?");
  //4.The heading with change due to the textContent
  heading.textContent = `Hi, ${name}`;
  // 5.console.log allows us to see the output in the console via inspect
  console.log("The button has been clicked");
});

//Intructions:
//1.Change the button text after it is clicked
//2.Add a second paragraph that updates with today's mood
//3.Style the button in CSS
//4.Add one console.log message of your choice

button.addEventListener("click", function () {
  button.textContent = `clicked`;
});

const paragraph = document.querySelector("p");

paragraph.addEventListener("click", function () {
  const mood = prompt("What mood are you in today?");
  paragraph.textContent = `You are in a ${mood} mood.`;
  console.log("The mood has been inserted");
});
