<?php
class travel_dao {
    static $_instance;

    private function __construct() {
        
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self))
            self::$_instance = new self();
        return self::$_instance;
    }
    
    public function list_travel_DAO($db) {
        $sql = "SELECT * FROM products";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        
    }
    
    public function count_travel_DAO($db) {
        $sql = "SELECT count(*) as totalviajes FROM products";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        
    }

    public function limit_travel_DAO($db,$values) {
        $sql = "SELECT * FROM products ORDER BY id ASC LIMIT $values[0],$values[1]";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        
    }

    public function details_travel_DAO($db,$id) {
        $sql = "SELECT * FROM products WHERE id=".$id;
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        
    }
    
}
