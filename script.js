//your code here!
let ol = document.getElementById("infi-list");
let currentItem = 1;
function addItems(){
	for(let i=0 ; i<10 ; i++){
		let li = document.createElement("li");
		li.innerText = `Item ${currentItem++}`;
		ol.append(li);
	}
}
addItems();
ol.addEventListener("scroll", onScroll);
function addTwoItems(){
	for(let i=0 ; i<2 ; i++){
		let li = document.createElement("li");
		li.innerText = `Item ${currentItem++}`;
		ol.append(li);
	}
}
function onScroll(){
	let totalHeight = ol.scrollHeight;
	let scrollHeight = ol.clientHeight;
	let topHeight = ol.scrollTop;
	let below = totalHeight - scrollHeight - topHeight;
	if(below < 1) addTwoItems();
}