var editingSpotsId;
var allSpots = [];
const lgData = [];

var API_URL = {
	ADD: "spots/add",	//	CREATE
	READ_SPOTS: "spots",
	LOGIN: "login",
	UPDATE: "spots/update",
	DELETE: "spots/delete"
};

var API_METHOD = {
	ADD: "POST",	//	CREATE
	READ: "GET",
	LOGIN: "POST",
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
	
	let body = null;
	const method = API_METHOD.LOGIN;

	if (method === "POST") {
		body = JSON.stringify({ lgPhone, lgEmail, lgCar });
	}

	// Login handler
	fetch(API_URL.LOGIN, {
		method, body, headers: { "Content-Type": "application/json" }
	}).then(function (resp) {
		return resp.json()
	}).then(function (loginData) { // = the succesfully returned "resp"-onse.
		console.log("Login input: ", loginData);
		lgData = loginData;
		//submitLogin(loginData);
		console.log("lgData: ", lgData);
	})
	
};
// --END-- Login functions.

//TODO: Search:
// 1. o functie search spots request
// 2. search spots (citeste cele 3 inputuri si apeleaza functia din searchSpotReq); sa apeleaza automat
// 


// "Spots" DB Data transfer handlers:
// Search on page init.
function searchSpotReq(city, area, address){
	//var queryStr = "?city=" + city + "&area=" + area + "?address=" + address;
	
	var queryStr = "?city=Cluj&area=Gruia?address=Str. Buhusi"

	fetch(API_URL.READ_SPOTS + queryStr).then(function (resp) {
		return resp.json()
	}).then(function (parkingData) { // = the succesfully returned "resp"-onse.
		console.log("All spots: ", parkingData);
		allSpots = parkingData;
		displaySpots(parkingData);
	})
}

// Show "spots" DB data on page.
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
// --END-- "spots" DB Data transfer handling.

// Search "bar".
const searchSpot = () => {	/*	If the array only ever has 1 value the parrentheses can be left out.	*/	
	var city = document.getElementById("searchCity").value;
	var area = document.getElementById("searchArea").value;
	var address = document.getElementById("searchAddr").value;
	console.warn("Dynamic Search passes data: " +"\n"+ "City: ", city , " |Area: " , area , " |Address: " , address);

	// ?????
};
// --END-- Search handling.

// Search, dynamic in "Spots" DB - Event listener.
function initEvents() {
	// array.
	let searchBox = document.querySelectorAll(".searchSpot");

	searchBox.forEach(function (elem) {
		elem.addEventListener("input", (e) => {
			//console.warn("Search input: " + e.target.value);
			searchSpot();
		}, true);
	});
}
initEvents();
