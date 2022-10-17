import './style.css';

let contentDiv = document.getElementById("content");
document.body.style.backgroundImage="url('../assets/GophBGOnly2x.png')";

let tabContainer = document.createElement("div");
tabContainer.className = 'tabContainer';
contentDiv.appendChild(tabContainer);

//make tab1
function makeTab1(){
  clearTab();
  let mainDiv = makeMainDiv();

  let titleDiv = document.createElement("div");
  titleDiv.innerHTML = "Welcome to Food";
  titleDiv.className = "titleDiv";
  titleDiv.style.fontSize = "30px";
  titleDiv.style.fontFamily = "sans-serif";

  let aboutDiv = document.createElement("div")
  let aboutSubDiv1 = document.createElement("div")
  aboutSubDiv1.innerHTML = "About This Restaurant"
  aboutSubDiv1.style.display = "grid";
  aboutSubDiv1.style.justifyItems = "center";
  aboutSubDiv1.style.fontFamily = "sans-serif";
  aboutSubDiv1.style.fontSize = "20px";
  aboutDiv.appendChild(aboutSubDiv1);

  let aboutSubDiv2 = document.createElement("div");
  aboutSubDiv2.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  aboutDiv.appendChild(aboutSubDiv2);

  contentDiv.appendChild(mainDiv);
  mainDiv.appendChild(titleDiv);
  mainDiv.appendChild(aboutDiv);
  console.log("hello")
}

function makeTab2(){
  let mainDiv = makeMainDiv();

  let menuDiv1 = document.createElement("div");
  menuDiv1.innerHTML = "Welcome to Food";
  menuDiv1.className = "menuDiv1 ";
  menuDiv1.style.fontSize = "30px";
  menuDiv1.style.fontFamily = "sans-serif";

  contentDiv.appendChild(mainDiv);
  mainDiv.appendChild(menuDiv1);

}

function makeTab3(){
  clearTab();
  let mainDiv = makeMainDiv();

  let titleDiv = document.createElement("div");
  titleDiv.innerHTML = "Contact Us";
  titleDiv.className = "titleDiv";
  titleDiv.style.fontSize = "30px";
  titleDiv.style.fontFamily = "sans-serif";

  let contactDiv1 = document.createElement("div");
  contactDiv1.innerHTML = "Mister Chef"
  contactDiv1.style.fontSize = "30px";
  contactDiv1.style.fontFamily = "sans-serif";

  let p = document.createElement('p');
  p.className = "chef";
  p.innerHTML = "Chef";
  contactDiv1.appendChild(p);

  p = document.createElement('p');
  p.className = "phone";
  p.innerHTML = "800-867-5309";
  contactDiv1.appendChild(p);

  p = document.createElement('p');
  p.className = "email";
  p.innerHTML = "misterRealEmail@email.org";
  contactDiv1.appendChild(p);

  contentDiv.appendChild(mainDiv);
  mainDiv.appendChild(titleDiv);
  mainDiv.appendChild(contactDiv1);

}

function makeMainDiv(){
  let mainDiv = document.createElement("div");
  mainDiv.id = "mainDiv";
  mainDiv.style.gridRowStart = '2';
  mainDiv.style.gridColumn= '1/4';
  mainDiv.style.border = "2px solid black";
  mainDiv.style.display = "grid";
  mainDiv.style.width = '65%';
  mainDiv.style.justifyItems = "center";
  mainDiv.style.gridTemplateRows = "1fr 2fr 2fr";

  return mainDiv;
}



function clearTab(){
  while(contentDiv.childNodes.length > 1){
    contentDiv.removeChild(contentDiv.lastChild);
  }
}

//make tabs
let makeTabFunctionArray = [makeTab1, makeTab2, makeTab3];
for(let i = 0; i < 3; i++){
  let tab = document.createElement("div");
  tab.innerText = `tab${i}`;
  tabContainer.appendChild(tab);

  tab.addEventListener("click", makeTabFunctionArray[i]);
}


makeTab3();