var editingSpotsId;
var allSpots = [];
const lgData = [];

var API_URL = {
	ADD: "spots/add",	//	CREATE
	READ_SPOTS: "spots",
	READ_PEOPLE: "login",	// login data is in the "people" DBT.
	UPDATE: "spots/update",
	DELETE: "spots/delete"
};

var API_METHOD = {
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


// Login handler
fetch(API_URL.READ_PEOPLE).then(function (resp) {
	return resp.json()
}).then(function (loginData) { // = the succesfully returned "resp"-onse.
	console.log("Login input: ", loginData);
	lgData = loginData;
	//submitLogin(loginData);
	console.log("lgData: ", lgData);
})

function clickLogin(){
	console.warn("clicked on login", this);	

	var lgPhone = document.querySelector("[name=lgPhone]").value;
	var lgEmail = document.querySelector("[name=lgMail]").value;
	var lgCar = document.querySelector("[name=lgCar]").value;
	console.warn("Click Login passes data: Phone: ", + lgPhone + " |Email: " + lgEmail + " |Car: " + lgCar);

	if(lgPhone == "" || lgEmail == "" || lgCar == "") {
		alert("Completați toate !");
		return;
	} else {
		submitLogin(lgPhone, lgEmail, lgCar);
	}
};

function submitLogin(lgPhone, lgEmail, lgCar){
	console.warn("Submit Login got data: ", lgPhone + " " + lgEmail + " " + lgCar);
	console.log("Matching id: ", lgData.id);
	// TODO //
	//var body = JSON.stringify({ lgEmail, lgCar, lgPhone });
};
// --END-- Login functions.


// "Spots" DB Data transfer handlers:
fetch(API_URL.READ_SPOTS).then(function (resp) {
	return resp.json()
}).then(function (parkingData) { // = the succesfully returned "resp"-onse.
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
				<a href="#" class="book" tabindex="-1">Rezervă</a>
			</td>
		</tr>`;
	});
	document.querySelector('#addresses tbody').innerHTML = list.join('');
}

// "Save" button onclick event.
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

	allSpots.push({		// DB field names are commented.
		id,
		cityTown: cityTown,	// city
		area: area,	// area
		strAddress: strAddress,	// address
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
const searchSpot = value => {	/*	If the array only ever has 1 value the parrentheses can be left out.	*/
	value = value.toLowerCase().trim();
	const filtered = allSpots.filter(spot => {
		return spot.cityTown.toLowerCase().includes(value) ||
		spot.area.toLowerCase().includes(value) ||
		spot.strAddress.toLowerCase().includes(value);
	});
	displaySpots(filtered);
};

/* const searchArea = value => {
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
}; */
// --END-- Search handling.

// Delete, Edit & Search "Spots" DB - Event listeners.
function initEvents() {
	const tbody = document.querySelector("#addresses tbody");
	const searchBox = document.querySelector(".searchSpot");

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
		searchSpot(e.target.value);
		//searchCity(e.target.value);
		//searchArea(e.target.value);
		//searchAddress(e.target.value);
	});
}
initEvents();
