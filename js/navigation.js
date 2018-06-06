var mainElement = document.getElementById("main");
var navElements = document.getElementsByTagName("nav")[0].childNodes;

function setPage(page, element) {
	window.history.replaceState(null, null, "?" + page);

	for (var i = 0; i < navElements.length; i++) {
		if (navElements[i].getAttribute) {
			if (navElements[i].getAttribute("page") == page)
				navElements[i].setAttribute("selected", true);
			else navElements[i].removeAttribute("selected");			
		}
	}
	
	for (var i = 0; i < mainElement.childNodes.length; i++) {
		if (mainElement.childNodes[i].getAttribute || mainElement.childNodes[i].id) {
			if (mainElement.childNodes[i].id == page || (mainElement.childNodes[i].getAttribute && mainElement.childNodes[i].getAttribute("page") == page)) 
				mainElement.childNodes[i].style.display = "block";
			else mainElement.childNodes[i].style.display = "none";
		}
	}

	if (element)
		setPageElement(element);

	mainElement.style.display = null;

	if (onPage && typeof onPage == "function")
		onPage(page, element);
}

function setPageElement(elementId) {
	var element = document.getElementById(elementId);
  	if (element) {
   		element.scrollIntoView();
	
   	 	var page = getPage();
   		if (page.split('/').length > 1)
   	 		page = page.split('/')[0];
   	 	
   		window.history.replaceState(null, null, "?" + page + "/" + elementId);
   	}
}

function getPage() {
	if (window.location.search)
		return window.location.search.replace("?", "");
	else return "home";
}

var page = getPage();
if (page.split('/').length > 1) {
	var pages = page.split('/');
	setPage(pages[0], pages[1]);
} else setPage(page);
