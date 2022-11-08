import { clearTab } from "../index";
import { makeMainDiv } from "../index";
import foodimg1 from './../../assets/Food1.jpg'
import foodimg2 from './../../assets/Food2.jpg'
import foodimg3 from './../../assets/Food3.jpg'
import foodimg4 from './../../assets/Food4.jpg'

export function makeMenu(){
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
