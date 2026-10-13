const btn = document.querySelector(".add-btn");
const summary = document.querySelector(".summary");
const input = document.querySelector("#itemContent");
const list = document.querySelector("ul");

let shoppingList = [];

btn.addEventListener("click", (e) => {
   e.preventDefault();

   const inputValue = input.value.trim();
   if (!inputValue){
    return;
   }
   shoppingList.push(inputValue);

   input.value ="";
   

  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  span.textContent = inputValue;
  deleteBtn.textContent = "Delete";

  li.append(span, deleteBtn);




   list.appendChild(li);

   if(shoppingList.length === 0) {
    summary.textContent = "Shopping list is empty";
  }  else {
    summary.textContent = `You have ${shoppingList.length} item(s) in list`
  }

  deleteBtn.addEventListener("click", () => {
    const index = shoppingList.indexOf(span.textContent);
     shoppingList.splice(index, 1);
     li.remove();
     if(shoppingList.length === 0) {
    summary.textContent = "Shopping list is empty";
   } else {
    summary.textContent = `You have ${shoppingList.length} item(s) in list`;
  }
  })

})


