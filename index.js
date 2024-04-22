// javascript

//Increment app
let count=0
function increment()
{
    count+=1
    document.getElementById("click-elem").innerText=count
}
function save()
{
    let saveEl=count + " - "
    count = 0
    document.getElementById("click-elem").innerText=0
    document.getElementById("save-el").textContent+=saveEl
}