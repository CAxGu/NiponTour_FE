<?php
    
require ($_SERVER['DOCUMENT_ROOT'] . '/2ndoDAW/NiponTour_FrontEnd/model/Db.class.singleton.php');
require ($_SERVER['DOCUMENT_ROOT'] . '/2ndoDAW/NiponTour_FrontEnd/modules/travels/model/DAO/travel_dao.class.singleton.php');


class travel_bll {
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        $this->dao = travel_dao::getInstance();
        $this->db = Db::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self))
            self::$_instance = new self();
        return self::$_instance;
    }

    public function list_travel_BLL() {
        return $this->dao->list_travel_DAO($this->db);
    }

    public function details_travel_BLL($id) {
        return $this->dao->details_travel_DAO($this->db,$id);
    }
    
}

