import {Hike} from './hike.js';

let hikes = [];

let hike1 = new Hike("Bechler Falls", "falls.jpg", 
"Image of Bechler Falls", "3 miles",
"Easy", "Beautiful short hike along the Bechler river to Bechler Falls", 
"Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.", 'a_hid');
hikes.push(hike1);


let hike2 = new Hike("Teton Canyon", "falls.jpg", "Image of Bechler Falls",
"3 miles", "Easy","Beautiful short (or long) hike through Teton Canyon.",
"Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.", 'b_hid');

let hike3 = new Hike("Denanda Falls", "falls.jpg", "Image of Bechler Falls",
"7 miles", "Moderate","Beautiful hike through Bechler meadows river to Denanda Falls",
"Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.", 'c_hid');
hikes.push(hike2);
hikes.push(hike3);

  
  const imgBasePath = "//byui-cit.github.io/cit261/examples/";
  //on load grab the array and insert it into the page
  window.addEventListener("load", () => {
    showHikeList();
  });
  
  function showHikeList() {
    const hikeListElement = document.getElementById("hikes");
    hikeListElement.innerHTML = "";
    renderHikeList(hikes, hikeListElement);

    document.getElementById('a_hid').addEventListener('touchend', hike1details);
    document.getElementById('b_hid').addEventListener('touchend', hike2details);
    document.getElementById('c_hid').addEventListener('touchend', hike3details);
  }
  
  function renderHikeList(hikes, parent) {
    hikes.forEach(hike => {
      parent.appendChild(renderOneHike(hike));
    });
  }
  function renderOneHike(hike) {
    const item = document.createElement("li");
  
    item.innerHTML = ` <h2>${hike.name}</h2>
          <div class="image" id="${hike.hikeid}"> <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div>
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                      
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
          </div>
          <div id = ${hike.hikeid + '_detail'} class="hidden">
            <h3>Description</h3>
            <p>${hike.description}</p>
          </div>`
    return item;
  }

function hike1details(){
  //console.log(this.id);
  let detail = document.getElementById(this.id + '_detail');
  detail.classList.toggle('hidden');
}

function hike2details(){
  let detail = document.getElementById(this.id + '_detail');
  detail.classList.toggle('hidden');
}

function hike3details(){
  let detail = document.getElementById(this.id + '_detail');
  detail.classList.toggle('hidden');
}

function addOrRemove(){
  hikes.forEach(
    hike => {
      let detail = document.getElementById(hike.hikeid + '_detail');
      detail.classList.add('hidden');
    }
  );
}
