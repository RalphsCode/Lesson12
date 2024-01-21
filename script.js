console.log('JS is running');

const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
let typedKeys = ''; 		// string to contain the typed letters

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
// use the map method to change the fruit array to lowercase
let fruitArr = fruit.map((function(item) {
	return item.toLowerCase();
	}), [])


function search(typedKeys) {
	let results = [];    // Stores the fruits that match the typed letters
	// Filter the fruit array to only include matches to the typed letters
	const matchingFruits = fruitArr.filter(function(val){
		return val.includes(typedKeys);
	});
	results.push(matchingFruits);
	console.log(`results array = ${results}`);
	// Return the array of fruits that match the typed letters
	showSuggestions(...results);
}

function searchHandler(e) {
	console.log(`${e.key} key has been clicked.`);
	// Check that the clicked key is a letter
	if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
		// a letter was keyed, add it to array and set to lowercase
		typedKeys = (typedKeys + e.key).toLowerCase();
		console.log(`typedKeys = ${typedKeys}`);
		// call the search function passing in the typed letters
		search(typedKeys);}
}

function showSuggestions(results, inputVal) {
	// Clear any previous suggestions
	suggestions.innerHTML = '';
	// add the result elements as bullet points
		for (sugg of results){
			const newLi = document.createElement('li');
			newLi.innerText = sugg;
			suggestions.appendChild(newLi);
		}
}

function useSuggestion(e) {
	const clickedFruit = e.target.textContent;
	console.log(`selected = ${clickedFruit}`);
	document.getElementById('fruit').value = clickedFruit;
	suggestions.innerHTML = '';
	typedKeys = [];
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);