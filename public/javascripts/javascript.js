
function initTopMenu() {	// find all top-menu items and handle their "onclick" events.
	const links = document.querySelectorAll("#topMenu a");
	console.info(links);

	for(var i = 0; i < links.length; i++) {
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
	console.warn({pageId});
	showPage(pageId);
}

function hidePages() {
	var pages = document.querySelectorAll(".page");
	pages.forEach(function(page) {
		page.style.display = "none";
	});
}

function showPage(page) {	// sets the visibility status of the ID'd object; none = hidden, block = visible.
    console.warn(page);
    document.getElementById(page).style.display = "block";
}

initTopMenu();
