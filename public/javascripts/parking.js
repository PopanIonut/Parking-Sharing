
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
var API_URL = {
	ADD: 'data/parkingData.json',
	READ: 'data/parkingData.json',
};

var API_METHOD = {
	ADD: 'POST'
};

fetch(API_URL.READ).then(function (r) {
	return r.json()
}).then(function (parkingData) {
	allPersons = parkingData;
	display(parkingData);
})

function display(persons) {
	var list = persons.map(function (person) {
		return `<tr data-id="${person.id}">
			<td>${person.town}</td>
            <td>${person.adress}</td>
            <td>${person.from}</td>
            <td>${person.until}</td>
            </tr>`;
	});
	document.querySelector('#addresses tbody').innerHTML = list.join('');
}
// --END-- Data transfer handling.



  


