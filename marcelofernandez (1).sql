-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2021 a las 02:19:10
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `marcelofernandez`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `producto_id` int(11) NOT NULL,
  `producto_nombre` varchar(250) NOT NULL,
  `producto_precio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`producto_id`, `producto_nombre`, `producto_precio`) VALUES
(50, 'Farfalle', 550),
(51, 'Penne', 830),
(52, 'Gnocci', 700),
(53, 'Spaghetti', 75),
(54, 'Macaroni', 750),
(55, 'Rigatoni', 750),
(56, 'Fusili', 750);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suscriptos`
--

CREATE TABLE `suscriptos` (
  `id` int(11) NOT NULL,
  `email` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `suscriptos`
--

INSERT INTO `suscriptos` (`id`, `email`) VALUES
(1, 'PRUEBASUSCRIPCION@DOMINIO.COM'),
(2, 'segundaprueba'),
(3, 'pruebasobretesteos@gmail.com'),
(4, 'maildeprueba@mail.com'),
(5, 'suscripcionredireccion@dominio.com'),
(6, 'PRUEBASUSCRIPCION3@DOMINIO.COM2'),
(7, 'asd@asd.com'),
(8, 'asdasd2'),
(9, 'maildeprueba@mail.com'),
(10, 'asd@asd.com'),
(11, 'asdasd2'),
(12, 'asd'),
(13, 'sadsd'),
(14, 'asdasd2'),
(15, 'asd@asd.com'),
(16, ''),
(17, 'suscripciondepruebaanimacion@dominio.com'),
(18, 'asd@asd.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`producto_id`);

--
-- Indices de la tabla `suscriptos`
--
ALTER TABLE `suscriptos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `producto_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT de la tabla `suscriptos`
--
ALTER TABLE `suscriptos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
