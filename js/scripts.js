$(() => {
	let prefix = "https://cors-anywhere.herokuapp.com/";
	let tweetLink = "https://twitter.com/intent/tweet?text=";
	let quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
	
	function getQuote() {
		$.getJSON(prefix + quoteUrl, createTweet);
		$.ajaxSetup({ cache: false});
	}

	function createTweet(input) {
		let data = input[0];
		let quoteText = $(data.content).text().trim();
		let quoteAuthor = data.title;
		if(!quoteAuthor.length) {
			quoteAuthor = "Unknown author";
		}
		let tweetText = 'Quote of the day - ' + quoteText + ' Author: ' + quoteAuthor;
		if (tweetText.length > 140) {
			getQuote();
		} else {
			let tweet = tweetLink + encodeURIComponent(tweetText);
			$('.quote').text('“'+quoteText+'”');
			$('.author').text('Author: ' + quoteAuthor);
			$('.tweet').attr('href', tweet);
		}
	}
	
	getQuote();
<<<<<<< HEAD
	}else {
		let tweet = tweetLink + encodeURIComponent(tweetText);
		$('.quote').text('“'+quoteText+'”');
		$('.author').text('Author: ' + quoteAuthor);
		$('.tweet').attr('href', tweet);
	}
}
getQuote();
$('.trigger').click(() => getQuote());
=======
	$('.trigger').click(() => getQuote());
>>>>>>> 1317b221323f3c103312f38bca568e98266aea1f
});