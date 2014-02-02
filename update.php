<?php 
	echo "test";
	exec('git pull -v', $output);
	print_r($output);
?>
