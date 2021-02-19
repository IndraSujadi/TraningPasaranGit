function* foo(name: string) {
  console.log(name);
  let x = 0;
  while (true) {
    const result = yield (x += 1);
    console.log("I was unpaused and received:", result);
  }
}

const generator = foo("Indra");

const button = document.createElement("button");
button.appendChild(document.createTextNode("Press Me!"));
button.addEventListener("click", () => {
  const value = generator.next("hi");
  console.log("Value:", value);
});
document.body.appendChild(button);
