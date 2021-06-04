function addme()
{
    var name = document.getElementById("name").value;
    var ul = document.getElementById("mylist");
    var li = document.createElement("li");
    li.classList.add("list-group-item")
    li.classList.add("bg-info")
    var nameNode = document.createTextNode(name);
    li.appendChild(nameNode);
    ul.appendChild(li);
}