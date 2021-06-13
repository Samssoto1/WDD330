// Updated version
// Init variables
let list = document.querySelector("ul");
let next;
let previous;
getUrl('http://swapi.dev/api/people/');


function getUrl(url) {
    fetch(url)
    .then((response => response.json()))
    .then((jsonData => {
        
        //calculate pages
        let pages = Math.ceil(jsonData.count / 10);
        let pageNum = document.querySelector('ol');
        pageNum.innerHTML = "";
        for (i = 1; i <= pages; i++){
            pageNum.innerHTML += `<button onclick="getUrl('http://swapi.dev/api/people/?page=${i}')">${i}</button>`
            
        }
        
        
        
        
        // handle next
            let nextBtn = document.querySelector("#next");
            if (jsonData.next){
                next = jsonData.next;
                //console.log("next: " + next)
                nextBtn.removeAttribute('disabled')
            }
            else
            {
                    nextBtn.setAttribute('disabled', true)
                }

                // handle previous
                let previousBtn = document.querySelector("#previous");
                if (jsonData.previous){
                    previous = jsonData.previous;
                    previousBtn.removeAttribute('disabled')
                }
                else
                {
                    previousBtn.setAttribute('disabled', true)
                }
                
                previous = jsonData.previous;
                
            list.innerHTML = "";
            //console.log('info: ' + jsonData.results)
            jsonData.results.forEach((person) => {
                list.innerHTML += `<li>${person.name}</li>`;
            });
        }));
    }
    
    //next button
    document.querySelector("#next").addEventListener("click", () => {
        getUrl(next)
    });
    
    //previous button
    document.querySelector("#previous").addEventListener("click", () => {
        getUrl(previous)
});

