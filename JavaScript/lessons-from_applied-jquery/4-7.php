<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;
	charset=utf-8" />
	<title>Twitter Widget</title>
	<script type="text/javascript" src="jq/jquery-1.9.1.min.js"></script>
	<style="text/css">
		body { background-color: #FFFFCC;}
		#tw {
			position: relative;
			width: 350px;
			left: 50%;
			margin-left: 175px;
		}
		.tweet {
			font-family: "Lucida Grande", "Arial Unicode MS", sans-serif;
			width: 350px;
			background-color: #99FFCC;
			padding: 5px;
			border-right: 2px solid #66CC99;
			border-bottom: 3px solid #66CC99;
			margin-bottom: 2px;
		}
	</style>
</head>
<body>
	<div id="tw"></div>
        <script type="text/javascript">
        $(document).ready(function() {
            var twitterURL = 'http://twitter.com/statuses/user_timeline.json?screen_name=jgallardo2600&count=10&callback=?'; 
            $.getJSON(twitterURL, function(data){
            	$.each(data, function(i, item){
                	var tweetText = item.text;
                   	tweetText = tweetText.replace(/http:\/\/\S+/g, '<a href="$&" target="_blank">$&</a>');
                   	tweetText = tweetText.replace(/(@)(\w+)/g, ' $1<a href="http://twitter.com/$2" target="_blank">$2</a>');
                   	tweetText = tweetText.replace(/(#)(\w+)/g, ' $1<a href="http://search.twitter.com/search?q=%23$2" target="_blank">$2</a>');
                   	$("#tw").append('<div class="tweet">'+tweetText +'</div>');
                 });
            });                                       
        });
        </script>
</body>
</html>