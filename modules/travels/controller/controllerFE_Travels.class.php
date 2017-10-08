<?php
session_start();
include ($_SERVER['DOCUMENT_ROOT'] . "/2ndoDAW/NiponTour_FrontEnd/utils/common.inc.php");


$path_model = $_SERVER['DOCUMENT_ROOT'] . "/2ndoDAW/NiponTour_FrontEnd/modules/travels/model/model/";
$values=array();
$items_per_group = 5;
$totalResults = loadModel($path_model, "travel_model", "count_travel");

if (isset($_GET["load"]) && ($_GET["load"]==true)) { 
    //$arrTravels = loadModel($path_model, "travel_model", "list_travel");
   
   /* if($result){
        echo json_encode ($result);    
    }else{
        header('view/inc/404.php');
    }*/

    $group_number=$_POST['group_no'];
    $position = ($group_number * $items_per_group);
    $values[0]=$position;
    $values[1]=$items_per_group;
    $limitResults = loadModel($path_model, "travel_model", "limit_travel",$values);
    $result = array('totalresults' => $totalResults, 'limitresults' => $limitResults);
   
    if($limitResults){
        echo json_encode ($result);    
    }else{
        header('view/inc/404.php');
    }
}

if (isset($_GET["loadtravel"]) && ($_GET["loadtravel"]==true)) {
    $idtravel = $_GET['idtravel'];
    $travelData = loadModel($path_model, "travel_model", "details_travel",$idtravel);
    $_SESSION['travel']=$travelData ;
    $callback='index.php?module=travels&view=DetailTravel';
    
    if($travelData){
        echo json_encode($callback);
    }else{
        header('view/inc/404.php');
    }
}

if (isset($_GET["idtravel"]) && ($_GET["idtravel"]==true)) {

    $travelValue = $_SESSION['travel'];

    if($travelValue){
        echo json_encode ($travelValue);  
    }else{
        header('view/inc/404.php');
    }
}