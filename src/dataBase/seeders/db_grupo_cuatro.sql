-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-03-2024 a las 22:32:29
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
-- Base de datos: `grupo_cuatro_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `email` varchar(50) NOT NULL,
  `password` varchar(64) DEFAULT NULL,
  `username` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL DEFAULT 2,
  `avatar` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `accounts`
--

INSERT INTO `accounts` (`id`, `createdAt`, `updatedAt`, `email`, `password`, `username`, `user_id`, `category_id`, `avatar`) VALUES
(1, '2024-02-17 23:08:36', '2024-02-17 23:08:36', 'juan.perez@gmail.com', 'contrasena1', '', 1, 2, ''),
(2, '2024-02-17 23:10:13', '2024-02-17 23:10:13', 'maria.gomez@gmail.com', 'contrasena4', '', 2, 2, ''),
(3, '2024-02-17 23:13:35', '2024-02-17 23:13:35', 'carlos.lopez@gmail.com', 'contrasena789', '', 3, 1, ''),
(4, '2024-02-17 23:14:41', '2024-02-17 23:14:41', 'greta.123@gmail.com', '456258', '', 4, 1, ''),
(10, '2024-02-21 10:44:42', '2024-02-21 10:44:42', 'ejemploemail@gmail.com', '$2b$10$tlSJQFLczt3qtU9NeRqYb.JFcbV3DKQiHaDQ.F8LnG5v/Vh7Ce3t6', 'testmarcos', 34, 2, 'imagenUsers1708512282032.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `pagada` tinyint(11) NOT NULL,
  `account_id` int(11) NOT NULL,
  `services_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `bookings`
--

INSERT INTO `bookings` (`id`, `createdAt`, `updatedAt`, `pagada`, `account_id`, `services_id`, `product_id`) VALUES
(1, '2024-02-17 23:59:56', '2024-02-20 10:32:56', 0, 2, 1, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `name` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `createdAt`, `updatedAt`, `name`) VALUES
(1, '2024-02-17 23:04:59', '2024-02-17 23:04:59', 'admin'),
(2, '2024-02-17 23:05:11', '2024-02-17 23:05:36', 'customer');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `route` varchar(60) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `createdAt`, `updatedAt`, `route`, `product_id`) VALUES
(1, '2024-02-17 23:42:59', '2024-02-17 23:42:59', '/img/descanso_producto.jpg', 1),
(2, '2024-02-17 23:46:11', '2024-02-17 23:46:11', '/img/excursiones_producto.jpg', 1),
(3, '2024-02-17 23:46:11', '2024-02-17 23:46:11', '/img/bienvenida_producto.jfif', 1),
(4, '2024-02-17 23:47:04', '2024-02-17 23:47:04', '/img/1706647558735.webp', 2),
(5, '2024-02-17 23:47:04', '2024-02-17 23:47:04', '/img/1706647558739.jpg', 2),
(6, '2024-02-17 23:47:34', '2024-02-17 23:47:34', '/img/1706647558746.jpg', 2),
(7, '2024-02-17 23:47:34', '2024-02-17 23:47:34', '/img/1706647755495.jpg', 3),
(8, '2024-02-17 23:48:18', '2024-02-17 23:48:18', '/img/1706647755496.jpg', 3),
(9, '2024-02-17 23:48:18', '2024-02-17 23:48:18', '/img/1706647755501.jpg', 3),
(26, '2024-03-07 18:43:39', '2024-03-07 18:43:39', '/img/1709837019099.jpg', 77),
(27, '2024-03-07 18:43:39', '2024-03-07 18:43:39', '/img/1709837019106.jpg', 77),
(28, '2024-03-07 18:53:01', '2024-03-07 18:53:01', '/img/1709837581684.jpg', 78),
(29, '2024-03-07 18:53:01', '2024-03-07 18:53:01', '/img/1709837581721.jpg', 78),
(30, '2024-03-07 18:53:01', '2024-03-07 18:53:01', '/img/1709837581737.jpg', 78);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `includes`
--

CREATE TABLE `includes` (
  `id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `include` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `includes`
--

INSERT INTO `includes` (`id`, `createdAt`, `updatedAt`, `include`) VALUES
(1, '2024-02-18 02:50:25', '2024-02-18 02:50:25', 'Asistencia al Viajero'),
(2, '2024-02-18 02:50:25', '2024-02-18 02:50:25', 'Hoteles 5 estrellas'),
(3, '2024-02-18 02:51:51', '2024-02-18 02:51:51', 'Régimen de comidas todo incluido'),
(4, '2024-02-18 02:55:38', '2024-02-22 14:07:49', 'Coordinador y Guias locales'),
(5, '2024-02-18 02:55:38', '2024-02-18 02:55:59', 'Excursiones Segun Programa'),
(6, '2024-02-22 14:08:21', '2024-02-22 14:08:21', 'Traslados de ingreso y egreso');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `destination` varchar(100) NOT NULL,
  `start_date` date NOT NULL,
  `finish_date` date NOT NULL,
  `price` decimal(11,0) NOT NULL,
  `city_depart` varchar(50) NOT NULL,
  `group_size` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `createdAt`, `updatedAt`, `destination`, `start_date`, `finish_date`, `price`, `city_depart`, `group_size`) VALUES
(1, '2024-02-17 23:19:09', '2024-02-17 23:19:09', 'Sri Lanka', '2024-01-30', '2024-02-10', 26623, 'Cordoba_Capital', 2),
(2, '2024-02-17 23:19:09', '2024-03-07 18:45:32', 'Nueva zelanda', '2024-01-30', '2024-02-10', 360000, 'cordoba_capital', 3),
(3, '2024-02-17 23:21:52', '2024-02-17 23:21:52', 'Vancouver', '2024-01-15', '2024-02-01', 400000, 'Buenos Aires', 5),
(77, '2024-03-07 18:43:39', '2024-03-07 18:57:44', 'imagen editada', '2024-03-07', '2024-03-14', 4, 'imagene editada', 4),
(78, '2024-03-07 18:53:01', '2024-03-07 18:53:01', 'New York', '2024-03-01', '2024-03-22', 100000, 'Buenos Aires', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_includes`
--

CREATE TABLE `product_includes` (
  `id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `product_id` int(11) NOT NULL,
  `include_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `product_includes`
--

INSERT INTO `product_includes` (`id`, `createdAt`, `updatedAt`, `product_id`, `include_id`) VALUES
(1, '2024-02-18 02:58:42', '2024-02-18 02:58:42', 1, 1),
(2, '2024-02-18 02:58:42', '2024-02-18 02:58:42', 1, 2),
(210, '2024-02-18 02:58:42', '2024-02-18 02:58:42', 1, 4),
(282, '2024-03-07 18:43:39', '2024-03-07 18:43:39', 77, 1),
(287, '2024-03-07 18:43:39', '2024-03-07 18:43:39', 77, 6),
(288, '2024-03-07 18:45:32', '2024-03-07 18:45:32', 2, 2),
(289, '2024-03-07 18:45:32', '2024-03-07 18:45:32', 2, 4),
(290, '2024-03-07 18:45:32', '2024-03-07 18:45:32', 2, 3),
(291, '2024-03-07 18:45:32', '2024-03-07 18:45:32', 2, 5),
(297, '2024-03-07 18:53:01', '2024-03-07 18:53:01', 78, 1),
(298, '2024-03-07 18:53:01', '2024-03-07 18:53:01', 78, 2),
(299, '2024-03-07 18:53:01', '2024-03-07 18:53:01', 78, 3),
(300, '2024-03-07 18:53:01', '2024-03-07 18:53:01', 78, 6),
(301, '2024-03-07 18:57:44', '2024-03-07 18:57:44', 77, 2),
(302, '2024-03-07 18:57:44', '2024-03-07 18:57:44', 77, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `type_of_room` varchar(50) NOT NULL,
  `travel_insurrace` tinyint(11) NOT NULL,
  `airport_transportation` tinyint(11) NOT NULL,
  `rent_a_car` tinyint(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `services`
--

INSERT INTO `services` (`id`, `createdAt`, `updatedAt`, `type_of_room`, `travel_insurrace`, `airport_transportation`, `rent_a_car`) VALUES
(1, '2024-02-20 10:32:27', '2024-02-20 10:32:27', 'doble', 1, 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `dni` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `createdAt`, `updatedAt`, `name`, `surname`, `dni`) VALUES
(1, '2024-02-17 23:01:09', '2024-02-17 23:01:09', 'Juan ', 'Perez', 25366478),
(2, '2024-02-17 23:01:39', '2024-02-17 23:01:39', 'Maria ', 'Gomez', 25366479),
(3, '2024-02-17 23:02:15', '2024-02-17 23:02:15', 'Carlos ', 'Lopez', 25366480),
(4, '2024-02-17 23:02:45', '2024-02-17 23:02:45', 'Greta', 'Flores', 32688963),
(13, '2024-02-18 05:59:33', '2024-02-18 05:59:33', 'Florencia', 'Varela', 25255366),
(14, '2024-02-18 06:33:32', '2024-02-18 06:33:32', 'Karina', 'Brandan', 25654456),
(21, '2024-02-18 07:32:14', '2024-02-18 07:32:14', 'Agustin', 'Lucerna', 42563789),
(22, '2024-02-18 08:06:41', '2024-02-18 08:06:41', 'Agustin', 'Lucerna', 42563789),
(23, '2024-02-18 08:20:39', '2024-02-18 08:20:39', 'Marcos', 'Juliano', 42012753),
(34, '2024-02-21 10:44:42', '2024-02-21 10:44:42', 'marcos', 'quinteros', 41624421);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `accoun_id` (`account_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `services_id` (`services_id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product` (`product_id`);

--
-- Indices de la tabla `includes`
--
ALTER TABLE `includes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product_includes`
--
ALTER TABLE `product_includes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products` (`product_id`),
  ADD KEY `include` (`include_id`);

--
-- Indices de la tabla `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `includes`
--
ALTER TABLE `includes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT de la tabla `product_includes`
--
ALTER TABLE `product_includes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=313;

--
-- AUTO_INCREMENT de la tabla `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `account_id` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `services_id` FOREIGN KEY (`services_id`) REFERENCES `services` (`id`);

--
-- Filtros para la tabla `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `product_includes`
--
ALTER TABLE `product_includes`
  ADD CONSTRAINT `include` FOREIGN KEY (`include_id`) REFERENCES `includes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
