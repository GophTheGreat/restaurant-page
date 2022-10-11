import './style.css';

let contentDiv = document.getElementById("content");
document.body.style.backgroundImage="url('../assets/GophBGOnly2x.png')";

let tabContainer = document.createElement("div");
tabContainer.className = 'tabContainer';
contentDiv.appendChild(tabContainer);



//make tabs
for(let i = 0; i < 3; i++){
  let tab = document.createElement("div");
  tab.innerText = `tab${i}`;
  tabContainer.appendChild(tab);
}
