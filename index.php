<?php
  $esp8266 = '192.168.43.254';
  $url = "http://$esp8266/gh/";
  $contents = file_get_contents($url);
  $contents = utf8_encode($contents);
  $results = json_decode($contents);
  print $results->{'gh'};
  $url = "http://$esp8266/gt/";
  $contents = file_get_contents($url);
  $contents = utf8_encode($contents);
  $results = json_decode($contents);
  print "|";
  print $results->{'gt'};
  $url = "http://$esp8266/digital/2/r";
  $contents = file_get_contents($url);
  $contents = utf8_encode($contents);
  $results = json_decode($contents);
  print "|";
  print $results->{'return_value'};
?>
