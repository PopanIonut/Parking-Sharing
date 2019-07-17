-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 17, 2019 at 03:17 PM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `parking`
--

-- --------------------------------------------------------

--
-- Table structure for table `people`
--

CREATE TABLE `people` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `phone` int(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `car_nr` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `people`
--

INSERT INTO `people` (`id`, `firstName`, `lastName`, `phone`, `email`, `car_nr`) VALUES
(1, 'Ioan', 'Marcel', 744888564, 'Marcel2008@yahoo.com', 'TM90PAW'),
(2, 'Maria', 'Bob', 744855075, 'MariaBobMaria@yahoo.com', 'BV18MIA'),
(3, 'Dobrescu', 'Vlad', 769951753, 'Dobrescu.Vlad@gmail.com', 'CJ25DOC'),
(4, 'Dobrescu', 'Dalv', 760051753, 'Dobrescu.Dalv@gmail.com', 'CK25VOC'),
(5, 'Munteanu', 'Cristian', 769555426, 'CristianMunteanu@gmail.com', 'CJ01BOS'),
(6, 'Lacatus', 'Aurel', 768735915, 'Lacatus.Aurel@yahoo.com', 'CJ88ZWZ'),
(7, 'Vlaicu', 'Ionut', 766447122, 'VlaicuIonut@hotmail.com', 'CJ10NUT'),
(8, 'Vaida', 'Bogdan', 766645282, 'VaidaBogdan@gmail.com', 'CJ20BBB'),
(9, 'Antonescu', 'Mircea', 769246837, 'AntonescuMircea@yahoo.com', 'CJ15WIZ'),
(10, 'Botezatu', 'Alin', 767850785, 'Alin.Botezatu@gmail.com', 'BN88ALN');

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `person_id` int(11) NOT NULL,
  `spot_id` int(11) NOT NULL,
  `start` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ending` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `person_id`, `spot_id`, `start`, `ending`) VALUES
(3, 2, 1, '2019-06-24 18:37:16', '2019-07-01 23:00:00'),
(4, 3, 3, '2019-07-01 18:28:03', '2019-07-01 22:00:00'),
(5, 10, 7, '2019-07-01 18:34:30', NULL),
(6, 1, 26, '2019-07-02 09:16:06', NULL),
(7, 1, 7, '2019-07-02 09:16:06', '2019-07-03 05:06:00'),
(8, 2, 16, '2019-07-17 02:19:00', '2019-07-17 14:06:00'),
(9, 1, 26, '2019-07-02 02:06:00', NULL),
(10, 1, 7, '2019-07-03 02:06:00', '2019-07-03 05:06:00'),
(11, 2, 30, '2019-07-03 02:06:00', NULL),
(12, 2, 32, '2019-07-04 02:06:00', '2019-07-04 07:06:00'),
(13, 3, 23, '2019-07-03 02:06:00', NULL),
(14, 3, 37, '2019-07-05 03:00:00', '2019-07-05 08:00:00'),
(15, 1, 42, '2019-07-03 02:06:00', NULL),
(16, 2, 36, '2019-07-14 02:06:00', NULL),
(17, 3, 26, '2019-07-14 04:30:00', NULL),
(18, 5, 16, '2019-07-14 02:06:00', NULL),
(19, 10, 4, '2019-07-03 03:00:00', NULL),
(20, 9, 42, '2019-07-04 02:06:00', NULL),
(21, 5, 39, '2019-07-07 02:06:00', '2019-07-07 23:06:00'),
(22, 4, 39, '2019-07-08 04:06:00', '2019-07-08 08:00:00'),
(23, 6, 33, '2019-07-09 02:06:00', '2019-07-09 05:18:00'),
(24, 6, 34, '2019-07-10 03:06:00', '2019-07-10 15:36:00'),
(25, 8, 35, '2019-07-13 02:50:00', '2019-07-13 09:06:00'),
(26, 4, 23, '2019-07-23 04:00:00', '2019-07-23 12:30:00'),
(27, 3, 24, '2019-07-29 02:06:00', NULL),
(28, 10, 25, '2019-07-28 03:06:00', NULL),
(29, 9, 11, '2019-07-05 02:06:00', NULL),
(30, 2, 12, '2019-07-06 05:06:00', NULL),
(31, 1, 13, '2019-07-07 02:06:00', NULL),
(32, 1, 19, '2019-07-08 06:50:00', NULL),
(33, 5, 18, '2019-07-11 02:06:00', '2019-07-11 07:06:00'),
(34, 6, 20, '2019-07-12 13:06:00', '2019-07-12 17:00:00'),
(35, 7, 21, '2019-07-13 02:06:00', '2019-07-13 06:56:00'),
(36, 7, 15, '2019-07-15 02:06:00', '2019-07-15 06:45:00'),
(37, 9, 17, '2019-07-15 02:06:00', '2019-07-15 10:15:00'),
(38, 10, 34, '2019-07-15 03:56:00', '2019-07-15 09:16:00'),
(39, 8, 36, '2019-07-20 02:06:00', NULL),
(40, 9, 38, '2019-07-02 10:56:00', NULL),
(41, 3, 6, '2019-07-04 10:24:00', NULL),
(42, 3, 6, '2019-07-04 14:45:00', NULL),
(43, 2, 26, '2019-07-16 02:06:00', NULL),
(44, 5, 22, '2019-07-17 10:26:00', NULL),
(45, 4, 33, '2019-07-18 02:06:00', '2019-07-18 05:06:00'),
(46, 4, 19, '2019-07-19 12:46:00', '2019-07-19 05:06:00'),
(47, 1, 10, '2019-07-18 02:06:00', '2019-07-18 05:06:00'),
(48, 2, 7, '2019-07-17 02:06:00', '2019-07-17 05:06:00'),
(49, 3, 7, '2019-07-15 06:46:00', '2019-07-15 05:06:00'),
(50, 4, 4, '2019-07-13 01:30:00', '2019-07-13 22:26:00'),
(51, 6, 6, '2019-07-22 02:06:00', NULL),
(52, 7, 37, '2019-07-22 02:06:00', NULL),
(53, 8, 8, '2019-07-22 04:00:00', NULL),
(54, 9, 9, '0000-00-00 00:00:00', NULL),
(55, 1, 31, '0000-00-00 00:00:00', NULL),
(56, 2, 32, '2019-07-26 02:06:00', NULL),
(57, 10, 10, '2019-07-29 22:00:00', '2019-07-30 05:00:00'),
(58, 9, 19, '2019-07-27 02:36:00', '2019-07-27 09:23:00'),
(59, 7, 17, '2019-07-27 02:58:00', '2019-07-27 07:47:00'),
(60, 5, 29, '2019-07-26 06:06:00', '2019-07-26 18:08:00'),
(61, 4, 39, '2019-07-29 02:06:00', '2019-07-26 18:26:00'),
(62, 2, 28, '2019-07-30 07:06:00', '2019-07-30 14:27:00'),
(63, 1, 26, '2019-07-02 02:06:00', NULL),
(64, 1, 7, '2019-07-03 02:06:00', '2019-07-03 05:06:00'),
(65, 2, 30, '2019-07-03 02:06:00', NULL),
(66, 2, 32, '2019-07-04 02:06:00', '2019-07-04 07:06:00'),
(67, 3, 23, '2019-07-03 02:06:00', NULL),
(68, 3, 37, '2019-07-05 03:00:00', '2019-07-05 08:00:00'),
(69, 1, 42, '2019-07-03 02:06:00', NULL),
(70, 2, 36, '2019-07-14 02:06:00', NULL),
(71, 3, 26, '2019-07-14 04:30:00', NULL),
(72, 5, 16, '2019-07-14 02:06:00', NULL),
(73, 10, 4, '2019-07-03 03:00:00', NULL),
(74, 9, 42, '2019-07-04 02:06:00', NULL),
(75, 5, 39, '2019-07-07 02:06:00', '2019-07-07 23:06:00'),
(76, 4, 39, '2019-07-08 04:06:00', '2019-07-08 08:00:00'),
(77, 6, 33, '2019-07-09 02:06:00', '2019-07-09 05:18:00'),
(78, 6, 34, '2019-07-10 03:06:00', '2019-07-10 15:36:00'),
(79, 8, 35, '2019-07-13 02:50:00', '2019-07-13 09:06:00'),
(80, 4, 23, '2019-07-23 04:00:00', '2019-07-23 12:30:00'),
(81, 3, 24, '2019-07-29 02:06:00', NULL),
(82, 10, 25, '2019-07-28 03:06:00', NULL),
(83, 9, 11, '2019-07-05 02:06:00', NULL),
(84, 2, 12, '2019-07-06 05:06:00', NULL),
(85, 1, 13, '2019-07-07 02:06:00', NULL),
(86, 1, 19, '2019-07-08 06:50:00', NULL),
(87, 5, 18, '2019-07-11 02:06:00', '2019-07-11 07:06:00'),
(88, 6, 20, '2019-07-12 13:06:00', '2019-07-12 17:00:00'),
(89, 7, 21, '2019-07-13 02:06:00', '2019-07-13 06:56:00'),
(90, 7, 15, '2019-07-15 02:06:00', '2019-07-15 06:45:00'),
(91, 9, 17, '2019-07-15 02:06:00', '2019-07-15 10:15:00'),
(92, 10, 34, '2019-07-15 03:56:00', '2019-07-15 09:16:00'),
(93, 8, 36, '2019-07-20 02:06:00', NULL),
(94, 9, 38, '2019-07-02 10:56:00', NULL),
(95, 3, 6, '2019-07-04 10:24:00', NULL),
(96, 3, 6, '2019-07-04 14:45:00', NULL),
(97, 2, 26, '2019-07-16 02:06:00', NULL),
(98, 5, 22, '2019-07-17 10:26:00', NULL),
(99, 4, 33, '2019-07-18 02:06:00', '2019-07-18 05:06:00'),
(100, 4, 19, '2019-07-19 12:46:00', '2019-07-19 05:06:00'),
(101, 1, 10, '2019-07-18 02:06:00', '2019-07-18 05:06:00'),
(102, 2, 7, '2019-07-17 02:06:00', '2019-07-17 05:06:00'),
(103, 3, 7, '2019-07-15 06:46:00', '2019-07-15 05:06:00'),
(104, 4, 4, '2019-07-13 01:30:00', '2019-07-13 22:26:00'),
(105, 6, 6, '2019-07-22 02:06:00', NULL),
(106, 7, 37, '2019-07-22 02:06:00', NULL),
(107, 8, 8, '2019-07-22 04:00:00', NULL),
(108, 9, 9, '0000-00-00 00:00:00', NULL),
(109, 1, 31, '0000-00-00 00:00:00', NULL),
(110, 2, 32, '2019-07-26 02:06:00', NULL),
(111, 10, 10, '2019-07-29 22:00:00', '2019-07-30 05:00:00'),
(112, 9, 19, '2019-07-27 02:36:00', '2019-07-27 09:23:00'),
(113, 7, 17, '2019-07-27 02:58:00', '2019-07-27 07:47:00'),
(114, 5, 29, '2019-07-26 06:06:00', '2019-07-26 18:08:00'),
(115, 4, 39, '2019-07-29 02:06:00', '2019-07-26 18:26:00'),
(116, 2, 28, '2019-07-30 07:06:00', '2019-07-30 14:27:00');

-- --------------------------------------------------------

--
-- Table structure for table `spots`
--

CREATE TABLE `spots` (
  `id` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `area` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `spot_nr` varchar(30) NOT NULL,
  `t_from` time NOT NULL,
  `t_until` time NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `spots`
--

INSERT INTO `spots` (`id`, `city`, `area`, `address`, `spot_nr`, `t_from`, `t_until`, `description`) VALUES
(1, 'Cluj', 'Zorilor', 'Str. Caisului', '1', '00:00:22', '00:00:23', ''),
(2, 'Cluj', 'Gruia', 'Str. 16 Februarie', '2', '02:00:00', '00:00:00', ''),
(3, 'Cluj', 'Marasti', 'Str. 13 Septembrie', '3', '08:00:00', '06:00:00', ''),
(4, 'Cluj', 'Marasti', 'Str. 13 Septembrie', '4', '08:00:00', '06:00:00', ''),
(5, 'Cluj', 'Gheorgheni', 'Str. Actorului', '5', '09:00:00', '06:00:00', ''),
(6, 'Cluj', 'Faget', 'Str. Afinului', '6', '08:00:00', '06:00:00', ''),
(7, 'Cluj', 'Manastur', 'Str. Agricultorilor', '7', '02:00:00', '01:00:00', ''),
(8, 'Cluj', 'Someseni', 'Str. Aiudului', '8', '03:00:00', '06:00:00', ''),
(9, 'Cluj', 'Gruia', 'Str. Brizei', '9', '08:00:00', '02:00:00', ''),
(10, 'Cluj', 'Gruia', 'Str. Buhusi', '10', '07:00:00', '01:00:00', ''),
(11, 'Cluj', 'Gruia', 'Str. Calarasilor', '12', '08:00:00', '10:00:00', ''),
(12, 'Cluj', 'Gruia', 'Str. Calarasilor', '14', '08:00:00', '10:00:00', ''),
(13, 'Cluj', 'Gruia', 'Str. Campeni', '13', '01:00:00', '03:00:00', ''),
(14, 'Cluj', 'Gruia', 'Str. Dornei', '14', '04:00:00', '06:00:00', ''),
(15, 'Cluj', 'Gruia', 'Str. Haiducului', '15', '07:00:00', '11:00:00', ''),
(16, 'Cluj', 'Gruia', 'Str. Lemnului', '16', '01:00:00', '01:00:00', ''),
(17, 'Cluj', 'Gruia', 'Str. Mecanicilor', '17', '04:00:00', '03:00:00', ''),
(18, 'Cluj', 'Gruia', 'Str. Pescarilor', '18', '02:00:00', '05:00:00', ''),
(19, 'Cluj', 'Someseni', 'Str. Ciocanului', '19', '02:00:00', '04:00:00', ''),
(20, 'Cluj', 'Someseni', 'Str. Ciocanului', '8', '02:00:00', '01:00:00', ''),
(21, 'Cluj', 'Someseni', 'Str. Dobrogei', '20', '06:00:00', '03:00:00', ''),
(22, 'Cluj', 'Someseni', 'Str. Lucernei', '21', '03:00:00', '01:00:00', ''),
(23, 'Cluj', 'Someseni', 'Str. Morii', '22', '07:00:00', '03:00:00', ''),
(24, 'Cluj', 'Someseni', 'Str. Prieteniei', '23', '05:00:00', '02:00:00', ''),
(25, 'Cluj', 'Someseni', 'Str. Rozelor', '24', '09:00:00', '06:00:00', ''),
(26, 'Cluj', 'Someseni', 'Str. Sportului', '25', '03:00:00', '02:00:00', ''),
(27, 'Oradea', 'Orasul Nou', 'Str. Mihai Pavel', '1', '10:00:00', '18:00:00', 'sunati-ma'),
(28, 'Oradea', 'Orasul Nou', 'Str. Mihai Pavel', '2', '10:30:00', '14:00:00', 'scrieti-mi'),
(29, 'Oradea', 'Orasul Nou', 'Str. Mihai Pavel', '2', '10:30:00', '14:00:00', 'scrieti-mi'),
(30, 'Oradea', 'Orasul Nou', 'Str. Mihai Pavel', '4', '10:30:00', '17:00:00', ':0'),
(31, 'Oradea', 'Orasul Nou', 'Piata Unirii', '2A', '06:00:00', '18:45:00', 'scrieti-mi'),
(32, 'Oradea', 'Orasul Nou', 'Piata Unirii', '2B', '10:30:00', '13:00:00', 'ocupat 20m d la 12'),
(33, 'Oradea', 'Orasul Nou', 'Piata Unirii', '23', '08:30:00', '12:20:00', 'scrieti-mi'),
(34, 'Oradea', 'Orasul Nou', 'Piata Unirii', '8', '10:30:00', '16:00:00', 'scrieti-mi'),
(35, 'Oradea', 'Dorobantilor', 'Str. Horea', '2', '09:30:00', '14:50:00', 'sunati-ma'),
(36, 'Oradea', 'Dorobantilor', 'Str. Horea', '5', '10:30:00', '18:00:00', 'scrieti-mi'),
(37, 'Oradea', 'Dorobantilor', 'Str. Horea', '7', '09:30:00', '14:30:00', 'scrieti-mi'),
(38, 'Oradea', 'Dorobantilor', 'Str. Albacului', '2A', '10:30:00', '19:00:00', 'sunati-ma'),
(39, 'Oradea', 'Dorobantilor', 'Str. Albacului', '22', '08:00:00', '14:40:00', 'scrieti-mi'),
(40, 'Oradea', 'Dorobantilor', 'Str. Albacului', '2B', '10:30:00', '23:00:00', ':)'),
(41, 'Oradea', 'Subcetate', 'Str. Grivitei', '1', '09:30:00', '14:50:00', 'sunati-ma'),
(42, 'Oradea', 'Subcetate', 'Str. Grivitei', '2', '10:30:00', '18:00:00', 'scrieti-mi'),
(43, 'Oradea', 'Subcetate', 'Str. Grivitei', '4', '09:30:00', '14:30:00', 'scrieti-mi'),
(44, 'Oradea', 'Subcetate', 'Str. Grivitei', '6', '10:30:00', '19:00:00', 'sunati-ma'),
(45, 'Oradea', 'Subcetate', 'Str. Grivitei', '15A', '08:00:00', '14:40:00', 'scrieti-mi'),
(46, 'Oradea', 'Subcetate', 'Str. Grivitei', '15B', '10:30:00', '23:00:00', ':)'),
(47, 'Deva', 'Micro 15', 'Str. Minerului', '1', '09:30:00', '14:50:00', 'sunati-ma'),
(48, 'Deva', 'Micro 15', 'Aleea Teilor', '2', '10:30:00', '18:00:00', 'scrieti-mi'),
(49, 'Deva', 'Micro 15', 'Aleea Armatei', '4', '09:30:00', '14:30:00', 'scrieti-mi'),
(50, 'Deva', 'Centrul Vechi', 'Str. Aleea Neptun', 'A6B', '10:30:00', '19:00:00', 'str langa biserica'),
(51, 'Deva', 'Centrul Vechi', 'Str. Magnoliei', '5A', '08:00:00', '14:40:00', 'scrieti-mi'),
(52, 'Deva', 'Centrul Vechi', 'Str. Magnoliei', '5B', '10:30:00', '23:00:00', ':)'),
(53, 'Oradea', 'Orasul Nou', 'Str. Mihai Pavel', '1', '10:00:00', '18:00:00', 'sunati-ma'),
(54, 'Oradea', 'Orasul Nou', 'Str. Mihai Pavel', '2', '10:30:00', '14:00:00', 'scrieti-mi'),
(55, 'Oradea', 'Orasul Nou', 'Str. Mihai Pavel', '2', '10:30:00', '14:00:00', 'scrieti-mi'),
(56, 'Oradea', 'Orasul Nou', 'Str. Mihai Pavel', '4', '10:30:00', '17:00:00', ':0'),
(57, 'Oradea', 'Orasul Nou', 'Piata Unirii', '2A', '06:00:00', '18:45:00', 'scrieti-mi'),
(58, 'Oradea', 'Orasul Nou', 'Piata Unirii', '2B', '10:30:00', '13:00:00', 'ocupat 20m d la 12'),
(59, 'Oradea', 'Orasul Nou', 'Piata Unirii', '23', '08:30:00', '12:20:00', 'scrieti-mi'),
(60, 'Oradea', 'Orasul Nou', 'Piata Unirii', '8', '10:30:00', '16:00:00', 'scrieti-mi'),
(61, 'Oradea', 'Dorobantilor', 'Str. Horea', '2', '09:30:00', '14:50:00', 'sunati-ma'),
(62, 'Oradea', 'Dorobantilor', 'Str. Horea', '5', '10:30:00', '18:00:00', 'scrieti-mi'),
(63, 'Oradea', 'Dorobantilor', 'Str. Horea', '7', '09:30:00', '14:30:00', 'scrieti-mi'),
(64, 'Oradea', 'Dorobantilor', 'Str. Albacului', '2A', '10:30:00', '19:00:00', 'sunati-ma'),
(65, 'Oradea', 'Dorobantilor', 'Str. Albacului', '22', '08:00:00', '14:40:00', 'scrieti-mi'),
(66, 'Oradea', 'Dorobantilor', 'Str. Albacului', '2B', '10:30:00', '23:00:00', ':)'),
(67, 'Oradea', 'Subcetate', 'Str. Grivitei', '1', '09:30:00', '14:50:00', 'sunati-ma'),
(68, 'Oradea', 'Subcetate', 'Str. Grivitei', '2', '10:30:00', '18:00:00', 'scrieti-mi'),
(69, 'Oradea', 'Subcetate', 'Str. Grivitei', '4', '09:30:00', '14:30:00', 'scrieti-mi'),
(70, 'Oradea', 'Subcetate', 'Str. Grivitei', '6', '10:30:00', '19:00:00', 'sunati-ma'),
(71, 'Oradea', 'Subcetate', 'Str. Grivitei', '15A', '08:00:00', '14:40:00', 'scrieti-mi'),
(72, 'Oradea', 'Subcetate', 'Str. Grivitei', '15B', '10:30:00', '23:00:00', ':)'),
(73, 'Deva', 'Micro 15', 'Str. Minerului', '1', '09:30:00', '14:50:00', 'sunati-ma'),
(74, 'Deva', 'Micro 15', 'Aleea Teilor', '2', '10:30:00', '18:00:00', 'scrieti-mi'),
(75, 'Deva', 'Micro 15', 'Aleea Armatei', '4', '09:30:00', '14:30:00', 'scrieti-mi'),
(76, 'Deva', 'Centrul Vechi', 'Str. Aleea Neptun', 'A6B', '10:30:00', '19:00:00', 'str langa biserica'),
(77, 'Deva', 'Centrul Vechi', 'Str. Magnoliei', '5A', '08:00:00', '14:40:00', 'scrieti-mi'),
(78, 'Deva', 'Centrul Vechi', 'Str. Magnoliei', '5B', '10:30:00', '23:00:00', ':)');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `people`
--
ALTER TABLE `people`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `person_id` (`person_id`),
  ADD KEY `spot_id` (`spot_id`);

--
-- Indexes for table `spots`
--
ALTER TABLE `spots`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `people`
--
ALTER TABLE `people`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT for table `spots`
--
ALTER TABLE `spots`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`person_id`) REFERENCES `people` (`id`),
  ADD CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`spot_id`) REFERENCES `spots` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
