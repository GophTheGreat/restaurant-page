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

  let titleDiv = document.createElement("div");
  titleDiv.innerHTML = "Welcome to Food";
  titleDiv.className = "titleDiv";
  titleDiv.style.fontSize = "30px";
  titleDiv.style.fontFamily = "sans-serif";

  let aboutDiv = document.createElement("div")
  aboutDiv.style.minWidth = "450px";
  aboutDiv.style.maxWidth = "80%";
  aboutDiv.style.backgroundColor = "rgb(29, 249, 189)";
  aboutDiv.style.clipPath = " polygon(100% 0, 100% 89%, 50% 100%, 0 89%, 0 0)";
  aboutDiv.style.display = "grid";
  aboutDiv.style.gridTemplateRows = "1fr 3fr 1fr";

  let aboutSubDiv1 = document.createElement("div")
  aboutSubDiv1.innerHTML = "About This Restaurant"
  aboutSubDiv1.style.display = "grid";
  aboutSubDiv1.style.justifySelf = "center";
  aboutSubDiv1.style.textAlign = "center";
  aboutSubDiv1.style.fontFamily = "sans-serif";
  aboutSubDiv1.style.fontSize = "40px";
  aboutSubDiv1.style.fontWeight = "bold";
  aboutSubDiv1.style.overflowWrap = "normal";
  aboutSubDiv1.style.width = "60%";

  aboutDiv.appendChild(aboutSubDiv1);

  let aboutSubDiv2 = document.createElement("div");
  aboutSubDiv2.innerHTML = "“Look, having nuclear—my uncle was a great professor and scientist and engineer, Dr. John Trump at MIT; good genes, very good genes, OK, very smart, the Wharton School of Finance, very good, very smart —you know, if you’re a conservative Republican, if I were a liberal, if, like, OK, if I ran as a liberal Democrat, they would say I’m one of the smartest people anywhere in the world—it’s true!—but when you’re a conservative Republican they try—oh, do they do a number—that’s why I always start off: Went to Wharton, was a good student, went there, went there, did this, built a fortune—you know I have to give my like credentials all the time, because we’re a little disadvantaged—but you look at the nuclear deal, the thing that really bothers me—it would have been so easy, and it’s not as important as these lives are (nuclear is powerful; my uncle explained that to me many, many years ago, the power and that was 35 years ago; he would explain the power of what’s going to happen and he was right—who would have thought?), but when you look at what’s going on with the four prisoners—now it used to be three, now it’s four—but when it was three and even now, I would have said it’s all in the messenger; fellas, and it is fellas because, you know, they don’t, they haven’t figured that the women are smarter right now than the men, so, you know, it’s gonna take them about another 150 years—but the Persians are great negotiators, the Iranians are great negotiators, so, and they, they just killed, they just killed us."
  aboutSubDiv2.style.fontSize = "19px";
  aboutSubDiv2.style.margin = "15px";
  
  aboutDiv.appendChild(aboutSubDiv2);
  
  let aboutSubDiv3 = document.createElement("div");
  aboutSubDiv3.innerHTML = "Chef \"The Best\" Marioluigi";
  aboutSubDiv3.style.fontSize = "24px";
  aboutSubDiv3.style.fontWeight = "bold"
  aboutSubDiv3.style.fontFamily = "sans-serif";
  aboutSubDiv3.style.display = "grid";
  aboutSubDiv3.style.justifySelf = "center";
  aboutSubDiv3.style.alignSelf = "end";
  aboutSubDiv3.style.marginTop = "45px";
  aboutSubDiv3.style.marginBottom = "45px";
  aboutDiv.appendChild(aboutSubDiv3);



  contentDiv.appendChild(mainDiv);
  mainDiv.appendChild(titleDiv);
  mainDiv.appendChild(aboutDiv);
  console.log("hello")
}

function makeTab2(){
  clearTab();
  let mainDiv = makeMainDiv();

  contentDiv.appendChild(mainDiv);

  ///////

  let menuDiv1 = document.createElement("div");
  menuDiv1.innerHTML = "Menu";
  menuDiv1.className = "menuDiv1 ";
  menuDiv1.style.fontSize = "30px";
  menuDiv1.style.fontFamily = "sans-serif";

  mainDiv.appendChild(menuDiv1);

  ///////

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
  mainDiv.style.width = '1000px';
  mainDiv.style.justifyItems = "center";
  mainDiv.style.gridTemplateRows = "35px repeat(auto-fit, minmax(400px, 1fr))";
  mainDiv.style.rowGap = "5em";
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
  tab.innerText = `tab${i}`;
  tabContainer.appendChild(tab);

  tab.addEventListener("click", makeTabFunctionArray[i]);
}


makeTab2();