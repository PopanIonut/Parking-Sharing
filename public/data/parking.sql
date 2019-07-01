-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2019 at 05:48 PM
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
(4, 'Dobrescu', 'Vlad', 769951753, 'Dobrescu.Vlad@gmail.com', 'CJ25DOC'),
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
(1, 1, 1, '2019-06-24 18:35:24', '0000-00-00 00:00:00'),
(2, 2, 1, '2019-06-24 18:36:13', '0000-00-00 00:00:00'),
(3, 2, 1, '2019-06-24 18:37:16', NULL);

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
(12, 'Cluj', 'Gruia', 'Str. Calarasilor', '12', '08:00:00', '10:00:00', ''),
(13, 'Cluj', 'Gruia', 'Str. Campeni', '13', '01:00:00', '03:00:00', ''),
(14, 'Cluj', 'Gruia', 'Str. Dornei', '14', '04:00:00', '06:00:00', ''),
(15, 'Cluj', 'Gruia', 'Str. Haiducului', '15', '07:00:00', '11:00:00', ''),
(16, 'Cluj', 'Gruia', 'Str. Lemnului', '16', '01:00:00', '01:00:00', ''),
(17, 'Cluj', 'Gruia', 'Str. Mecanicilor', '17', '04:00:00', '03:00:00', ''),
(18, 'Cluj', 'Gruia', 'Str. Pescarilor', '18', '02:00:00', '05:00:00', ''),
(19, 'Cluj', 'Someseni', 'Str. Ciocanului', '19', '02:00:00', '04:00:00', ''),
(20, 'Cluj', 'Someseni', 'Str. Ciocanului', '19', '02:00:00', '01:00:00', ''),
(21, 'Cluj', 'Someseni', 'Str. Dobrogei', '20', '06:00:00', '03:00:00', ''),
(22, 'Cluj', 'Someseni', 'Str. Lucernei', '21', '03:00:00', '01:00:00', ''),
(23, 'Cluj', 'Someseni', 'Str. Morii', '22', '07:00:00', '03:00:00', ''),
(24, 'Cluj', 'Someseni', 'Str. Prieteniei', '23', '05:00:00', '02:00:00', ''),
(25, 'Cluj', 'Someseni', 'Str. Rozelor', '24', '09:00:00', '06:00:00', ''),
(26, 'Cluj', 'Someseni', 'Str. Sportului', '25', '03:00:00', '02:00:00', '');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `spots`
--
ALTER TABLE `spots`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

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
