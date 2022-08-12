CREATE DATABASE  IF NOT EXISTS `shopforhome1` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `shopforhome1`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: shopforhome1
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL,
  `address` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `user_name` varchar(25) NOT NULL,
  `user_role` varchar(10) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`),
  UNIQUE KEY `UK_589idila9li6a4arw1t8ht1gx` (`phone`),
  UNIQUE KEY `UK_lqjrcobrh9jc8wpcar64q1bfh` (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'ABC','ritik@123gmail.com','ritik@123','9145656879','ritik@123','ADMIN'),(3,'ABC','priyanka@123','priyanka@123','9865988888','priyanka@123','USER'),(97,'','shyam@123gmail.com','shyam@123','7899555555','shyam@123','USER');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cart_id` int NOT NULL,
  `create_time` datetime NOT NULL,
  `total` double NOT NULL,
  `update_time` datetime NOT NULL,
  `user` int NOT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `FK2h19ugnvpw7x51hox7ia3o55t` (`user`),
  CONSTRAINT `FK2h19ugnvpw7x51hox7ia3o55t` FOREIGN KEY (`user`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,'2022-07-24 00:00:00',0,'2022-07-24 00:00:00',97),(2,'2022-07-24 00:00:00',0,'2022-07-24 00:00:00',97),(3,'2022-07-24 00:00:00',1000,'2022-07-24 00:00:00',97);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discount`
--

DROP TABLE IF EXISTS `discount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discount` (
  `discount_id` bigint NOT NULL,
  `create_time` datetime(6) NOT NULL,
  `discount_name` varchar(25) NOT NULL,
  `discount_percentage` float NOT NULL,
  `update_time` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`discount_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discount`
--

LOCK TABLES `discount` WRITE;
/*!40000 ALTER TABLE `discount` DISABLE KEYS */;
INSERT INTO `discount` VALUES (1,'2022-07-26 00:00:00.000000','SHOPFORME',20,'2022-07-26 01:01:00.000000');
/*!40000 ALTER TABLE `discount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (201);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL,
  `product_description` varchar(100) NOT NULL,
  `product_img` varchar(255) NOT NULL,
  `product_name` varchar(25) NOT NULL,
  `product_stock` int NOT NULL,
  `productprice` double NOT NULL,
  `discount` bigint DEFAULT NULL,
  `product_category` bigint DEFAULT NULL,
  `quantity` int NOT NULL,
  `cart` int DEFAULT NULL,
  `discount_id` int NOT NULL,
  `product_category_id` int NOT NULL,
  `sales` int DEFAULT NULL,
  `wishlist` int DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `FKm7ys10nfv4sd4uhp0t29y07l` (`discount`),
  KEY `FKbvdd7owwhvkamc6unq83xdcrj` (`product_category`),
  KEY `FK6dv48hqwqsx4w00fpvlef6cca` (`sales`),
  KEY `FK7trmfgd2qu69bjulvyph6xpyu` (`cart`),
  CONSTRAINT `FK6dv48hqwqsx4w00fpvlef6cca` FOREIGN KEY (`sales`) REFERENCES `sales` (`sales_id`),
  CONSTRAINT `FK7trmfgd2qu69bjulvyph6xpyu` FOREIGN KEY (`cart`) REFERENCES `cart` (`cart_id`),
  CONSTRAINT `FKbvdd7owwhvkamc6unq83xdcrj` FOREIGN KEY (`product_category`) REFERENCES `product_category` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (106,'Queen Size Bed','bed-p1.jpg','Bed without Storage',10,14999,NULL,NULL,0,1,1,79,NULL,NULL),(107,'STORAGE SPACE: 920 Litres','bed-p3.jpg','Wood Bed with Storage',20,9999,NULL,NULL,0,2,1,79,NULL,NULL),(108,'Max Loading Capacity','bed-p6.jpg','Glossy Metal Queen Bed',30,14499,NULL,NULL,0,NULL,1,79,NULL,NULL),(111,'Modern Chesterfield Design','sofa-p1.jpg','Sofa Couch',40,14999,NULL,NULL,0,NULL,1,103,NULL,NULL),(112,'3 Seater, 6\'X6\' Feet- with 2 Cushions','sofa-p2.jpg','Sofa Cum Bed',5,12499,NULL,NULL,0,NULL,1,103,NULL,NULL),(113,'Relaxing 3 seater sofa','sofa-p5.jpg','Solimo Tulip Leatherette',30,18999,NULL,NULL,0,NULL,1,103,NULL,1),(114,'Office Chair | Study Chair | Computer Chair','chair-p1.jpg','Ergonomic Chair ',15,7999,NULL,NULL,0,NULL,1,80,NULL,NULL),(115,'Home Office Desk Chair with 2D Adjustable','chair-p5.jpg','Superb Office Chair',36,10000,NULL,NULL,0,NULL,1,80,NULL,2);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_category` (
  `category_id` bigint NOT NULL,
  `category_desc` varchar(45) NOT NULL,
  `category_name` varchar(25) NOT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `UK_2us25uva2olofkk3yh8dhlq87` (`category_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES (79,'All types of Beds','Beds'),(80,'All types of chairs','Chair'),(103,'All types of Sofas','Sofa\'s'),(196,'All types of wardorbe\'s\n','Wardorbe\'s');
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales` (
  `sales_id` int NOT NULL,
  `create_time` datetime NOT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`sales_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (1,'2022-07-23 12:00:00',23),(2,'2022-07-23 12:00:00',3),(3,'2022-07-23 00:00:00',3),(156,'2022-07-26 05:30:00',2);
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `wishlist`
--

DROP TABLE IF EXISTS `wishlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishlist` (
  `wishlist_id` bigint NOT NULL,
  `create_time` datetime(6) NOT NULL,
  `product` int DEFAULT NULL,
  `user` int DEFAULT NULL,
  PRIMARY KEY (`wishlist_id`),
  KEY `FK2vy5bofpdruunu3a66h6xf725` (`product`),
  KEY `FKjp84nl5c0wbdjo41m7q634bb4` (`user`),
  CONSTRAINT `FK2vy5bofpdruunu3a66h6xf725` FOREIGN KEY (`product`) REFERENCES `product` (`product_id`),
  CONSTRAINT `FKjp84nl5c0wbdjo41m7q634bb4` FOREIGN KEY (`user`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlist`
--

LOCK TABLES `wishlist` WRITE;
/*!40000 ALTER TABLE `wishlist` DISABLE KEYS */;
INSERT INTO `wishlist` VALUES (1,'2022-07-26 00:00:00.000000',113,97),(2,'2022-07-26 00:00:00.000000',115,97);
/*!40000 ALTER TABLE `wishlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-26 19:25:12
