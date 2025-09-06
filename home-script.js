function openTodo(day)
{
    localStorage.setItem("day", JSON.stringify(day));
    window.location.href = "main.html";
}

