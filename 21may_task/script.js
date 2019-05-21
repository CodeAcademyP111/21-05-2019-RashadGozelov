var ul = document.querySelector("#ul");
var button = document.querySelector("#button");
var input=document.querySelector("#input");


button.addEventListener("click", function () {
    ul.innerHTML="";
    for(var i=1; i<=input.value;i++){
     
    var li = document.createElement("li");
    li.innerHTML=i;

    var span = document.createElement("span");


    var icon = document.createElement("i");
    icon.classList.add("fas", "fa-times");

    li.appendChild(span);
    li.appendChild(icon);
    ul.appendChild(li);

    icon.addEventListener("click", function () {
        icon.parentNode.parentNode.remove();
        
    })
    
    
 }
})




