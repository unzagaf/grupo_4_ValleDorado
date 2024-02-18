-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: grupo_cuatro_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

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
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (1,'2024-02-17 23:08:36','2024-02-17 23:08:36','juan.perez@gmail.com','contrasena1',1,2),(2,'2024-02-17 23:10:13','2024-02-17 23:10:13','maria.gomez@gmail.com','contrasena4',2,2),(3,'2024-02-17 23:13:35','2024-02-17 23:13:35','carlos.lopez@gmail.com','contrasena789',3,1),(4,'2024-02-17 23:14:41','2024-02-17 23:14:41','greta.123@gmail.com','456258',4,1);
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (1,'2024-02-17 23:59:56','2024-02-17 23:59:56',0,2,3),(2,'2024-02-18 00:00:14','2024-02-18 00:00:14',1,1,4);
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'2024-02-17 23:04:59','2024-02-17 23:04:59','admin'),(2,'2024-02-17 23:05:11','2024-02-17 23:05:36','customer');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'2024-02-17 23:42:59','2024-02-17 23:42:59','/img/descanso_producto.jpg',1),(2,'2024-02-17 23:46:11','2024-02-17 23:46:11','/img/excursiones_producto.jpg',1),(3,'2024-02-17 23:46:11','2024-02-17 23:46:11','/img/bienvenida_producto.jfif',1),(4,'2024-02-17 23:47:04','2024-02-17 23:47:04','/img/1706647558735.webp',2),(5,'2024-02-17 23:47:04','2024-02-17 23:47:04','/img/1706647558739.jpg',2),(6,'2024-02-17 23:47:34','2024-02-17 23:47:34','/img/1706647558746.jpg',2),(7,'2024-02-17 23:47:34','2024-02-17 23:47:34','/img/1706647755495.jpg',3),(8,'2024-02-17 23:48:18','2024-02-17 23:48:18','/img/1706647755496.jpg',3),(9,'2024-02-17 23:48:18','2024-02-17 23:48:18','/img/1706647755501.jpg',3);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `includes`
--

LOCK TABLES `includes` WRITE;
/*!40000 ALTER TABLE `includes` DISABLE KEYS */;
INSERT INTO `includes` VALUES (1,'2024-02-17 23:50:25','2024-02-17 23:50:25','Asistencia al Viajero','Proporcionamos una cobertura integral que garantiza la tranquilidad y seguridad durante todo el viaje. Esto incluye atención médica en caso de emergencias, asistencia en la pérdida de equipaje, repatriación en caso de necesidad, entre otros servicios.'),(2,'2024-02-17 23:50:25','2024-02-17 23:50:25','Hoteles 5 estrellas','Ofrecemos alojamiento en los mejores hoteles de categoría 5 estrellas, garantizando comodidad, lujo y una experiencia de hospedaje excepcional para nuestros clientes.'),(3,'2024-02-17 23:51:51','2024-02-17 23:51:51','Régimen de comidas todo incluido','Nuestros paquetes de viaje incluyen una amplia variedad de opciones gastronómicas con régimen todo incluido, que abarcan desde desayunos buffet hasta cenas gourmet, permitiendo a nuestros clientes disfrutar de la gastronomía local e internacional sin prec'),(4,'2024-02-17 23:55:38','2024-02-17 23:55:38','Coordinador y Guias','Contamos con un equipo de profesionales capacitados y conocedores del destino, quienes acompañarán y orientarán a nuestros viajeros durante toda la estadía, asegurando una experiencia enriquecedora y sin contratiempos.'),(5,'2024-02-17 23:55:38','2024-02-17 23:55:59','Excursiones Segun Programa','Diseñamos itinerarios personalizados que incluyen emocionantes excursiones y actividades planificadas, adaptadas a los intereses y preferencias de nuestros viajeros, asegurando una experiencia única y memorable en cada destino visitado.\r\n');
/*!40000 ALTER TABLE `includes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product_includes`
--

LOCK TABLES `product_includes` WRITE;
/*!40000 ALTER TABLE `product_includes` DISABLE KEYS */;
INSERT INTO `product_includes` VALUES (1,'2024-02-17 23:58:42','2024-02-17 23:58:42',1,1),(2,'2024-02-17 23:58:42','2024-02-17 23:58:42',1,2);
/*!40000 ALTER TABLE `product_includes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'2024-02-17 23:19:09','2024-02-17 23:19:09','Sri Lanka','2024-01-30','2024-02-10',26623,'Cordoba_Capital',2),(2,'2024-02-17 23:19:09','2024-02-17 23:19:09','Nueva zelanda','2024-01-30','2024-02-10',360000,'cordoba_capital',3),(3,'2024-02-17 23:21:52','2024-02-17 23:21:52','Vancouver','2024-01-15','2024-02-01',400000,'Buenos Aires',5),(4,'2024-02-17 23:21:52','2024-02-17 23:21:52','New York','2024-01-22','2024-02-02',360000,'Buenos Aires',2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'2024-02-17 23:01:09','2024-02-17 23:01:09','Juan ','Perez',25366478),(2,'2024-02-17 23:01:39','2024-02-17 23:01:39','Maria ','Gomez',25366479),(3,'2024-02-17 23:02:15','2024-02-17 23:02:15','Carlos ','Lopez',25366480),(4,'2024-02-17 23:02:45','2024-02-17 23:02:45','Greta','Flores',32688963);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-17 23:04:03
