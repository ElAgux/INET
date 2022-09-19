-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-09-2022 a las 16:56:43
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `museoinet`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `areas`
--

CREATE TABLE `areas` (
  `IdArea` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Descripcion` longtext NOT NULL,
  `Estado` int(11) NOT NULL DEFAULT 1,
  `IdTipoArea` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `areas`
--

INSERT INTO `areas` (`IdArea`, `Nombre`, `Descripcion`, `Estado`, `IdTipoArea`) VALUES
(2, 'area 1', '', 1, 0),
(3, 'area 2', '', 1, 0),
(4, 'area 3', '', 1, 0),
(5, 'area 4', '', 1, 0),
(6, 'area 5', '', 1, 0),
(7, 'area 6', '', 1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idiomas`
--

CREATE TABLE `idiomas` (
  `IdIdioma` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `idiomas`
--

INSERT INTO `idiomas` (`IdIdioma`, `Nombre`) VALUES
(1, 'español'),
(2, 'ingles'),
(3, 'portugues'),
(4, 'aleman');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idiomasporvisitasguiadas`
--

CREATE TABLE `idiomasporvisitasguiadas` (
  `IdIdiomaPorVisitaGuiada` int(11) NOT NULL,
  `IdIdioma` int(11) NOT NULL,
  `IdVisitaGuiada` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `idiomasporvisitasguiadas`
--

INSERT INTO `idiomasporvisitasguiadas` (`IdIdiomaPorVisitaGuiada`, `IdIdioma`, `IdVisitaGuiada`) VALUES
(1, 2, 0),
(2, 0, 0),
(3, 4, 0),
(4, 1, 4),
(5, 1, 5),
(6, 2, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `museos`
--

CREATE TABLE `museos` (
  `IdMuseo` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Descripcion` longtext NOT NULL,
  `Email` int(11) NOT NULL,
  `Localidad` int(11) NOT NULL,
  `Estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `obras`
--

CREATE TABLE `obras` (
  `IdObra` int(11) NOT NULL,
  `Autor` varchar(50) NOT NULL,
  `Descripcion` longtext NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Estado` int(11) NOT NULL DEFAULT 1,
  `IdTipoObra` int(11) NOT NULL,
  `IdArea` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiposareas`
--

CREATE TABLE `tiposareas` (
  `IdTipoArea` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Descripcion` longtext NOT NULL,
  `Estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tiposareas`
--

INSERT INTO `tiposareas` (`IdTipoArea`, `Nombre`, `Descripcion`, `Estado`) VALUES
(1, 'ÁREA PÚBLICA', 'Área para brindar información acerca del museo, usos y \r\nrecorridos que se pueden realizar. Son espacios abiertos \r\nque se pueden usar para descanso dentro del recorrido. ', 1),
(2, 'ÁREA DE  EXHIBICIÓN ', 'Lugar donde se exponen los objetos y obras de arte. La \r\ncirculación en el área expositiva debe tomar en cuenta el \r\nordenamiento de la sala y los elementos que la \r\nconstituyen para proponer un sistema de rutas \r\nadecuadas para la contemplación y conocimiento de la \r\nexposición. Fácilmente accesibles desde el área de \r\nrecepción pública del museo. ', 1),
(3, 'ÁREA  ADMINISTRATIVA ', 'Se lleva a cabo el control administrativo del museo. Es un \r\nárea restringida que ala vez permite a algunas personas \r\nen determinados momentos ser atendidas por algún \r\nmiembro del personal y/o director. Por ello debe ocupar \r\nun lugar intermedio formando parte de la zona restringida \r\ndel museo, pero a la vez permitiendo, una accesibilidad \r\nclara. ', 1),
(4, 'ÁREA DE SERVICIO', 'Se almacena mobiliario inactivo e instrumentos de \r\nlimpieza. \r\nServicios sanitarios para hombres y mujeres. ', 1),
(5, 'ÁREA OPERATIVA ', 'Se registra, documenta, conserva, restaura, investiga, \r\nalmacena y custodia las piezas y obras de arte que \r\nforman parte del área expositiva del museo. Debe tener \r\nun acceso cómodo y seguro hacia el área de depósito de \r\nobras y debe ocupar un área espaciosa con ingresos \r\namplios.', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiposobras`
--

CREATE TABLE `tiposobras` (
  `IdTipoObra` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Descripcion` longtext NOT NULL,
  `Estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tiposobras`
--

INSERT INTO `tiposobras` (`IdTipoObra`, `Nombre`, `Descripcion`, `Estado`) VALUES
(1, 'Pintura', '', 1),
(2, 'Escultura', '', 1),
(3, 'Dibujo', '', 1),
(4, 'grabado', '', 1),
(5, 'artes decorativas', '', 1),
(6, 'Fotografia', '', 1),
(7, 'Video', '', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visitantes`
--

CREATE TABLE `visitantes` (
  `IdVisitante` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Apellido` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Telefono` varchar(50) NOT NULL,
  `Documento` varchar(50) NOT NULL,
  `IdVisitaGuiada` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `visitantes`
--

INSERT INTO `visitantes` (`IdVisitante`, `Nombre`, `Apellido`, `Email`, `Telefono`, `Documento`, `IdVisitaGuiada`) VALUES
(5, 'agustin', 'simonte', 'agustinsimonte8@gmail.com', '2235187492', '44454342', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visitasguiadas`
--

CREATE TABLE `visitasguiadas` (
  `IdVisitaGuiada` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `FechaYHora` datetime NOT NULL,
  `IdMuseo` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `visitasguiadas`
--

INSERT INTO `visitasguiadas` (`IdVisitaGuiada`, `Nombre`, `FechaYHora`, `IdMuseo`) VALUES
(1, 'visita 1', '0000-00-00 00:00:00', 0),
(2, 'Visita Guerra', '0000-00-00 00:00:00', 0),
(3, 'hola', '2022-09-29 14:55:00', 0),
(4, 'ejemplo1', '2022-09-15 23:31:52', 0),
(5, 'ejemplo2', '2022-09-13 23:17:46', 0),
(6, 'ejemplo3', '2022-09-21 23:24:04', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `areas`
--
ALTER TABLE `areas`
  ADD PRIMARY KEY (`IdArea`);

--
-- Indices de la tabla `idiomas`
--
ALTER TABLE `idiomas`
  ADD PRIMARY KEY (`IdIdioma`);

--
-- Indices de la tabla `idiomasporvisitasguiadas`
--
ALTER TABLE `idiomasporvisitasguiadas`
  ADD PRIMARY KEY (`IdIdiomaPorVisitaGuiada`);

--
-- Indices de la tabla `museos`
--
ALTER TABLE `museos`
  ADD PRIMARY KEY (`IdMuseo`);

--
-- Indices de la tabla `obras`
--
ALTER TABLE `obras`
  ADD PRIMARY KEY (`IdObra`);

--
-- Indices de la tabla `tiposareas`
--
ALTER TABLE `tiposareas`
  ADD PRIMARY KEY (`IdTipoArea`);

--
-- Indices de la tabla `tiposobras`
--
ALTER TABLE `tiposobras`
  ADD PRIMARY KEY (`IdTipoObra`);

--
-- Indices de la tabla `visitantes`
--
ALTER TABLE `visitantes`
  ADD PRIMARY KEY (`IdVisitante`);

--
-- Indices de la tabla `visitasguiadas`
--
ALTER TABLE `visitasguiadas`
  ADD PRIMARY KEY (`IdVisitaGuiada`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `areas`
--
ALTER TABLE `areas`
  MODIFY `IdArea` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `idiomas`
--
ALTER TABLE `idiomas`
  MODIFY `IdIdioma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `idiomasporvisitasguiadas`
--
ALTER TABLE `idiomasporvisitasguiadas`
  MODIFY `IdIdiomaPorVisitaGuiada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `museos`
--
ALTER TABLE `museos`
  MODIFY `IdMuseo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `obras`
--
ALTER TABLE `obras`
  MODIFY `IdObra` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tiposareas`
--
ALTER TABLE `tiposareas`
  MODIFY `IdTipoArea` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tiposobras`
--
ALTER TABLE `tiposobras`
  MODIFY `IdTipoObra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `visitantes`
--
ALTER TABLE `visitantes`
  MODIFY `IdVisitante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `visitasguiadas`
--
ALTER TABLE `visitasguiadas`
  MODIFY `IdVisitaGuiada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
