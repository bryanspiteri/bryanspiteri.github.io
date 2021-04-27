//l10n

var en = {
	"header-title": "Bryan's Portfolio",
	"helloiam": "I'm Bryan, and I like",
	"gfxprog": "graphics programming",
	"shaders": "shaders",
	"gamedev": "game development",
	"projects": "Projects I've worked on",
	"viewcode": "View code",
	"cpuray": "CPU Raytracer",
	"liquidshader": "Liquid Shader",
	"aboutsection": "About me",
	"aboutabstract": "My name is Bryan Spiteri, and I have a passion towards graphics programming. I've been programming for the majority of my life and have always had a particular interest towards game development. I have experience writing game engines using the MonoGame framework, and I am currently in the process of learning C++ and Vulkan.",
	"contactsection": "Contact me",
	"sendemail": "Send an email",
};

var it = {
	"header-title": "Il Portafoglio di Bryan",
	"helloiam": "Mi chiamo Bryan, e mi piace",
	"gfxprog": "graphics programming",
	"shaders": "shaders",
	"gamedev": "game development",
	"projects": "Progetti che ho lavorato",
	"viewcode": "Visualizza il codice",
	"cpuray": "Raytracer CPU",
	"liquidshader": "Shader del Liquido",
	"aboutsection": "Circa me stesso",
	"aboutabstract": "My name is Bryan Spiteri, and I have a passion towards graphics programming. I've been programming for the majority of my life and have always had a particular interest towards game development. I have experience writing game engines using the MonoGame framework, and I am currently in the process of learning C++ and Vulkan.",
	"contactsection": "Contattomi",
	"sendemail": "Invia un email",
};

var userLang = navigator.language || navigator.userLanguage; 
var currentLocale = en;

function getLocalized(string)
{
	return currentLocale[string];
}

function isLocale(lang) {
	return userLang.toLowerCase().includes(lang);
}

function setLocale(lang) {
	document.documentElement.setAttribute("xml:lang", lang);
	document.documentElement.setAttribute("lang", lang);
}

function setText(elem, str){
	elem.innerText = str;
	elem.setAttribute('aria-label', str);
}

function l10n()
{
	// Set the locale
	switch (true)
	{
		case isLocale("us"):
			currentLocale = en;
			setLocale("us");
			break;
		case isLocale("it"):
			currentLocale = it;
			setLocale("it");
			break;
	}

	// Apply l10n
	document.title = getLocalized("header-title");
	setText(document.getElementsByClassName('intro')[0], getLocalized("helloiam"));
	document.getElementsByClassName('intro dynamic')[0].innerHTML = getLocalized("gfxprog");
	
	skills[0] = getLocalized("gfxprog");
	skills[1] = getLocalized("shaders");
	skills[4] = getLocalized("gamedev");

	var workDiv = document.getElementsByClassName('work')[0];
	var projects = workDiv.getElementsByClassName('project');
	workDiv.getElementsByClassName('title')[0].innerHTML = getLocalized("projects");
	projects[0].getElementsByTagName('h1')[0].innerHTML = getLocalized("cpuray");
	projects[2].getElementsByTagName('h1')[0].innerHTML = getLocalized("liquidshader");

	for (var i = 0; i < projects.length; i++) {
		projects[i].getElementsByTagName('span')[0].innerHTML = getLocalized("viewcode");
	}

	document.getElementsByClassName('aboutme')[0].getElementsByClassName('title')[0].innerHTML = getLocalized("aboutsection");
	document.getElementsByClassName('aboutme')[0].getElementsByTagName('p')[0].innerHTML = getLocalized("aboutabstract");

	document.getElementsByClassName('contact')[0].getElementsByClassName('title')[0].innerHTML = getLocalized("contactsection");
	document.getElementsByClassName('mail')[0].getElementsByTagName('span')[0].innerHTML = getLocalized("sendemail");
	
}

//window.addEventListener("load", l10n);