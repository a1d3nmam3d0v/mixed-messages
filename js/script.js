import { actions, places, outfits, iconicMoments } from "./arrays.js";

const collected = [];
const collection = iconicMoments.length;

const getRandom = (arr) => Math.floor(Math.random() * arr.length);

const generateMoment = () => {
	const actionIndex = getRandom(actions);
	const placeIndex = getRandom(places);
	const outfitIndex = getRandom(outfits);
	const action = actions[actionIndex];
	const place = places[placeIndex];
	const outfit = outfits[outfitIndex];
	const moment = `${action} ${place} ${outfit}`;
	const iconicIndex = iconicMoments.indexOf(moment);
	const isIconic = iconicIndex !== -1;

	if (isIconic) {
		actions.splice(actionIndex, 1);
		places.splice(placeIndex, 1);
		outfits.splice(outfitIndex, 1);
		iconicMoments.splice(iconicIndex, 1);
		collected.push(moment);
	}

	return { action, place, outfit, isIconic };
};

const $ = (id) => document.getElementById(id);
const btn = $("generate");
const actionEl = $("action");
const placeEl = $("place");
const outfitEl = $("outfit");
const list = $("collection-list");
const badge = $("badge");
const tally = $("tally");
const progress = $("progress");

const updateTally = () => {
	tally.textContent = `${collected.length} / ${collection} collected`;
	progress.value = collected.length;
};

const pulseBadge = (iconic) => {
	badge.textContent = iconic ? "Iconic" : "Not Iconic";
	badge.classList.remove("is-iconic", "is-not-iconic", "is-hidden");
	badge.classList.add(iconic ? "is-iconic" : "is-not-iconic");
	badge.classList.remove("is-pulse");
	void badge.offsetWidth;
	badge.classList.add("is-pulse");
};

const addToCollection = (text) => {
	const item = document.createElement("div");
	item.className = "collection-item";
	item.textContent = `\u{1F339} ${text}`;
	list.prepend(item);
};

updateTally();
badge.classList.add("is-hidden");

const showWin = () => {
	$("output").textContent = `CONGRATS 🌸🌸🌸✨✨✨ ...! You found all the iconic moments !!! 💃🏼💃🏼💃🏼🎀🎀
		Sending so much love 💋💋💋 and magic ✨✨ your way today ... STAY REBEL !! 🦋🦋🦋🍭🍦🍭👙🌹🌹🌹✨✨👗👗🥂🌸👠👠🧠👗🌹🌹🌹✨✨💃🏼💃🏼🎀🌹🌹👗💋💋🦋🍭🌹✨✨✨`;
	btn.disabled = true;
	btn.textContent = "Collection Complete!";
	pulseBadge(true);
	updateTally();
};

btn.addEventListener("click", () => {
	const { action, place, outfit, isIconic } = generateMoment();
	actionEl.textContent = action;
	placeEl.textContent = place;
	outfitEl.textContent = outfit;

	if (isIconic) {
		addToCollection(`Britney ${action} ${place} ${outfit}`);
	}

	pulseBadge(isIconic);
	updateTally();

	if (iconicMoments.length === 0) {
		showWin();
	}
});
