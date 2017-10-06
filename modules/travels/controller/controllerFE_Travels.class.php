<?php
session_start();
include ($_SERVER['DOCUMENT_ROOT'] . "/2ndoDAW/NiponTour_FrontEnd/utils/common.inc.php");
$path_model = $_SERVER['DOCUMENT_ROOT'] . "/2ndoDAW/NiponTour_FrontEnd/modules/travels/model/model/";

if (isset($_GET["load"]) && ($_GET["load"]==true)) {
    $arrTravels = loadModel($path_model, "travel_model", "list_travel");

    if($arrTravels){
        echo json_encode ($arrTravels);    
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