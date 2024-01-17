// declare three const variables that hold references to the input, button, and .list elements.
const button = document.querySelector('button');
const input = document.querySelector('#favchap');
const list = document.getElementById("list");

button.addEventListener ('click', () => { 
    if (input.value != ""){
        const li = document.createElement("li");
        const delButton = document.createElement("button");
        li.textContent = input.value;
        delButton.textContent = "❌";
        li.appendChild(delButton);
        list.append(li);
        delButton.addEventListener("click", () =>{
            list.removeChild(li);
            input.focus;
        });
        input.focus();
        input.value = '';
    }
    else{
        input.focus();   
    }
});


