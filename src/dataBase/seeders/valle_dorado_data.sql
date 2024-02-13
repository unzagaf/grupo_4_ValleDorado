-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-02-2024 a las 19:19:46
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `valle_dorado`
--

--
-- Volcado de datos para la tabla `account`
--

INSERT INTO `account` (`id`, `createAT`, `updateAT`, `email`, `password`, `imagen`, `user_id`) VALUES
(1, '2024-02-09 16:48:36', '2024-02-09 16:48:36', 'juan.perez@gmail.com', 'contrasena123', '', 1),
(2, '2024-02-09 16:48:36', '2024-02-09 16:48:36', 'maria.gomez@gmial.com', 'contrasena456', '', 2),
(3, '2024-02-09 16:50:28', '2024-02-09 16:58:09', 'carlos.lopez@gmail.com', 'contrasena789', '', 3),
(4, '2024-02-09 16:50:28', '2024-02-09 16:58:46', 'greta.1234@gmail.com', '456258', '', 4);

--
-- Volcado de datos para la tabla `bookings`
--

INSERT INTO `bookings` (`id`, `createAT`, `updateAT`, `reservation_date`, `product_id`, `user_id`) VALUES
(1, '2024-02-09 17:47:18', '2024-02-09 17:47:18', '2023-10-22', 1, 1),
(2, '2024-02-09 17:47:18', '2024-02-09 17:47:18', '2023-12-12', 1, 2);

--
-- Volcado de datos para la tabla `booking_details`
--

INSERT INTO `booking_details` (`id`, `createAT`, `updateAT`, `type_of_room`, `travel_insurance`, `airport_transportation`, `rent_a_car`, `booking_id`) VALUES
(1, '2024-02-09 17:49:08', '2024-02-09 17:49:08', 'single', 1, 1, 0, 1),
(2, '2024-02-09 17:49:08', '2024-02-09 17:49:08', 'doble', 0, 0, 1, 1);

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `createAT`, `updateAT`, `name`) VALUES
(1, '2024-02-09 16:31:04', '2024-02-09 16:31:04', 'customer'),
(2, '2024-02-09 16:31:04', '2024-02-09 16:31:04', 'admin');

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `createAT`, `updateAT`, `destination`, `price`, `start_date`, `ending_date`, `province_of_departure`, `peoples`) VALUES
(1, '2024-02-09 17:12:58', '2024-02-09 17:15:12', 'Sri Lanka', 27600, '2024-02-12', '2024-03-02', 'Cordoba-Capital', 2),
(2, '2024-02-09 17:12:58', '2024-02-09 17:15:26', 'Nueva Zelanda', 360000, '2024-01-30', '2024-02-10', 'Cordoba - Capital', 3);

--
-- Volcado de datos para la tabla `product_images`
--

INSERT INTO `product_images` (`id`, `createAT`, `updateAT`, `route`, `product_id`) VALUES
(1, '2024-02-09 17:52:23', '2024-02-09 17:52:23', '/img/descanso_producto.jpg', 1),
(2, '2024-02-09 17:52:23', '2024-02-09 17:52:23', '/img/excursiones_producto.jpg', 1),
(3, '2024-02-09 17:52:49', '2024-02-09 17:52:49', '/img/bienvenida_producto.jfif', 1);

--
-- Volcado de datos para la tabla `product_service`
--

INSERT INTO `product_service` (`id`, `createAT`, `updateAT`, `product_id`, `service_id`) VALUES
(1, '2024-02-09 17:32:04', '2024-02-09 17:32:04', 1, 1),
(2, '2024-02-09 17:32:33', '2024-02-09 17:32:33', 1, 1);

--
-- Volcado de datos para la tabla `services`
--

INSERT INTO `services` (`id`, `createAT`, `updateAT`, `service`, `details`) VALUES
(1, '2024-02-09 17:24:49', '2024-02-09 18:10:37', 'Asistencia al Viajero.', 'Proporcionamos una cobertura integral que garantiza la tranquilidad y seguridad durante todo el viaje. Esto incluye atención médica en caso de emergencias, asistencia en la pérdida de equipaje, repatriación en caso de necesidad, entre otros servicios.'),
(2, '2024-02-09 17:54:11', '2024-02-09 18:10:37', 'Hoteles 5 estrellas.', 'Ofrecemos alojamiento en los mejores hoteles de categoría 5 estrellas, garantizando comodidad, lujo y una experiencia de hospedaje excepcional para nuestros clientes.'),
(3, '2024-02-09 17:54:44', '2024-02-09 18:10:37', 'Coordinador y guías locales', 'Contamos con un equipo de profesionales capacitados y conocedores del destino, quienes acompañarán y orientarán a nuestros viajeros durante toda la estadía, asegurando una experiencia enriquecedora y sin contratiempos.'),
(4, '2024-02-09 17:55:20', '2024-02-09 18:10:37', 'Régimen de comidas todo incluido', 'Nuestros paquetes de viaje incluyen una amplia variedad de opciones gastronómicas con régimen todo incluido, que abarcan desde desayunos buffet hasta cenas gourmet, permitiendo a nuestros clientes disfrutar de la gastronomía local e internacional sin preo'),
(5, '2024-02-09 17:55:20', '2024-02-09 18:10:37', 'Excursiones según programa', 'Diseñamos itinerarios personalizados que incluyen emocionantes excursiones y actividades planificadas, adaptadas a los intereses y preferencias de nuestros viajeros, asegurando una experiencia única y memorable en cada destino visitado.'),
(6, '2024-02-09 17:56:00', '2024-02-09 17:56:00', 'Traslados de ingreso y egreso: \r\n', '');

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `createAT`, `updateAT`, `name`, `surname`, `dni`, `category_id`) VALUES
(1, '2024-02-09 16:34:42', '2024-02-09 16:45:27', 'Juan', 'Perez', 25366478, 1),
(2, '2024-02-09 16:34:42', '2024-02-09 16:45:37', 'Maria', 'Gomez', 25366479, 1),
(3, '2024-02-09 16:37:31', '2024-02-09 16:45:47', 'Carlos', 'Lopez', 25366480, 2),
(4, '2024-02-09 16:37:31', '2024-02-09 16:45:58', 'Greta', 'Flores', 32688963, 1);

--
-- Volcado de datos para la tabla `user_product`
--

INSERT INTO `user_product` (`id`, `createAT`, `updateAT`, `user_id`, `product_id`) VALUES
(1, '2024-02-09 17:21:53', '2024-02-09 17:21:53', 1, 1),
(2, '2024-02-09 17:22:13', '2024-02-09 17:22:13', 2, 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
