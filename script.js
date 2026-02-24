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
}
//toggoling close

//main part cards
mainContainer.addEventListener("click", function(event){
    const parentNode = event.target.parentNode.parentNode;
    console.log(event.target.classList.contains("interview-btn"));
        if(event.target.classList.contains("interview-btn")){
        const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".companyName").innerText;
    const positionName = parentNode.querySelector(".positionName").innerText;
    const salery = parentNode.querySelector(".salery").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const description = parentNode.querySelector(".description").innerText;
    //console.log(companyName, positionName, salery, status, description); 
    const cardInfo = {
        companyName,
        positionName,
        salery,
        status,
        description
    }
    //console.log(cardInfo)
    const companyExist = interviewList.find(item=> item.companyName == cardInfo.companyName)
    parentNode.querySelector(".status").innerText = "interviewd"
    if(!companyExist){
        interviewList.push(cardInfo)
    }
    renderInterview()
    //console.log(interviewList);

    }
})

function renderInterview (){
   filterSection.innerHTML = ""
   for(let interview of interviewList){
    console.log(interview);
    let div = document.createElement("div");
    div.className = "mx-40 py-5 flex justify-between bg-gray-200"
    div.innerHTML = ` <div class="py-4 mx-3">
            <h2 class="companyName font-bold text-xl">Mobile first corp</h2>
            <p class="positionName">React Native Develloper</p>
            <p class="salery">Remote . Full-Time . $130,000-$175,000</p>
            <div>
                <div class="status badge badge-secondary py-2">Not Applied</div>
            <p class="description">Build-cross platform mobile applications using React native. Work on products used by milions of users worldwide.</p>
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



