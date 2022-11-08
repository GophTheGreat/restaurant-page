import './style.css';

import { makeHome } from './modules/home';
import { makeMenu } from './modules/menu';
import { makeContact } from './modules/contact';

import gophbg from './../assets/GophBGOnly2x.png';

export function makeMainDiv(){
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

export function clearTab(){

  while(contentDiv.childNodes.length > 1){
    let contentDiv = document.getElementById('contentDiv');
    contentDiv.removeChild(contentDiv.lastChild);
  }
}

function makeTabs(){
  let tabContainer = document.getElementById('tabContainer');
  //Home Button
  let tab = document.createElement("div");
  tab.id = 'homeButton';
  tab.innerHTML = "Home";
  tabContainer.appendChild(tab);
  tab.className = "tab";
  tab.addEventListener("click", makeHome);

  // //Menu Button
  tab = document.createElement("div");
  tab.id = 'menuButton';
  tab.innerHTML = "Menu";
  tabContainer.appendChild(tab);
  tab.className = "tab";
  tab.addEventListener("click", makeMenu);

  // //Contact Button
  tab = document.createElement("div");
  tab.id = 'contactButton';
  tab.innerHTML = "Contact";
  tabContainer.appendChild(tab);
  tab.className = "tab";
  tab.addEventListener("click", makeContact);
}

function init(){
  let contentDiv = document.getElementById("content");
  contentDiv.id = 'contentDiv';

  let bgimg = document.createElement('img');
  bgimg.src = gophbg;
  bgimg.id = 'bgimg';
  body.appendChild(bgimg);
 
  let tabContainer = document.createElement("div");
  tabContainer.id = 'tabContainer';
  contentDiv.appendChild(tabContainer);

  makeTabs();
  makeHome();
}

init();