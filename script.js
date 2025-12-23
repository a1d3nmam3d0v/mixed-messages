const looks = ["A pleated schoolgirl skirt and pink hair puffs", "A skin-tight red latex catsuit", "A live albino python draped over her shoulders", "A pink bob wig and big sunglasses", "A floor-length patchwork denim gown", "A sparkly ringmaster jacket and top hat", "A blue waitress uniform with a 'Britney' nametag", "A bridal veil and a 'Boy Toy' belt buckle"];

const locations = ["in a high school hallway", "on a desert-scape on Mars", "under the hot lights of the VMA stage", "at a gastation", "on the 2001 AMA red carpet", "in the center of a three-ring circus", "at a retro 1950s diner", "on top of a giant wedding cake"];

const actions = ["hitting you baby one more time.", "dropping the Heart of the Ocean in the ocean.", "being a slave for you.", "making a 5AM Red Bull run.", "looking like a Y2K dream.", "cracking the whip like a master.", "making a scene in 'You Drive Me Crazy'.", "kissing Madonna."];

let scenario = (arr) => {
	let scenario = [];
	scenario.push(getRandomElement(arr));
};

const getRandomElement = (arr, arr2, arr3) => {
	const look = Math.floor(Math.random() * arr.length);
	const place = Math.floor(Math.random() * arr2.length);
	const action = Math.floor(Math.random() * arr3.length);
	return `${arr[look]} ${arr2[place]} ${arr3[action]}`;
};

getRandomElement(looks, locations, actions);

console.log(getRandomElement(looks, locations, actions));
