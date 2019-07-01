var editingSpotsId;
var allSpots = [];

var API_URL = {
	/* 	ADD: 'data/parkingData.json',
		READ: 'data/parkingData.json', */

	ADD: "spots/add",	//	CREATE
	READ_SPOTS: "spots",
	READ_RESERVATIONS: "reservations",
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


function timeControl() {
	var fromTCtrl = document.querySelector('input[name="fromTime"]');
	console.log("The default STARTING time is: " + fromTCtrl.value);
	var toTCtrl = document.querySelector('input[name="toTime"]');
	console.log("The default ENDING time is: " + toTCtrl.value);
}
timeControl();


// "Spots" DB Data transfer handlers:
fetch(API_URL.READ_SPOTS).then(function (resp) {
	return resp.json()
}).then(function (parkingData) { // = the succesfully returned "resp".
	console.log("All spots: ", parkingData);
	allSpots = parkingData;
	displaySpots(parkingData);
})

// Show "spots" DB data on page.
// DB field names have underscores.
function displaySpots(parkingData) {
	var list = parkingData.map(function (spot) {
		return `<tr data-id="${spot.id}">
			<td>${spot.city}</td>
			<td>${spot.area}</td>
			<td>${spot.address}</td>
			<td>${spot.spot_nr}</td>
            <td class="t">${spot.t_from}</td>
            <td class="t">${spot.t_until}</td>
			<td>${spot.description}</td>
			<td>
				<a href="#" class="delete" tabindex="-1">&#10006;</a>
				<a href="#" class="edit" tabindex="-1">&#9998;</a>
			</td>
		</tr>`;
	});
	document.querySelector('#addresses tbody').innerHTML = list.join('');
}

function saveSpot() {
	console.log("Save spot.");

	var cityTown = document.querySelector("[name=cityTown]").value;
	var area = document.querySelector("[name=area]").value;
	var strAddress = document.querySelector("[name=strAddress]").value;
	var spotNr = document.querySelector("[name=spotNr]").value;
	var tFrom = document.querySelector("[name=fromTime]").value;
	var tUntil = document.querySelector("[name=toTime]").value;
	var description = document.querySelector("[name=description]").value;
	console.warn("Save new spot data: ", cityTown + " " + area + " " + strAddress + " " + spotNr + " " + tFrom + " " + tUntil + " " + description);

	if (editingSpotsId) {
		submitEditedSpot(editingSpotsId, cityTown, area, strAddress, spotNr, tFrom, tUntil, description);
	} else {
		submitNewSpot(cityTown, area, strAddress, spotNr, tFrom, tUntil, description);
	}
}

function submitNewSpot(cityTown, area, strAddress, spotNr, tFrom, tUntil, description) {
	console.warn("Save new spot: ", cityTown + " " + area + " " + strAddress + " " + spotNr + " " + tFrom + " " + tUntil + " " + description);

	var body = null;
	const method = API_METHOD.ADD;

	if (method === "POST") {
		body = JSON.stringify({ cityTown, area, strAddress, spotNr, tFrom, tUntil, description });
	}

	fetch(API_URL.ADD, {
		method, body, headers: { "Content-Type": "application/json" }
	}).then(function (response) {
		return response.json();
	}).then(function (status) {
		if (status.success) {
			console.warn("Saved.", status);
			inlineAddSpot(status.id, cityTown, area, strAddress, spotNr, tFrom, tUntil, description);
		} else {
			console.warn("Not saved!", status);
		}
	});
}

function submitEditedSpot(id, cityTown, area, strAddress, spotNr, tFrom, tUntil, description) {
	console.warn("Save edited spot: ", id + " " + cityTown + " " + area + " " + strAddress + " " + spotNr + " " + tFrom + " " + tUntil + " " + description);

	var body = null;
	const method = API_METHOD.UPDATE;

	if (method === "PUT") {
		body = JSON.stringify({ id, cityTown, area, strAddress, spotNr, tFrom, tUntil, description });
	}

	fetch(API_URL.UPDATE, {
		method, body, headers: { "Content-Type": "application/json" }
	}).then(function (response) {
		return response.json();
	}).then(function (status) {
		if (status.success) {
			console.warn("Saved.", status);
			inlineEditSpot(id, cityTown, area, strAddress, spotNr, tFrom, tUntil, description);
		} else {
			console.warn("Not saved!", status);
		}
	});
}

function inlineAddSpot(id, cityTown, area, strAddress, spotNr, tFrom, tUntil, description) {
	console.log("Data: ", cityTown + " " + area + " " + strAddress + " " + spotNr + " " + tFrom + " " + tUntil + " " + description);

	allSpots.push({		// DB field names have underscores.
		id,
		cityTown: cityTown,	// city_town
		area: area,	// area
		strAddress: strAddress,	// str_address
		spotNr: spotNr,	// spot_nr
		tFrom: tFrom,	// t_from
		tUntil: tUntil,	// t_until
		description: description	// description
	});
	displaySpots(allSpots);

	document.querySelector("[name=cityTown]").value = "";
	document.querySelector("[name=area]").value = "";
	document.querySelector("[name=strAddress]").value = "";
	document.querySelector("[name=spotNr]").value = "";
	document.querySelector("[name=fromTime]").value = "00:00";
	document.querySelector("[name=toTime]").value = "00:00";
	document.querySelector("[name=description]").value = "";
}

function inlineEditSpot(id, cityTown, area, strAddress, spotNr, tFrom, tUntil, description) {
	console.log("Edited Data: ", id + " " + cityTown + " " + area + " " + strAddress + " " + spotNr + " " + tFrom + " " + tUntil + " " + description);

	window.location.reload(); // reload the page and put the new data from memory to file.

	displaySpots(allPeople);

	editingPersonsId = "";

	document.querySelector("[name=cityTown]").value = "";
	document.querySelector("[name=area]").value = "";
	document.querySelector("[name=strAddress]").value = "";
	document.querySelector("[name=spotNr]").value = "";
	document.querySelector("[name=fromTime]").value = "00:00";
	document.querySelector("[name=toTime]").value = "00:00";
	document.querySelector("[name=description]").value = "";
}

function inlineDeleteSpot(id) {
	console.warn("Refresh page!", id);

	allSpots = allSpots.filter(function (spot) {
		return spot.id != id;
	});
	displaySpots(allSpots);
}

function deleteSpot(id) {
	var body = null;

	if (API_METHOD.DELETE === "DELETE") {
		body = JSON.stringify({ id });
	}

	fetch(API_URL.DELETE, {
		method: API_METHOD.DELETE,
		body: body,
		headers: { "Content-Type": "application/json" }
	}).then(function (response) {
		return response.json();
	}).then(function (status) {
		if (status.success) {
			console.warn("Removed.", status);
			inlineDeleteSpot(id);
		} else {
			console.warn("Not removed!", status);
		}
	});
}

const editSpot = function (id) {
	var spot = allSpots.find(function (p) {
		return p.id == id;
	});
	console.warn("Found: ", spot);

	document.querySelector("[name=cityTown]").value = spot.cityTown;
	document.querySelector("[name=area]").value = spot.area;
	document.querySelector("[name=strAddress]").value = spot.strAddress;
	document.querySelector("[name=spotNr]").value = spot.spotNr;
	document.querySelector("[name=fromTime]").value = spot.tFrom;
	document.querySelector("[name=toTime]").value = spot.tUntil;
	document.querySelector("[name=description]").value = spot.description;
	editingSpotsId = id;
};
// --END-- "spots" DB Data transfer handling.

// Search "bar".
const searchCity = value => {	/*	If the array only ever has 1 value the parrentheses can be left out.	*/
	value = value.toLowerCase().trim();
	const filtered = allSpots.filter(spot => {
		return spot.cityTown.toLowerCase().includes(value);
	});
	displaySpots(filtered);
};

const searchArea = value => {
	value = value.toLowerCase().trim();
	const filtered = allSpots.filter(spot => {
		return spot.area.toLowerCase().includes(value);
	});
	displaySpots(filtered);
};

const searchAddress = value => {
	value = value.toLowerCase().trim();
	const filtered = allSpots.filter(spot => {
		return spot.strAddress.toLowerCase().includes(value);
	});
	displaySpots(filtered);
};
// --END-- Search handling.

// Delete, Edit & Search "Spots" DB - Event listeners.
function initEvents() {
	const tbody = document.querySelector("#addresses tbody");
	const searchBox = document.querySelector("#search");

	tbody.addEventListener("click", function (e) {
		if (e.target.className == "delete") {
			const tr = e.target.parentNode.parentNode;
			const id = tr.getAttribute("data-id");

			console.warn("Parent?", e.target.parentNode.parentNode);
			console.warn("Parent?", id);

			deleteSpot(id);
		} else if (e.target.className == "edit") {
			const tr = e.target.parentNode.parentNode;
			const id = tr.getAttribute("data-id");

			console.warn("edit", id);

			editSpot(id);
		}
	});

	searchBox.addEventListener("input", (e) => {
		console.warn("Search input: " + e.target.value);
		searchCity(e.target.value);
		searchArea(e.target.value);
		searchAddress(e.target.value);
	});
}
initEvents();


// "reservations" DB Data transfer handlers:
fetch(API_URL.READ_RESERVATIONS).then(function (resp) {
	return resp.json()
}).then(function (bookingData) { // = the succesfully returned "resp".
	console.log("All reservations: ", bookingData);
	allReservations = bookingData;
	displayReservations(bookingData);
})

// Show "reservations" DB data on page.
// DB field names have underscores.
function displayReservations(bookingData) {
	var list = bookingData.map(function (reservation) {
		return `<tr data-id="${reservation.id}">
				<td>${reservation.person_id}</td>
				<td>${reservation.spot_id}</td>
				<td class="t">${reservation.start}</td>
				<td class="t">${reservation.ending}</td>
				<td>
					<a href="#" class="delete" tabindex="-1">&#10006;</a>
					<a href="#" class="edit" tabindex="-1">&#9998;</a>
				</td>
			</tr>`;
	});
	document.querySelector('#booking tbody').innerHTML = list.join('');
}





