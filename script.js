let interviewList = [];
let rejectList =[];

//get total
let total = document.getElementById("total");
let interviewCount = document.getElementById("interview");
let rejectCount = document.getElementById("reject");
//btn toggling
const allTrackerBtn = document.getElementById("all-tracker-btn")
const interviewTrackerBtn = document.getElementById("interview-tracker-btn")
const rejectTrackerBtn = document.getElementById("reject-tracker-btn")


const allcardsSection = document.getElementById("all-cards");

//interviewList.push({name:"job 1"},{name:"job 1"})
const mainContainer = document.querySelector("main");
console.log(mainContainer);
//const allTrackerBtn = document.getElementById("all-tracker-btn");
//allTrackerBtn.addEventListener("click", function(){
//    alert("Clicked from add even")
//});


function calculatCount(){
    total.innerText = allcardsSection.children.length
    interviewCount.innerText = interviewList.length
    rejectCount.innerText = rejectList.length
}
calculatCount()
//get total close

//section toggling btn

function togglestyle(id){
    allTrackerBtn.classList.remove("bg-blue","text-white")
    interviewTrackerBtn.classList.remove("bg-blue","text-white")
    rejectTrackerBtn.classList.remove("bg-blue","text-white")

    allTrackerBtn.classList.add("bg-gray-300","text-black")
    interviewTrackerBtn.classList.add("bg-gray-300","text-black")
    rejectTrackerBtn.classList.add("bg-gray-300","text-black")
    console.log(id);

    const selected = document.getElementById(id)
    console.log(selected);
//for current btn
    selected.classList.remove("bg-gray-300", "text-black");
    selected.classList.add("bg-blue", "text-white");
}
//toggoling close

//main part cards
mainContainer.addEventListener("click", function(event){
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".companyName").innerText;
    const positionName = parentNode.querySelector(".positionName").innerText;
    const salery = parentNode.querySelector(".salery").innerText;


    console.log(companyName);
})



