CREATE DATABASE  IF NOT EXISTS `travel_shop` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `travel_shop`;
-- MySQL dump 10.13  Distrib 5.7.19, for Linux (x86_64)
--
-- Host: localhost    Database: NiponTour
-- ------------------------------------------------------
-- Server version	5.7.19-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `referencia` varchar(255) NOT NULL,
  `pais` varchar(255) DEFAULT NULL,
  `provincia` varchar(255) DEFAULT NULL,
  `ciudad` varchar(255) DEFAULT NULL,
  `precio` varchar(255) DEFAULT NULL,
  `oferta` varchar(20) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `f_sal` varchar(255) DEFAULT NULL,
  `f_lleg` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `referencia_UNIQUE` (`referencia`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'A100','ES','03','Petrer','70','No','Array','09-17-2019','09-24-2019','media/paisaje1.jpg'),(2,'A101','ES','03','Petrer','70','No','Array','09-17-2019','09-24-2019','media/paisaje2.jpg'),(3,'A103','ES','03','Petrer','70','No','Array','09-17-2019','09-24-2019','media/paisaje3.jpg'),(4,'A104','ES','03','Petrer','70','No','Array','09-17-2019','09-24-2019','media/paisaje4.jpg'),(5,'A105','ES','03','Petrer','70','No','Array','09-17-2019','09-24-2019','media/paisaje5.jpg'),(6,'A106','ES','03','Petrer','70','No','Array','09-17-2019','09-24-2019','media/paisaje1.jpg'),(7,'A107','ES','03','Petrer','70','No','Array','09-17-2019','09-24-2019','media/paisaje2.jpg'),(8,'A108','ES','03','Petrer','70','No','Array','09-17-2019','09-24-2019','media/paisaje3.jpg'),(9,'A109','ES','03','Petrer','70','No','Array','09-17-2019','09-24-2019','media/paisaje4.jpg'),(10,'A110','ES','03','Petrer','70','No','Array','09-17-2019','09-24-2019','media/paisaje5.jpg'),(11,'A111','ES','03','Petrer','70','No','Array','09-17-2019','09-24-2019','media/paisaje1.jpg'),(12,'A112','ES','03','Petrer','70','No','Array','09-17-2019','09-24-2019','media/paisaje2.jpg'),(13,'A113','ES','03','Petrer','70','No','Array','09-17-2019','09-24-2019','media/paisaje3.jpg'),(14,'A114','ES','03','Petrer','70','No','Array','09-17-2019','09-24-2019','media/paisaje4.jpg'),(15,'A115','ES','03','Petrer','70','No','Array','09-17-2019','09-24-2019','media/paisaje5.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-15 14:54:26