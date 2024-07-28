let name = prompt

function handleSubmit (){
        let firstName = document.getElementById('FirstName').value
        console.log(firstName)
        let greeting = document.createElement('div');
        greeting.innerHTML = (`Hello, ${firstName}`);
        greeting.id = "greeting"
        greeting.style.border="1px solid black"
        let onboardingBody = document.getElementById("onboardingBody")
        onboardingBody.appendChild(greeting);
}


// let post =document.getElementById("post");
// post.addEventListener("click", function(){
//         let commentBoxValue= document.getElementById("comment-box").value;
//         let li = document.createElement("li");
//         let text = document.createTextNode(commentBoxValue);
//         let holder = document.createElement("p")
//         const img = new Image(50, 50); 
//         img.src = "images/lori.jpg"
//         li.appendChild(img);
//         holder.appendChild(text);
//         li.appendChild(holder);
//         document.getElementById("unordered").appendChild(li);
// });



let button = document.getElementById("searchbarbtn")
let form = document.getElementById("searchbar");
let displayArea = document.getElementById("display")

form.addEventListener('submit', function(e) {    
let searchinput = document.getElementById("searchinput");
let inputValue = searchinput.value;
    e.preventDefault();
    console.log(inputValue);
let wordsArray = inputValue.split(' '); // Split input field value by spaces
let updatedInput = wordsArray.join('+'); // Join words with plus signs
console.log(updatedInput);
searchBooks(updatedInput);
});

const searchBooks = async(searchedTitle) => {
        displayArea.innerHTML = '';
      
        let data = await fetch(`https://openlibrary.org/search.json?q=${searchedTitle}`);
      
        data.json().then((parsedData)=>{
                console.log(parsedData)
                for (let index = 0; index < 30; index++) {
                        console.log(parsedData.docs[index].title);
                        console.log(parsedData.docs[index].author_name);
                       
                        
                        let title = document.createElement("p")
                        title.textContent = parsedData.docs[index].title
                        let author = document.createElement("p"); 
                        author.textContent = parsedData.docs[index].author_name;
                        
                        
                        let divBox = document.createElement("div")
                        divBox.style.display = "flex";
                        divBox.style.flexDirection ="column"
                        divBox.style.backgroundColor ="lightgray";
                        divBox.style.border ="2px solid black"
                        divBox.style.borderRadius = "10px";
                        divBox.style.justifyContent="center";
                        divBox.style.alignContent ="center";
                        divBox.appendChild(title);
                        divBox.appendChild(author);
                     
                        displayArea.appendChild(divBox)
                }

        })
        
};