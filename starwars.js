$(document).ready(function() {
	// Variables for animation
	var divCrawler = $('div#crawler');
	var divMain = $('div#main');

	// jQuery listener with conditional mastermind methods
	$('.adventure').on('click', function(event) {
		event.preventDefault();
		var originalCrawl = prompt("Which movie? A New Hope (IV), The Empire Strikes Back (V), or Return of the Jedi (VI).", "Enter Roman numerals or you will break it.").toUpperCase();
		if (originalCrawl === aNewHope.episode) {
			GenerateCrawl.forIV();
			doCrawler(aNewHope);
		}
		else if (originalCrawl === theEmpireStrikesBack.episode) {
			GenerateCrawl.forV();
			doCrawler(theEmpireStrikesBack);
		}
		else if (originalCrawl === returnOfTheJedi.episode) {
			GenerateCrawl.forVI();
			doCrawler(returnOfTheJedi);
		}
		else {
			return returnError(originalCrawl);
		}
	});

	// Dynamcally generate properties for every new object
	function StarWars(properties) {
		var $this = this;
		for (var i in properties) {
			(function(i) {
				$this[i] = properties[i]
			}) (i);
		}
	};

	// Create objects
	var aNewHope = new StarWars({
		title: "A New Hope",
		releaseYear: 1977,
		episode: "IV"
	});

	var theEmpireStrikesBack = new StarWars({
		title: "The Empire Strikes Back",
		releaseYear: 1980,
		episode: "V"
	});

	var returnOfTheJedi = new StarWars({
		title: "Return of the Jedi",
		releaseYear: 1983,
		episode: "VI"
	});

	// Collection of get/set functions for mad libs
	var MadLibs = {
		setVader: function() {
			return prompt("Who shall play Vader?");
		},
		setLuke: function() {
			return prompt("Who should be Luke Skywalker?");
		},
		setEmpire: function() {
			return prompt("What is the name of your evil empire?").toUpperCase();
		},
		setDeathStar: function() {
			return prompt("What is the name of your superweapon space station?").toUpperCase();
		},
		setPrincess: function() {
			return prompt("Who will be your princess? Name only");
		},
		setHan: function() {
			return prompt("Who will be your Han Solo?");
		},
		setJabba: function() {
			return prompt("Who will be your gangster?");
		}
	}

	// Collection of functions to generate crawl text
	var GenerateCrawl = {
		forIV: function() {
			aNewHope.galacticEmpire = MadLibs.setEmpire();
			aNewHope.deathStar = MadLibs.setDeathStar();
			aNewHope.princessLeia = MadLibs.setPrincess();
			aNewHope.crawl = ["It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil ", aNewHope.galacticEmpire, ". During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the ", aNewHope.deathStar, ", an armored space station with enough power to destroy an entire planet. Pursued by the Empire’s sinister agents, Princess ", aNewHope.princessLeia ," races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy..."]
		},
		forV: function() {
			theEmpireStrikesBack.deathStar = MadLibs.setDeathStar();
			theEmpireStrikesBack.lukeSkywalker = MadLibs.setLuke();
			theEmpireStrikesBack.darthVader = MadLibs.setVader();
			theEmpireStrikesBack.crawl = ["It is a dark time for the Rebellion. Although the ", theEmpireStrikesBack.deathStar, "has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy. Evading the dreaded Imperial Starfleet, a group of freedom fighters led by", theEmpireStrikesBack.lukeSkywalker, "has established a new secret base on the remote ice world of Hoth. The evil lord", theEmpireStrikesBack.darthVader, ", obsessed with finding young", theEmpireStrikesBack.lukeSkywalker, ", has dispatched thousands of remote probes into the far reaches of space..."]
		},
		forVI: function() {
			returnOfTheJedi.lukeSkywalker = MadLibs.setLuke();
			returnOfTheJedi.hanSolo = MadLibs.setHan();
			returnOfTheJedi.jabba = MadLibs.setJabba();
			returnOfTheJedi.galacticEmpire = MadLibs.setEmpire();
			returnOfTheJedi.deathStar = MadLibs.setDeathStar();
			returnOfTheJedi.crawl = [returnOfTheJedi.lukeSkywalker, "has returned to his home planet of Tatooine in an attempt to rescue his friend", returnOfTheJedi.hanSolo, "from the clutches of the vile gangster", returnOfTheJedi.jabba,". Little does", returnOfTheJedi.lukeSkywalker, "know that the", returnOfTheJedi.galacticEmpire, "has secretly begun construction on a new armored space station even more powerful than the first dreaded", returnOfTheJedi.deathStar, ". When completed, this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy..."]
		}
	}

	// Displays crawler on screen, takes StarWars object as argument
	function doCrawler(movie){
		divMain.empty();
		divCrawler.append("<h3 class='firstcrawl'>A long time ago in a galaxy far, far away...</h3> <h1>STAR WARS</h1> <h2>Episode " + movie.episode + "</h2> <h2 class='title'>" + movie.title + "</h2> <div class='nextcrawl'>" + movie.crawl.join(" ") + "</div>").animate({top: "-=2300px"}, 35000);
	}

	// Returns errors from bad user input for conditionals
	function returnError(error) {
		alert("Uhoh! We have a problem with '" + error + "'.");
	}

});
