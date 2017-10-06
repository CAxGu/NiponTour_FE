<?php

require ($_SERVER['DOCUMENT_ROOT'] . '/2ndoDAW/NiponTour_FrontEnd/modules/travels/model/BLL/travel_bll.class.singleton.php');

class travel_model {
    private $bll;
    static $_instance;
    
    private function __construct() {
        $this->bll = travel_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self))
            self::$_instance = new self();
        return self::$_instance;
    }
    
    public function list_travel() {
        return $this->bll->list_travel_BLL();
    }
    
    public function details_travel($id) {
        return $this->bll->details_travel_BLL($id);
    }

}
