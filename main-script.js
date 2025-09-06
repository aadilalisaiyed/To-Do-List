
// function which takes user to home page
function back()
{
    window.location.href = "home.html";
}

// updating day title of main page
p = document.querySelector("p");

day = localStorage.getItem("day");
let task = getTask(day);

p.innerText = day + "'s To-Do List";

// store and load of tasks for each day
function addTask(day,task)
{
    localStorage.setItem(day,JSON.stringify(task));
}

function getTask(day)
{
    return JSON.parse(localStorage.getItem(day)) || [];
}


// function to allow user to insert task on screen as well as memory
q = document.querySelector("input");

list = document.querySelector(".task-list");
function insert(q)
{
    
    if(q.value === "")
    {
        alert("Please enter a task");
    }
    else
    {
        task.push(q.value);
        addTask(day,task);
        let li = document.createElement("li");
        li.innerHTML = q.value + '<button onclick="remove(this)"><i class="fa-solid fa-xmark"></i></button>';
        removeBtn = li.querySelector("button");
        list.appendChild(li);
        q.value = "";
    }
}

// function to allow user to remove task from screen as well as memory
function remove(el)
{
    text = el.parentElement.firstChild.textContent;
    task = task.filter(t => t!==text);
    addTask(day,task);
    el.parentElement.remove();
}

// display tasks for each day from memory
task.forEach(t=>{
    let li = document.createElement("li");
    li.innerHTML = t + '<button onclick="remove(this)"><i class="fa-solid fa-xmark"></i></button>';
    list.appendChild(li);
})


