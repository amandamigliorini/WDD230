// declare three const variables that hold references to the input, button, and .list elements.
const button = document.querySelector('button');
const input = document.querySelector('#favchap');
const list = document.getElementById("list");

//local storage array
let chaptersArray = getChapterList() || [];

//Change the button click event listener to only do the following tasks
//check if the input is empty, if not, then
//call displayList with the input.value argument,
//push the input.value into the chaptersArray,
//update the localStorage with the new array by calling a function named setChapterList,
//set the input.value to nothing, and
//set the focus back to the input.

button.addEventListener ('click', () => { 
    if (input.value != ""){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus;
    }
    else{
        input.focus();   
    }
});

//Use a forEach on the chaptersArray to process each entry named chapter.
//Use an arrow function within the loop to call a new defined function named displayList and pass it the
//argument of chapter. That way each entry will be processed, i.e., appended to the list.

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

//Create the displayList defined function that receives one parameter named item.
//Put all the code that builds a list item from the previous button click event listener into this new displayList function
//and use the item parameter as the input. A deleteChapter function will need to be called within the delete button click 
//event to remove the chapter from the array and localStorage.
function displayList(item){
    let li = document.createElement("li");
    let delButton = document.createElement("button");
    li.textContent = item;
    delButton.textContent = "❌";
    delButton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.appendChild(delButton);
    list.append(li);
    delButton.addEventListener("click", () =>{
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus;
    });
}

//Define the setChapterList function to set the localStorage item that you have already named. Use JSON.stringify() to stringify the array.
function setChapterList(){
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

//Define the getChapterList function to get the localStorage item. No parameter is needed. Since this function returns to an awaiting array, we will need to use JSON.parse on the string.
function getChapterList(){
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// define the deleteChapter function with a parameter named chapter that does three things
function deleteChapter(chapter){
    //reformat the chapter parameter to get rid of the ❌ that is passed on the end of the chapter 
    //string when we called the deleteChapter function. Use string.slice() method to extract the last character.
    chapter = chapter.slice(0, chapter.length - 1);
    //define the chaptersArray array using the array.filter method to return everything except the chapter to be removed.
    chaptersArray = chaptersArray.filter((item) => item != chapter);
    //Call the setChapterList function to update the localStorage item.
    setChapterList();
}
