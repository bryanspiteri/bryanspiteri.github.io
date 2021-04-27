// Tell the css that we have javascript enabled
document.body.classList.add("js");

var videoRoot = document.getElementsByClassName('welcome')[0];
var backgroundVideo = videoRoot.getElementsByTagName('video')[0];

function fadeOutOnScroll(element, applyTo) {
	if (!element) {
		return;
	}
	
	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;
	
	var opacity = 1;
	
	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}
	
	if (opacity >= 0) {
		applyTo.style.opacity = opacity;
		applyTo.style.display = "block";
	}
	else {
		applyTo.style.display = "none";
	}
}

function scrollHandler() {
	fadeOutOnScroll(videoRoot, backgroundVideo);
}

window.addEventListener('scroll', scrollHandler);

// Typing effect
var skills = [
	"graphics programming",
	"shaders",
	"C#",
	"vulkan",
	"game development",
];

const TypingMode = {"type":0, "idle":1, "delete":2}
if (Object.freeze) { Object.freeze(TypingMode); }
var programmingTxt = document.getElementsByClassName('intro dynamic')[0];
var caret = document.getElementsByClassName('intro dynamic')[1];
var currentSkill = 0;
var i = programmingTxt.innerHTML.length;
var typing = TypingMode.idle;
var typeDelay = 57.7;

function typeSkill()
{
	var length = programmingTxt.innerHTML.length;

	// Determine what we have to do
	// Idle mode
	if (typing === TypingMode.idle)
	{
		typing = TypingMode.delete;
		setTimeout(typeSkill, 5000); //5s delay
	}
	else if (typing === TypingMode.type)
	{
		caret.classList.remove("blink");
		programmingTxt.setAttribute('aria-label', skills[currentSkill]);
		if (i < skills[currentSkill].length) {
			programmingTxt.innerHTML += skills[currentSkill].charAt(i);
			i++;
			setTimeout(typeSkill, typeDelay); //50ms delay
		}
		else if (i === skills[currentSkill].length)
		{
			typing = TypingMode.idle;
			caret.classList.add("blink");
			setTimeout(typeSkill, typeDelay); //2s delay
		}
	}
	else if (typing === TypingMode.delete)
	{
		caret.classList.remove("blink");
		if (i != 0) {
			programmingTxt.innerHTML = skills[currentSkill].substr(0, i - 1);
			i--;
			setTimeout(typeSkill, typeDelay); //50ms delay
		}
		else
		{
			currentSkill++;
			if (currentSkill > skills.length - 1)
			{
				currentSkill = 0;
			}
			typeDelay = Math.max(364 / skills[currentSkill].length + skills[currentSkill].length * 2, 47);
			typing = TypingMode.type;
			caret.classList.add("blink");
			setTimeout(typeSkill, 2000); //2s delay
		}
	}
}

typeSkill();
// Remove nodraw rule to make caret visible
caret.classList.remove("nodraw");