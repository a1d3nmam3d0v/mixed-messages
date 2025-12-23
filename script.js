const looks = ["A pleated schoolgirl skirt and pink hair puffs", "A skin-tight red latex catsuit", "A live albino python draped over her shoulders", "A pink bob wig and big sunglasses", "A floor-length patchwork denim gown", "A sparkly ringmaster jacket and top hat", "A grey hoodie and freshly-shaved bald head", "A bridal veil and a 'Boy Toy' belt buckle"];

const locations = ["at a high school", "on a desert-scape on Mars", "under the hot lights of the VMA stage", "at a gas station", "on the 2001 AMA red carpet", "in the center of a three-ring circus", "at a gas station", "on top of a giant wedding cake"];

const actions = ["hitting you baby one more time.", "playing with your heart...oops!", "being a slave for you.", "making a 5AM Red Bull run.", "looking like a Y2K dream.", "cracking the whip like a master.", "brandishing an umbrella against paparazzi.", "kissing Madonna."];

const generateBritneyMoment = () => {
	const lookIndex = Math.floor(Math.random() * looks.length);
	const locationIndex = Math.floor(Math.random() * locations.length);
	const actionIndex = Math.floor(Math.random() * actions.length);

	let message = `${looks[lookIndex]} ${locations[locationIndex]} ${actions[actionIndex]}`;

	console.log(message);

	if (lookIndex === locationIndex && locationIndex === actionIndex) {
		console.log(`\n Work, bitch! That was such an iconic moment in pop history.`);
	} else {
		console.log(`\n Not quite a match but still iconic.`);
	}
};

generateBritneyMoment();