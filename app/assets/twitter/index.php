<?php
	require_once('TwitterAPIExchange.php');

	/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
	$settings = array(
	    'oauth_access_token' => "153440695-EE8CuCv4Pfxh5OGOU3LEMYnNra95GCtD4EPy0NVI",
	    'oauth_access_token_secret' => "CjnW3tETsda4yQEegIhJEWqgOusa7rzb2bnxXZcLXDw",
	    'consumer_key' => "8MNSWDjeSNlJ0mJqbETBKA",
	    'consumer_secret' => "b9MkBGBeKUznXjIHoFts5sIB9pu16SumRz5IoZVQs0"
	);

	/** Perform a GET request and echo the response **/
	$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
	$getfield = '?screen_name=mstrutt_co_uk'.($_SERVER['QUERY_STRING'] !== "" ? '&'.$_SERVER['QUERY_STRING'] : "");
	$requestMethod = 'GET';
	$twitter = new TwitterAPIExchange($settings);
	$tweets = $twitter->setGetfield($getfield)
	             ->buildOauth($url, $requestMethod)
	             ->performRequest();

	echo $tweets;
?>