var body = document.getElementsByTagName("BODY");
	for (var i = 0; i < newDictionary.length; i++) {
			var word = new RegExp(newDictionary[i].word, 'i');
			var result = body[0].innerHTML.search(word);
					if (result === -1 || result === 0) {
					continue;
				};
			var sub = body[0].innerHTML.substring(result, (result+newDictionary[i].word.length));
			var rewrite = body[0].innerHTML.replace(sub, "<span class=" + "def" + ">" + sub + "<span class=" + "defBox" + ">" + newDictionary[i].defOne + "; " + newDictionary[i].defTwo + "</span>" + "</span>");

			body[0].innerHTML = rewrite;
	};