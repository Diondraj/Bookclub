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
let topForm = document.getElementById("topsearchForm")

topForm.addEventListener('submit', function(e) {    
        let searchInput = document.getElementById("topSearchInput");
        let inputValue = searchInput.value;
            e.preventDefault();
            console.log(inputValue);
        let wordsArray = inputValue.split(' '); // Split input field value by spaces
        let updatedInput = wordsArray.join('+'); // Join words with plus signs
        console.log(updatedInput);
        displayArea.innerHTML = '';
        searchBooks(updatedInput);
        });


form.addEventListener('submit', function(e) {    
let searchinput = document.getElementById("searchinput");
let inputValue = searchinput.value;
    e.preventDefault();
    console.log(inputValue);
let wordsArray = inputValue.split(' '); // Split input field value by spaces
let updatedInput = wordsArray.join('+'); // Join words with plus signs
console.log(updatedInput);
displayArea.innerHTML = '';
searchBooks(updatedInput);
});


const searchBooks = async(searchedTitle) => {
       try {
                let data = await fetch(`https://openlibrary.org/search.json?q=${searchedTitle}`);
                createBooks(data);
        } catch(error){
                console.error('Error:', error);
        }
};

const createBooks = async(data) =>{
        data.json().then((parsedData)=>{
                console.log(parsedData)
              
                for (let index = 0; index < 30; index++) {
                        console.log(parsedData.docs[index].title);
                        console.log(parsedData.docs[index].author_name);
                        // https://covers.openlibrary.org/b/isbn/9780385533225-L.jpg
                        
                        if("isbn" in parsedData.docs[index] ){
                        let ISBN = parsedData.docs[index].isbn[0];
                        let title = document.createElement("p")
                        title.textContent = parsedData.docs[index].title
                        let author = document.createElement("p"); 
                        author.textContent = parsedData.docs[index].author_name;
                        let image = document.createElement("img")
                        imageURL = `https://covers.openlibrary.org/b/isbn/${ISBN}-L.jpg`;
                        image.src = imageURL;  
                        //below we are waiting for the images to load so we can access the natural width and height properties
                        image.addEventListener('load', function(){
                                console.log( `${image.naturalWidth} by ${image.naturalHeight}`);
                                //if the natural with is greater than 1, than only those images can show up in the display.
                                //I did not want books with small images that look like nothing is present but technically an image is there to show up in the display
                                if(image.naturalWidth > 1){
                                        resizeImage(image);
                                        let divBox = document.createElement("div")
                                        divBox.appendChild(image);
                                        divBox.appendChild(title);
                                        divBox.appendChild(author);
                                        displayArea.appendChild(divBox);
                                }
                        })                                
                        } else{
                                //else if there is an object with 
                                noImageAvail(parsedData.docs[index])
                        }
                }
        })
}

const noImageAvail = (data) =>{
                        console.log(data.title);
                        console.log(data.author_name);
                        let title = document.createElement("p");
                        title.textContent = data.title;
                        let author = document.createElement("p"); 
                        author.textContent = data.author_name;
                        let noImage = document.createElement("p");
                        noImage.textContent="There is no image available for this book"
                        let divBox = document.createElement("div")
                        divBox.appendChild(noImage);
                        divBox.appendChild(title);
                        divBox.appendChild(author);
                        displayArea.appendChild(divBox);
};
const resizeImage = (image) =>{
        image.style.width="200px";
        image.style.height = "250px"
}