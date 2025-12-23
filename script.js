const looks = ["A pleated schoolgirl skirt and pink hair puffs", "A skin-tight red latex catsuit", "A live albino python draped over her shoulders", "A pink bob wig and big sunglasses", "A floor-length patchwork denim gown", "A sparkly ringmaster jacket and top hat", "A grey hoodie, shorts, and a freshly-shaven bald head", "A bridal veil and a 'Boy Toy' belt buckle"];

const locations = ["in a high school hallway", "on a desert-scape on Mars", "under the hot lights of the VMA stage", "at a gastation", "on the 2001 AMA red carpet", "in the center of a three-ring circus", "at a gastation", "on top of a giant wedding cake"];

const actions = ["hitting you baby one more time.", "playing with your heart.", "being a slave for you.", "making a 5AM Red Bull run.", "looking like a Y2K dream.", "cracking the whip like a master.", "brandishing an umbrella against paparazzi", "kissing Madonna."];

const getRandomElement = (arr) => {
	const indx = Math.floor(Math.random() * arr.length);
	return arr[indx];
};

const generateBritneyMoment = () => {
	let scenario = [];
	scenario.push(getRandomElement(looks));
	scenario.push(getRandomElement(locations));
	scenario.push(getRandomElement(actions));
	return scenario.join(" ");
};

console.log(generateBritneyMoment());