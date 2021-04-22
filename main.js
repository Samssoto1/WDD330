const links = [
    {
        label: "Week1 notes",
        url: "week1/index.html"
    },
    {
        label: "Week2 notes",
        url: "week2/index.html"
    }
]

var myol = document.getElementById("myol")
var count = 0;
links.forEach(function (links) {
    /*
    count += 1
    var header = document.createElement('h2');
    var headerText = document.createTextNode("week");
    header.appendChild(headerText);
    */


    var a = document.createElement('a');
    var link = document.createTextNode(links.label);
    a.appendChild(link);
    a.title = links.label;
    a.href = links.url;
    var br = document.createElement('br');
    a.appendChild(br);
    myol.appendChild(a);
    
});