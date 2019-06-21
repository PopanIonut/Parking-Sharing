var editingSpotsId;
var allSpots = [];

var API_URL = {
/* 	ADD: 'data/parkingData.json',
	READ: 'data/parkingData.json', */

	ADD: "spots/add",	//	CREATE
	READ: "spots",
	UPDATE: "spots/update",
	DELETE: "spots/delete"
};

var API_METHOD = {
/* 	ADD: 'POST' */

	ADD: "POST",	//	CREATE
	READ: "GET",
	UPDATE: "PUT",
	DELETE: "DELETE"
};

// Top-menu handlers:
function initTopMenu() {	// find all top-menu items and handle their "onclick" events.
	const links = document.querySelectorAll("#topMenu a");
	console.info(links);

	for (var i = 0; i < links.length; i++) {
		if (links[i].hasAttribute("data-page")) {	// don't collect irrelevant anchors.
			links[i].onclick = clickTmItem;	// no "()" after the function name so the browser calls it not us.
		} else {
			continue;
		}
	}
}

function clickTmItem() {	// Click Top Menu Item.
	console.warn("clicked on menu", this);	// "this" is a variable which was just used. Here: just clicked on.
	hidePages();

	var pageId = this.getAttribute("data-page");
	console.warn({ pageId });
	showPage(pageId);
}

function hidePages() {
	var pages = document.querySelectorAll(".page");
	pages.forEach(function (page) {
		page.style.display = "none";
	});
}

function showPage(page) {	// sets the visibility status of the ID'd object; none = hidden, block = visible.
	console.warn(page);
	document.getElementById(page).style.display = "block";
}

initTopMenu();
// --END-- Top-menu functions.


function dateTimeControl() {
	var fromDtCtrl = document.querySelector('input[name="fromTime"]');
	console.log("The default STARTING date-time is: " + fromDtCtrl.value);
	var toDtCtrl = document.querySelector('input[name="toTime"]');
	console.log("The default ENDING date-time is: " + toDtCtrl.value);
}
dateTimeControl();


// Data transfer handlers:
fetch(API_URL.READ).then(function (resp) {
	return resp.json()
}).then(function (parkingData) { // = the succesfully returned "resp".
	console.log("All spots: ", parkingData);
	allSpots = parkingData;
	display(parkingData);
})

// Show data on page.
function display(parkingData) {
	var list = parkingData.map(function (spot) {
		return `<tr data-id="${spot.id}">
			<td>${spot.city_town}</td>
			<td>${spot.str_address}</td>
			<td>${spot.spot_nr}</td>
            <td class="dt">${spot.t_from.slice(0,-8).replace('T', ',  ')}</td>
            <td class="dt">${spot.t_until.slice(0,-8).replace('T', ',  ')}</td>
			<td>
				<a href="#" class="delete" tabindex="-1">&#10006;</a>
				<a href="#" class="edit" tabindex="-1">&#9998;</a>
			</td>
		</tr>`;
	});
	document.querySelector('#addresses tbody').innerHTML = list.join('');
}

function saveSpot(){
	console.log("Save spot.");

	var cityTown = document.querySelector("[name=cityTown]").value;
	var strAddress = document.querySelector("[name=strAddress]").value;
	var spotNr = document.querySelector("[name=spotNr]").value;
	var tFrom = document.querySelector("[name=fromTime]").value;
	var tUntil = document.querySelector("[name=toTime]").value;
	console.warn("Save new spot data: ", cityTown + " " + strAddress + " " + spotNr + " " + tFrom + " " + tUntil);

	if(editingSpotsId) {
		submitEditedSpot(editingSpotsId, cityTown, strAddress, spotNr,tFrom, tUntil);
	} else {
		submitNewSpot(cityTown, strAddress, spotNr,tFrom, tUntil);
	}
}

function submitNewSpot(cityTown, strAddress, spotNr,tFrom, tUntil) {
	console.warn("Save new spot: ", cityTown + " " + strAddress + " " + spotNr + " " + tFrom + " " + tUntil);
	
	var body = null;
	const method = API_METHOD.ADD;

	if(method === "POST"){
		body = JSON.stringify({ cityTown, strAddress, spotNr,tFrom, tUntil });
	}

	fetch(API_URL.ADD, { method, body, headers: {"Content-Type": "application/json"}
	}).then(function(response){
		return response.json();
	}).then(function(status){
		if(status.success){
			console.warn("Saved.", status);
			inlineAddSpot(status.id, cityTown, strAddress, spotNr,tFrom, tUntil);
		} else {
			console.warn("Not saved!", status);
		}
	});
}

function submitEditedSpot(id, cityTown, strAddress, spotNr,tFrom, tUntil) {
	console.warn("Save edited spot: ", id + " " + cityTown + " " + strAddress + " " + spotNr + " " + tFrom + " " + tUntil);
	
	var body = null;
	const method = API_METHOD.UPDATE;

	if(method === "PUT"){
		body = JSON.stringify({ id, cityTown, strAddress, spotNr,tFrom, tUntil });
	}

	fetch(API_URL.UPDATE, { method, body, headers: {"Content-Type": "application/json"}
	}).then(function(response){
		return response.json();
	}).then(function(status){
		if(status.success){
			console.warn("Saved.", status);
			inlineEditSpot(id, cityTown, strAddress, spotNr,tFrom, tUntil);
		} else {
			console.warn("Not saved!", status);
		}
	});
}

function inlineAddSpot(id, cityTown, strAddress, spotNr,tFrom, tUntil) {
	console.log("Data: ", cityTown + " " + strAddress + " " + spotNr + " " + tFrom + " " + tUntil);

	allSpots.push({		// DB field names have underscores.
		id,
		cityTown: cityTown,	// city_town
		strAddress: strAddress,	// str_address
		spotNr: spotNr,	// spot_nr
		tFrom: tFrom,	// t_from
		tUntil: tUntil	// t_until
	});
	display(allSpots);

	document.querySelector("[name=cityTown]").value = "";
	document.querySelector("[name=strAddress]").value = "";
	document.querySelector("[name=spotNr]").value = "";
	document.querySelector("[name=fromTime]").value = "2019-01-01T00:00";
	document.querySelector("[name=toTime]").value = "2019-01-01T00:00";
}

function inlineEditSpot(id, cityTown, strAddress, spotNr,tFrom, tUntil) {
	console.log("Edited Data: ", id + " " + cityTown + " " + strAddress + " " + spotNr + " " + tFrom + " " + tUntil);

	window.location.reload(); // reload the page and put the new data from memory to file.
	
	display(allPeople);

	editingPersonsId = "";

	document.querySelector("[name=cityTown]").value = "";
	document.querySelector("[name=strAddress]").value = "";
	document.querySelector("[name=spotNr]").value = "";
}

function inlineDeleteSpot(id) {
	console.warn("Refresh page!", id);

	allSpots = allSpots.filter(function(spot){
		return spot.id != id;
	});
	display(allSpots);
}

function deleteSpot(id) {
	var body = null;
	
	if(API_METHOD.DELETE === "DELETE"){
		body = JSON.stringify({ id });
	}

	fetch(API_URL.DELETE, {
		method: API_METHOD.DELETE,
		body: body,
		headers: {"Content-Type": "application/json"}
	}).then(function(response){
		return response.json();
	}).then(function(status){
		if(status.success){
			console.warn("Removed.", status);
			inlineDeleteSpot(id);
		} else {
			console.warn("Not removed!", status);
		}
	});
}

const editSpot = function(id) {
	var spot = allSpots.find(function(p){
		return p.id == id;
	});
	console.warn("Found: ", spot);

	document.querySelector("[name=cityTown]").value = spot.cityTown;
	document.querySelector("[name=strAddress]").value = spot.strAddress;
	document.querySelector("[name=spotNr]").value = spot.spotNr;
	document.querySelector("[name=fromTime]").value = spot.tFrom;
	document.querySelector("[name=toTime]").value = spot.tUntil;
	editingSpotsId = id;
};

//
// TODO: -- define constant "searchSpot" variable
//

// Delete, Edit & Search - Event listeners.
function initEvents() {
	const tbody = document.querySelector("#addresses tbody");
	const searchBox = document.querySelector("#search");

	tbody.addEventListener("click", function(e) {
		if (e.target.className == "delete") {
			const tr = e.target.parentNode.parentNode;
			const id = tr.getAttribute("data-id");
			
			console.warn("Parent?", e.target.parentNode.parentNode);
			console.warn("Parent?", id);

			deleteSpot(id);
		} else if(e.target.className == "edit") {
			const tr = e.target.parentNode.parentNode;
			const id = tr.getAttribute("data-id");

			console.warn("edit", id);

			editSpot(id);
		}
	});

	searchBox.addEventListener("input", (e) => {
		console.warn("Search input: " + e.target.value);
		searchSpot(e.target.value);
	});
}
initEvents();
// --END-- Data transfer handling.



  


