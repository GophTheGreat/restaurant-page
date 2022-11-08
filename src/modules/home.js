import { clearTab } from "../index";
import { makeMainDiv } from "../index";

function makeHome(){
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

export { makeHome };