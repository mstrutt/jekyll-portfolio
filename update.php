<?php 
	echo "test";
	exec('git pull -v && grunt build -v', $output);
	print_r($output);
?>
