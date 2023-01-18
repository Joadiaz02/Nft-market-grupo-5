-- MySQL dump 10.13  Distrib 5.7.24, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: nft_market
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.27-MariaDB

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
-- Table structure for table `categorias_productos`
--

DROP TABLE IF EXISTS `categorias_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias_productos` (
  `id_categorias_productos` int(11) NOT NULL,
  `descripcion_categoria` varchar(200) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id_categorias_productos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias_productos`
--

LOCK TABLES `categorias_productos` WRITE;
/*!40000 ALTER TABLE `categorias_productos` DISABLE KEYS */;
INSERT INTO `categorias_productos` VALUES (1,'Deportes',NULL,NULL,NULL),(2,'Metaverso',NULL,NULL,NULL),(3,'Juegos',NULL,NULL,NULL),(4,'Investigación',NULL,NULL,NULL),(5,'Mercados',NULL,NULL,NULL);
/*!40000 ALTER TABLE `categorias_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias_usuarios`
--

DROP TABLE IF EXISTS `categorias_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias_usuarios` (
  `id_categoria_usuario` int(11) NOT NULL,
  `descripcion_categoria` varchar(200) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id_categoria_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias_usuarios`
--

LOCK TABLES `categorias_usuarios` WRITE;
/*!40000 ALTER TABLE `categorias_usuarios` DISABLE KEYS */;
INSERT INTO `categorias_usuarios` VALUES (1,'Deportes',NULL,NULL,NULL),(2,'Metaverso',NULL,NULL,NULL),(3,'Juegos',NULL,NULL,NULL),(4,'Investigación',NULL,NULL,NULL),(5,'Mercados',NULL,NULL,NULL);
/*!40000 ALTER TABLE `categorias_usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalles_factura`
--

DROP TABLE IF EXISTS `detalles_factura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detalles_factura` (
  `id_detalle` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `id_facturacion` int(11) DEFAULT NULL,
  `fecha_compra` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id_detalle`),
  KEY `id_facturacionfk_idx` (`id_facturacion`),
  KEY `id_productofk_idx` (`id_producto`),
  CONSTRAINT `id_facturacionfk` FOREIGN KEY (`id_facturacion`) REFERENCES `facturacion` (`id_factura`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_productofk` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalles_factura`
--

LOCK TABLES `detalles_factura` WRITE;
/*!40000 ALTER TABLE `detalles_factura` DISABLE KEYS */;
INSERT INTO `detalles_factura` VALUES (1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `detalles_factura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facturacion`
--

DROP TABLE IF EXISTS `facturacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `facturacion` (
  `id_factura` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_orden_compra` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id_factura`),
  KEY `id_orden_compraFK_idx` (`id_orden_compra`),
  KEY `id_usuarioFK_idx` (`id_usuario`),
  CONSTRAINT `id_orden_compraFK` FOREIGN KEY (`id_orden_compra`) REFERENCES `detalles_factura` (`id_detalle`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_usuarioFK` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facturacion`
--

LOCK TABLES `facturacion` WRITE;
/*!40000 ALTER TABLE `facturacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `facturacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(50) DEFAULT NULL,
  `id_categoria_producto` int(11) DEFAULT NULL,
  `unidad_token_precio_actual` decimal(10,0) DEFAULT NULL,
  `token` varchar(20) DEFAULT NULL,
  `id_usuario_dueno` int(11) DEFAULT NULL,
  `unidad_token_precio_maximo` decimal(10,0) DEFAULT NULL,
  `descripcion_producto` varchar(200) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `imagen_producto` varchar(200) DEFAULT NULL,
  `descuento_producto` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_categoria_productoFK_idx` (`id_categoria_producto`),
  KEY `id_usuario_duenoFK_idx` (`id_usuario_dueno`),
  CONSTRAINT `id_categoria_productoFK` FOREIGN KEY (`id_categoria_producto`) REFERENCES `categorias_productos` (`id_categorias_productos`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_usuario_duenoFK` FOREIGN KEY (`id_usuario_dueno`) REFERENCES `usuarios` (`id_usuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Spider-verse',2,100,NULL,NULL,NULL,'Spider-man No way home',NULL,NULL,NULL,NULL,'5'),(3,'Lionel messi',1,500,NULL,NULL,NULL,'The goat 10',NULL,NULL,NULL,'1673668487144_user.jfif','15');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id_usuarios` int(11) NOT NULL AUTO_INCREMENT,
  `id_categoria_usuario` int(11) NOT NULL,
  `cuenta_usuario` varchar(20) NOT NULL,
  `correo_usuario` varchar(30) NOT NULL,
  `nombre_usuario` varchar(15) NOT NULL,
  `apellido_usuario` varchar(15) NOT NULL,
  `contrasena_usuario` varchar(200) NOT NULL,
  `contacto_usuario` varchar(20) NOT NULL,
  `residencia_usuario` varchar(20) NOT NULL,
  `id_categoria_preferida` int(11) NOT NULL,
  `imagen_perfil` varchar(45) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id_usuarios`),
  KEY `d_categoria_preferida_fk_idx` (`id_categoria_preferida`),
  CONSTRAINT `d_categoria_preferida_fk` FOREIGN KEY (`id_categoria_preferida`) REFERENCES `categorias_productos` (`id_categorias_productos`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (4,0,'','joacodiaz02@hotmail.com','Joaquin','Diaz','$2a$10$9VzhnkA.pjSqqut1cBk8FuRe2lT.lOL3te5UBJ6D0sat0m15c5MHy','','Argentina',1,'1673719084235_user.jfif','2023-01-11',NULL,NULL,NULL),(5,0,'EzeCarra','ezecarrasco@gmail.com','Ezequiel','Carrasco','$2a$10$V23qQGQFuKj/7Gv8ZWGfnOPJge/JTwHtVSjD32b7ioDahywjRS4YO','','Argentina',1,'1673719498563_user.jfif','2023-01-25',NULL,NULL,NULL),(6,0,'susan','susana_alonso@hotmail.com','Susana','alonso','$2a$10$KB2OEQTGkkxLC6N1MpjY4ODmz6T8oIq7lga/1RKZ45p1FTF.mpCDi','','Argentina',4,'1673721629141_user.jfif','2023-01-10',NULL,NULL,NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-14 21:00:57
