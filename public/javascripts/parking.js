var editingSpotsId;
var allSpots = [];

var API_URL = {
/* 	ADD: 'data/parkingData.json',
	READ: 'data/parkingData.json', */

//	ADD: "spots/add",	//	CREATE
	READ: "spots"
//	UPDATE: "spots/update",
//	DELETE: "spots/delete"
};

var API_METHOD = {
/* 	ADD: 'POST' */

//	CREATE: "POST",
	READ: "GET"
//	UPDATE: "PUT",
//	DELETE: "DELETE"
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


// TODO: ADD /CREATE new record in "spots".  http://localhost:3000/spots/add
// TODO: UPDATE record in "spots".  http://localhost:3000/spots/update
// TODO: DELETE record from "spots".  http://localhost:3000/spots/delete


// --END-- Data transfer handling.



  


