var editingSpotsId;
var allSpots = [];
const lgData = [];

var API_URL = {
	ADD: "spots/add",	//	CREATE
	READ: "spots",
	LOGIN: "login",
	BOOK: "spots/book",
	UPDATE: "spots/update",
	DELETE: "spots/delete"
};

var API_METHOD = {
	ADD: "POST",	//	CREATE
	READ: "POST",
	LOGIN: "POST",
	BOOK: "POST",
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


// Login handlers
function getUser() {
	return JSON.parse(localStorage.getItem('user'));
}

function clickLogin(){
	console.warn("clicked on login", this);	

	var lgPhone = document.querySelector("[name=lgPhone]").value;
	var lgEmail = document.querySelector("[name=lgMail]").value;
	var lgCar = document.querySelector("[name=lgCar]").value;
	console.warn("Click Login passes data: \n Phone: ", + lgPhone + " |Email: " + lgEmail + " |Car: " + lgCar);

	if(lgPhone == "" || lgEmail == "" || lgCar == "") {
		alert("Completați toate !");
		return false;
	} else {
		submitLogin(lgPhone, lgEmail, lgCar);
	}
};

function submitLogin(phone, email, car_nr){	
	let body = null;
	const method = API_METHOD.LOGIN;

	if (method === "POST") {
		body = JSON.stringify({ phone, email, car_nr });
	}

	fetch(API_URL.LOGIN, {
		method, body, headers: { "Content-Type": "application/json" }
	}).then(function (resp) {
		return resp.json()
	}).then(function (loginData) { // = the succesfully returned "resp"-onse.
		console.log("Login input: ", loginData);
		//lgData = loginData;
		//submitLogin(loginData);
		console.log("lgData: ", lgData);

		// check login input validity vs. DB data.
		if(loginData && loginData.length > 0) {
            const user = loginData[0];
            localStorage.setItem('user', JSON.stringify(user));
            window.location = "index.html";
        } else {
            console.warn("Invalid data!");
            localStorage.clear();
        }
	})
};

if (document.querySelector("#addresses tbody")) {
	//while (!localStorage.getItem('user')) {
		if (localStorage.getItem('user')) {
			console.log("login ok");
			//searchSpotReq(city, area, address);
			document.getElementsByName("homePage")[0].style.display = "block";
			//document.getElementById("searchPage").style.display="none";
			searchSpot();
		} else {
			console.log("login not");
			//document.getElementById("loginHome").setAttribute("data-page", "loginPage");
			//document.getElementsByName("homePage")[0].style.display = "none";
			document.getElementsByName("loginPage")[0].style.display = "block";
		}
	//}
}
// --END-- Login functions.


//TODO: Search:
// 1. o functie search spots request;
// 2. search spots (citeste cele 3 inputuri si apeleaza functia
//din searchSpotReq); sa apeleaza automat.
 

// "Spots" DB Data transfer handlers:
// Search request on page initialization.
function searchSpotReq(city, area, address){
	//var queryStr = "?city=Cluj&area=Gruia?address=Str. Buhusi";

	//fetch(API_URL.READ_SPOTS).then(function (resp) {

	const method = API_METHOD.READ;
	if (method === "POST") {
		body = JSON.stringify({ city, area, address });
	}

	fetch(API_URL.READ, {
		method, body, headers: { "Content-Type": "application/json" }
	}).then(function (resp) {
		return resp.json()
	}).then(function (parkingData) { // = the succesfully returned "resp"-onse.
		console.log("All spots: ", parkingData);
		allSpots = parkingData;
		displaySpots(parkingData);
	})
}

function bookSpot(id){
	const method = API_METHOD.BOOK;
	if (method === "POST") {
		body = JSON.stringify({ city, area, address }); //edit
	}

	fetch(API_URL.BOOK, {
		method, body, headers: { "Content-Type": "application/json" }
	}).then(function (resp) {
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
function searchSpot() {	/*	If the array only ever has 1 value the parrentheses can be left out.	*/	
	var city = document.getElementById("searchCity").value;
	var area = document.getElementById("searchArea").value;
	var address = document.getElementById("searchAddr").value;
	console.warn("Dynamic Search passes data: \n"+ "City: ", city , " |Area: " , area , " |Address: " , address);

	searchSpotReq(city, area, address);
};
// --END-- Search handling.

// Search, dynamic in "Spots" DB - Event listener.
function initSearch() {
	// array.
	let searchBox = document.querySelectorAll(".searchSpot");

	searchBox.forEach(function (elem) {
		elem.addEventListener("input", (e) => {
			//console.warn("Search input: " + e.target.value);
			searchSpot();
		}, true);
	});
}

function initEvents() {
	const tbody = document.querySelector("#addresses tbody");

	tbody.addEventListener("click", function(e) {
		if (e.target.className == "book") {
			const tr = e.target.parentNode.parentNode;
			const id = tr.getAttribute("data-id");
			
			console.warn("Parent?", id);

			bookSpot(id);
		}
		//else release spot..
	});
}

initSearch();
initEvents();
