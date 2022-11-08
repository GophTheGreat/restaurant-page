import { clearTab } from "../index";
import { makeMainDiv } from "../index";

export function makeContact(){
  clearTab();
  let mainDiv = makeMainDiv();

  let titleDiv = document.createElement("div");
  titleDiv.innerHTML = "Contact Us";
  titleDiv.className = "header";
  mainDiv.appendChild(titleDiv);



  let contactDiv1Outer = document.createElement("div");
  contactDiv1Outer.classList = "outer contactOuter";
  let contactDiv1 = document.createElement("div");
  contactDiv1.classList = "inner contactInner";

  let contactDiv1Sub1 = document.createElement("div");
  contactDiv1Sub1.className = "menusub1"
  contactDiv1Sub1.innerHTML = `Chef "The Best" Marioluigi`
  contactDiv1Sub1.style.fontSize = "30px";
  contactDiv1Sub1.style.fontFamily = "sans-serif";

  let contactDiv1Sub2 = document.createElement("div");
  contactDiv1Sub2.className = "menusub1"
  contactDiv1Sub2.innerHTML = `Chef`

  let contactDiv1Sub3 = document.createElement("div");
  contactDiv1Sub3.className = "menusub1"
  contactDiv1Sub3.innerHTML = `1-800-867-5309`

  let contactDiv1Sub4 = document.createElement("div");
  contactDiv1Sub4.className = "menusub1"
  contactDiv1Sub4.innerHTML = `misterRealEmail@email.org`

  contactDiv1Outer.appendChild(contactDiv1);
  contactDiv1.appendChild(contactDiv1Sub1);
  contactDiv1.appendChild(contactDiv1Sub2);
  contactDiv1.appendChild(contactDiv1Sub3);
  contactDiv1.appendChild(contactDiv1Sub4);
  mainDiv.appendChild(contactDiv1Outer);

  /////////

  let happyface = document.createElement("div");
  happyface.innerHTML = `:)`;
  happyface.style.fontSize = "470px";
  happyface.style.fontFamily = "sans-serif";
  happyface.style.color = "gold";
  happyface.style.display = "grid";
  happyface.style.margin = "-250px"
  happyface.style.transform = "rotate(90deg)"
  happyface.style.textAlign = "center";
  happyface.style.alignContent = "center";
  happyface.style.paddingBottom = "84px";
  happyface.style.height = "550px";
  happyface.style.width = "550px";

  mainDiv.appendChild(happyface);
  contentDiv.appendChild(mainDiv);

}