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
const mainContainer = document.querySelector("main");
//console.log(mainContainer);
const filterSection = document.getElementById("filtered-section");
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
    if(id == "interview-tracker-btn"){
        allcardsSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
    }else if(id == "all-tracker-btn"){
        allcardsSection.classList.remove("hidden");
        filterSection.classList.add("hidden");
    }else if(id == "reject-tracker-btn"){
        allcardsSection.classList.add("hidden");
        filterSection.classList.remove("hidden");

    }
}
//toggoling close

//main part cards
mainContainer.addEventListener("click", function(event){
    const parentNode = event.target.parentNode.parentNode;
    console.log(event.target.classList.contains("interview-btn"));
    //interview
    if(event.target.classList.contains("interview-btn")){
    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector(".companyName").innerText;
    const positionName = parentNode.querySelector(".positionName").innerText;
    const salery = parentNode.querySelector(".salery").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const description = parentNode.querySelector(".description").innerText; 
    parentNode.querySelector(".status").innerText = "interviewd"
    const cardInfo = {
        companyName,
        positionName,
        salery,
        status:"interview",
        description
    }
    //console.log(cardInfo)
    const companyExist = interviewList.find(item=> item.companyName == cardInfo.companyName)
    
    if(!companyExist){
        interviewList.push(cardInfo)
    }
    calculatCount()
    renderInterview()
    //console.log(interviewList);

    }else if(event.target.classList.contains("reject-btn")){
    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector(".companyName").innerText;
    const positionName = parentNode.querySelector(".positionName").innerText;
    const salery = parentNode.querySelector(".salery").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const description = parentNode.querySelector(".description").innerText; 
    parentNode.querySelector(".status").innerText = "Reject"
    const cardInfo = {
        companyName,
        positionName,
        salery,
        status:"Reject",
        description
    }
    //console.log(cardInfo)
    const companyExist = rejectList.find(item=> item.companyName == cardInfo.companyName)
    
    if(!companyExist){
        rejectList.push(cardInfo)
    }
    calculatCount()
    renderReject()
    //console.log(interviewList);

    }
})
//interview
function renderInterview (){
   filterSection.innerHTML = ""
   for(let interview of interviewList){
    console.log(interview);
    let div = document.createElement("div");
    div.className = "mx-40 py-5 flex justify-between bg-gray-200"
    div.innerHTML = ` <div class="py-4 mx-3">
            <h2 class="companyName font-bold text-xl">${interview.companyName}</h2>
            <p class="positionName">${interview.positionName}</p>
            <p class="salery">${interview.salery}</p>
            <div>
                <div class="status badge badge-secondary py-2">${interview.status}</div>
            <p class="description">${interview.description}</p>
            </div>
            <div class="py-4">
            <button class="btn">Interview</button>
            <button class="btn">Rejected</button>
            </div>
        </div>
        <div class="btn rounded-full">
    <i class="fa-regular fa-trash-can"></i>
      </div>
    `
    filterSection.appendChild(div)
   }
}
//reject
function renderReject (){
   filterSection.innerHTML = ""
   for(let reject of rejectList){
    console.log(reject);
    let div = document.createElement("div");
    div.className = "mx-40 py-5 flex justify-between bg-gray-200"
    div.innerHTML = ` <div class="py-4 mx-3">
            <h2 class="companyName font-bold text-xl">${reject.companyName}</h2>
            <p class="positionName">${reject.positionName}</p>
            <p class="salery">${reject.salery}</p>
            <div>
                <div class="status badge badge-secondary py-2">${reject.status}</div>
            <p class="description">${reject.description}</p>
            </div>
            <div class="py-4">
            <button class="btn">Interview</button>
            <button class="btn">Rejected</button>
            </div>
        </div>
        <div class="btn rounded-full">
    <i class="fa-regular fa-trash-can"></i>
      </div>
    `
    filterSection.appendChild(div)
   }
}



