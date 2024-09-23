<?php
$dbhost='localhost';
$dbuser='root';
$dbpass='';
$dbname='test';
/* es muy importante el orden*/
$mysqli= new mysqli ($dbhost, $dbuser,$dbpass, $dbname);

  if ($mysqli->connect_errno){
    printf("Connection failed", $mysqli ->connect_error);
  }
    printf( "Connect successful <br/>");
  /* para creacion */ 
$sql ="create table testConnection (id int , name varchar(50), fullname varchar(50))";
  if($mysqli ->query($sql)){
    printf("Create table perfectly ");
  }
  if($mysqli ->errno){
     printf("table not created ", $mysqli ->error);
  }
    $mysqli->close();
?>


 