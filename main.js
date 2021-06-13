const links = [
    {
        label: "Week 1 Notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 Team Activity",
        url: "week2/teamactivity.html"
    },
    {
        label: "Week 2 Notes",
        url: "week2/index.html"
    },
    {
        label: "Week 3 Team Activity",
        url: "week3/teamactivity.html"
    },
    {
        label: "Week 3 Notes",
        url: "week3/index.html"
    },
    {
        label: "Week 4 Team Activity",
        url: "week4/teamactivity.html"
    },
    {
        label: "Week 4 Notes",
        url: "week4/index.html"
    },
    {
        label: "Week 5 Team Activity",
        url: "week5/teamactivity.html"
    },
    {
        label: "Week 5 Notes",
        url: "week5/index.html"
    },
    {
        label: "Week 6 Todo WebApp",
        url: "toDoApp/todo.html"
    },
    {
        label: "Week 7",
        url: "week7/index.html"
    },
    {
        label: "Week 8 Notes",
        url: "week8/index.html"
    },
    {
        label: "Week 8 Team Activity",
        url: "week8/teamactivity.html"
    }
]

var myol = document.getElementById("myol")
var count = 0;
links.forEach(function (links) {
    var a = document.createElement('a');
    var link = document.createTextNode(links.label);
    a.appendChild(link);
    a.title = links.label;
    a.href = links.url;
    //a.style.backgroundColor = 'red';
    var br = document.createElement('br');
    a.appendChild(br);
    myol.appendChild(a);
    myol.appendChild(document.createElement("br"))
    myol.appendChild(document.createElement("br"))
    

    
});
