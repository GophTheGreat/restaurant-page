import './style.css';
import foodimg1 from './../assets/Food1.jpg'
import foodimg2 from './../assets/Food2.jpg'
import foodimg3 from './../assets/Food3.jpg'
import foodimg4 from './../assets/Food4.jpg'

let contentDiv = document.getElementById("content");
document.body.style.backgroundImage="url('../assets/GophBGOnly2x.png')";

let tabContainer = document.createElement("div");
tabContainer.className = 'tabContainer';
contentDiv.appendChild(tabContainer);

//make tab1
function makeTab1(){
  clearTab();
  let mainDiv = makeMainDiv();
  contentDiv.appendChild(mainDiv);

  /////////Title Div

  let titleDiv = document.createElement("div");
  titleDiv.innerHTML = "~Welcome to Food~";
  titleDiv.className = "header";
  mainDiv.appendChild(titleDiv);

  ////////About Div

  let aboutDiv = document.createElement("div");
  aboutDiv.className = "outer";

  let aboutDivInner = document.createElement("div");
  aboutDivInner.className = "inner";

  aboutDiv.appendChild(aboutDivInner);

  let aboutSubDiv1 = document.createElement("div")
  aboutSubDiv1.innerHTML = "About This Restaurant"
  aboutSubDiv1.className = "menusub1";
  aboutSubDiv1.style.fontSize = "40px";

  aboutDivInner.appendChild(aboutSubDiv1);

  let aboutSubDiv2 = document.createElement("div");
  aboutSubDiv2.innerHTML = `“Look, having nuclear—my uncle was a great professor and scientist and engineer, Dr. John Trump at MIT; good genes, very good genes, OK, very smart, the Wharton School of Finance, very good, very smart —you know, if you’re a conservative Republican, if I were a liberal, if, like, OK, if I ran as a liberal Democrat, they would say I’m one of the smartest people anywhere in the world—it’s true!—but when you’re a conservative Republican they try—oh, do they do a number—that’s why I always start off..."`
  aboutSubDiv2.style.fontSize = "19px";
  aboutSubDiv2.style.margin = "15px";
  aboutSubDiv2.style.color = "gold";
  
  aboutDivInner.appendChild(aboutSubDiv2);
  
  let aboutSubDiv3 = document.createElement("div");
  aboutSubDiv3.innerHTML = "Chef \"The Best\" Marioluigi";
  aboutSubDiv3.className = "menusub1";
  aboutSubDiv3.style.fontSize = "24px";
  aboutSubDiv3.style.fontWeight = "bold"
  aboutDivInner.appendChild(aboutSubDiv3);

  mainDiv.appendChild(aboutDiv);

  ////////Hour div

  let hourDiv = document.createElement("div");
  hourDiv.className = "outer"
  hourDiv.style.height = '265px';
  hourDiv.style.marginTop = '35px';
  mainDiv.appendChild(hourDiv);
  
  let hourDivInner = document.createElement("div");
  hourDivInner.className = "inner"
  hourDivInner.display = "grid";
  hourDivInner.style.gridTemplateRows = '65px repeat(5, 35px)';
  hourDivInner.style.height = '250px';
  hourDiv.appendChild(hourDivInner);

  let hourDivSub1 = document.createElement("div")
  hourDivSub1.innerHTML = "Hours"
  hourDivSub1.className = "menusub1";
  hourDivSub1.style.fontSize = "40px";
  hourDivInner.appendChild(hourDivSub1);

  let hourDivSub2 = document.createElement("div")
  hourDivSub2.innerHTML = "Mon: 0100 - 2300"
  hourDivSub2.className = "hours";
  hourDivInner.appendChild(hourDivSub2);

  let hourDivSub3 = document.createElement("div")
  hourDivSub3.innerHTML = "Tue: 0100 - 2300"
  hourDivSub3.className = "hours";
  hourDivInner.appendChild(hourDivSub3);

  let hourDivSub4 = document.createElement("div")
  hourDivSub4.innerHTML = "Wed: 0100 - 2300";
  hourDivSub4.className = "hours";
  hourDivInner.appendChild(hourDivSub4);

  let hourDivSub5 = document.createElement("div")
  hourDivSub5.innerHTML = "Thu: 0100 - 0200";
  hourDivSub5.className = "hours";
  hourDivInner.appendChild(hourDivSub5);

  let hourDivSub6 = document.createElement("div")
  hourDivSub6.innerHTML = "Fri: Closed";
  hourDivSub6.className = "hours";
  hourDivInner.appendChild(hourDivSub6);

  console.log("hello")
}

function makeTab2(){
  clearTab();
  let mainDiv = makeMainDiv();

  contentDiv.appendChild(mainDiv);

  ///////Header

  let menuDiv1 = document.createElement("div");
  menuDiv1.innerHTML = "Menu";
  menuDiv1.className = "header";

  mainDiv.appendChild(menuDiv1);

  ///////First Item

  let itemDiv1Outer = document.createElement("div");
  itemDiv1Outer.className = "outer";

  let itemDiv1 = document.createElement("div");
  itemDiv1.classList = "inner menu";

  let itemDiv1Sub1 = document.createElement("div");
  itemDiv1Sub1.classList = "menusub1";
  itemDiv1Sub1.innerHTML = "Pasghetti"


  let itemDiv1Sub2 = document.createElement("div");
  itemDiv1Sub2.classList = "menusub2";
  itemDiv1Sub2.innerHTML = "Succulent toroidal lettuce dipped in ambrosia, seared with mustard, and lovingly cooed into a coma before being wrapped in dogma and obedience"

  let itemDiv1Sub3 = document.createElement("div");
  itemDiv1Sub3.classList = "menusub3";
  let food1 = document.createElement("img");
  food1.className = "foodpic";
  food1.src = foodimg1;
  itemDiv1Sub3.appendChild(food1);

  itemDiv1Outer.appendChild(itemDiv1);
  itemDiv1.appendChild(itemDiv1Sub1);
  itemDiv1.appendChild(itemDiv1Sub2);
  itemDiv1.appendChild(itemDiv1Sub3);
  mainDiv.appendChild(itemDiv1Outer);

  ///////Second Item

  let itemDiv2Outer = document.createElement("div");
  itemDiv2Outer.className = "outer";

  let itemDiv2 = document.createElement("div");
  itemDiv2.classList = "inner menu";

  let itemDiv2Sub1 = document.createElement("div");
  itemDiv2Sub1.classList = "menusub1";
  itemDiv2Sub1.innerHTML = "Rubbish"

  let itemDiv2Sub2 = document.createElement("div");
  itemDiv2Sub2.classList = "menusub2";
  itemDiv2Sub2.innerHTML = "It's probably a tortilla with some food stuff on top of it";

  let itemDiv2Sub3 = document.createElement("div");
  itemDiv2Sub3.classList = "menusub3"
  let food2 = document.createElement("img");
  food2.className = "foodpic";
  food2.src = foodimg2
  itemDiv2Sub3.appendChild(food2);
  
  itemDiv2Outer.appendChild(itemDiv2);
  itemDiv2.appendChild(itemDiv2Sub1);
  itemDiv2.appendChild(itemDiv2Sub2);
  itemDiv2.appendChild(itemDiv2Sub3);
  mainDiv.appendChild(itemDiv2Outer);

  ///////Third Item
  let itemDiv3Outer = document.createElement("div");
  itemDiv3Outer.className = "outer";

  let itemDiv3 = document.createElement("div");
  itemDiv3.classList = "inner menu";

  let itemDiv3Sub1 = document.createElement("div");
  itemDiv3Sub1.classList = "menusub1";
  itemDiv3Sub1.innerHTML = "Food?"

  let itemDiv3Sub2 = document.createElement("div");
  itemDiv3Sub2.classList = "menusub2";
  itemDiv3Sub2.innerHTML = "Some people believe that whatever this is, is edible. Do you dare?";

  let itemDiv3Sub3 = document.createElement("div");
  itemDiv3Sub3.classList = "menusub3"
  let food3 = document.createElement("img");
  food3.className = "foodpic";
  food3.src = foodimg3
  itemDiv3Sub3.appendChild(food3);

  itemDiv3Outer.appendChild(itemDiv3);
  itemDiv3.appendChild(itemDiv3Sub1);
  itemDiv3.appendChild(itemDiv3Sub2);
  itemDiv3.appendChild(itemDiv3Sub3);
  mainDiv.appendChild(itemDiv3Outer);

  ////////Fourth Item
  let itemDiv4Outer = document.createElement("div");
  itemDiv4Outer.className = "outer";

  let itemDiv4 = document.createElement("div");
  itemDiv4.classList = "inner menu";

  let itemDiv4Sub1 = document.createElement("div");
  itemDiv4Sub1.classList = "menusub1";
  itemDiv4Sub1.innerHTML = "Meal #4"

  let itemDiv4Sub2 = document.createElement("div");
  itemDiv4Sub2.classList = "menusub2";
  itemDiv4Sub2.innerHTML = "Sausage with vegetables, thing, and plate. Served to perfection after cooking.";

  let itemDiv4Sub3 = document.createElement("div");
  itemDiv4Sub3.classList = "menusub3"
  let food4 = document.createElement("img");
  food4.className = "foodpic";
  food4.src = foodimg4
  itemDiv4Sub3.appendChild(food4);

  itemDiv4Outer.appendChild(itemDiv4);
  itemDiv4.appendChild(itemDiv4Sub1);
  itemDiv4.appendChild(itemDiv4Sub2);
  itemDiv4.appendChild(itemDiv4Sub3);
  mainDiv.appendChild(itemDiv4Outer);
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
  mainDiv.style.display = "grid";
  mainDiv.style.width = '1000px';
  mainDiv.style.justifyItems = "center";
  mainDiv.style.gridTemplateRows = "100px repeat(auto-fit, minmax(400px, 1fr))";
  mainDiv.style.rowGap = "2em";
  mainDiv.style.paddingBottom = "10px";
  mainDiv.style.paddingTop = "10px";

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
  tab.id = `tab${i}`;
  tabContainer.appendChild(tab);
  tab.className = "tab";

  tab.addEventListener("click", makeTabFunctionArray[i]);
}

let tab = document.getElementById("tab0");
tab.innerHTML = "Home";
tab = document.getElementById("tab1");
tab.innerHTML = "Menu";
tab = document.getElementById("tab2");
tab.innerHTML = "Contact";



makeTab2();