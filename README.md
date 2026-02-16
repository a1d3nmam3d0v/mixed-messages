# Britney Moment Generator

A randomized message generator built for the Codecademy Mixed Messages portfolio project. Click "Gimme More" to generate random Britney Spears moments by combining actions, places, and outfits. Some combinations are iconic — collect all 7 to win.

## How It Works

Three arrays (actions, places, outfits) are randomly combined each click. If the combination matches one of 7 predefined iconic moments, it gets added to your collection. Matched items are removed from the pool so you can't find the same one twice. A progress bar and tally track how close you are to completing the collection.

## Built With

- JavaScript (ES modules)
- CSS Grid + Flexbox
- Fluid typography 

## Run Locally

Open `index.html` in a browser. Since the project uses ES modules, you'll need to serve it — the simplest way:

```
npx serve .
```

## Project Structure

```
├── index.html
├── css/
│   └── styles.css
└── js/
    ├── arrays.js
    └── script.js
```
