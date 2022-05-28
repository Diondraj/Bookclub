let name = prompt
function signUp(firstName){
        let div = document.createElement('div');
        div.innerHTML = (`Hello, ${firstName}`);
        document.body.appendChild(div);
}

let post=document.getElementById("post");
post.addEventListener("click", function(){
        let commentBoxValue= document.getElementById("comment-box").value;
        let li = document.createElement("li");
        let text = document.createTextNode(commentBoxValue);
        let holder = document.createElement("p")
        const img = new Image(50, 50); 
        img.src = "images/lori.jpg"
        li.appendChild(img);
        holder.appendChild(text);
        li.appendChild(holder);
        document.getElementById("unordered").appendChild(li);
});


