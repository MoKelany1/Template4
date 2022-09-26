let deleteTasks = document.querySelectorAll(".dashboard .tasks .task i")
deleteTasks.forEach(function(e){
    e.setAttribute("title","Delete")
})
deleteTasks.forEach(function(e,index){
    e.onclick = function() {
        e.parentElement.classList.remove("pending")
        e.parentElement.classList.add("done")
        let taskHeading = document.querySelectorAll(".dashboard .tasks .task .name h3")
        let taskPa = document.querySelectorAll(".dashboard .tasks .task .name p")
        let lastHeading = taskHeading[index].innerHTML
        let lastPa = taskPa[index].innerHTML
        taskHeading[index].innerHTML = `<del>${lastHeading}</del>`
        taskPa[index].innerHTML = `<del>${lastPa}</del>`
    }
})

// let closeMsg = document.querySelector(".settings .site .message textarea")
// let checkBox = document.querySelector(".settings .site .control input")
// checkBox.oninput = function(){
//     if(checkBox.checked === true){
//         console.log("Checked")
//         console.log(closeMsg.value)
//     } else{
//         console.log("Not Checked")
//     }
// }

let pCheck = document.querySelectorAll(".settings .widgets-control .widget p")
let inputCheck = document.querySelectorAll(".settings .widgets-control .widget input")
pCheck.forEach(function(e,index){
    e.addEventListener("click",function(){
        if(inputCheck[index].checked === true){
            inputCheck[index].checked = false;
            // console.log(e.innerHTML)
        } else{
            inputCheck[index].checked = true;
            // console.log(e.innerHTML)
        }
    })
})

let pradioCheck = document.querySelectorAll(".settings .backup-manager div p")
let radioCheck = document.querySelectorAll(".settings .backup-manager div input")
pradioCheck.forEach(function(e,index){
    e.addEventListener("click",function(){
        radioCheck[index].checked = true;
        // console.log(radioCheck[index].value)
    })
})

let removeFriends = document.querySelectorAll(".friends .box .edit a:nth-of-type(2)")
let boxFriends = document.querySelectorAll(".friends .box")
removeFriends.forEach(function(e,index){
    e.addEventListener("click",function(){
        boxFriends[index].style.display = "none"
    })
})

