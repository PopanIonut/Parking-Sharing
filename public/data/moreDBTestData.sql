INSERT INTO `spots` (`id`, `city`, `area`, `address`, `spot_nr`, `t_from`, `t_until`, `description`) VALUES
(NULL, 'Oradea', 'Orasul Nou', 'Str. Mihai Pavel', '1', '10:00:00', '18:00:00', 'sunati-ma'),
(NULL, 'Oradea', 'Orasul Nou', 'Str. Mihai Pavel', '2', '10:30:00', '14:00:00', 'scrieti-mi'),
(NULL, 'Oradea', 'Orasul Nou', 'Str. Mihai Pavel', '2', '10:30:00', '14:00:00', 'scrieti-mi'),
(NULL, 'Oradea', 'Orasul Nou', 'Str. Mihai Pavel', '4', '10:30:00', '17:00:00', ':0'),
(NULL, 'Oradea', 'Orasul Nou', 'Piata Unirii', '2A', '06:00:00', '18:45:00', 'scrieti-mi'),
(NULL, 'Oradea', 'Orasul Nou', 'Piata Unirii', '2B', '10:30:00', '13:00:00', 'ocupat 20m d la 12'),
(NULL, 'Oradea', 'Orasul Nou', 'Piata Unirii', '23', '08:30:00', '12:20:00', 'scrieti-mi'),
(NULL, 'Oradea', 'Orasul Nou', 'Piata Unirii', '8', '10:30:00', '16:00:00', 'scrieti-mi'),
(NULL, 'Oradea', 'Dorobantilor', 'Str. Horea', '2', '09:30:00', '14:50:00', 'sunati-ma'),
(NULL, 'Oradea', 'Dorobantilor', 'Str. Horea', '5', '10:30:00', '18:00:00', 'scrieti-mi'),
(NULL, 'Oradea', 'Dorobantilor', 'Str. Horea', '7', '09:30:00', '14:30:00', 'scrieti-mi'),
(NULL, 'Oradea', 'Dorobantilor', 'Str. Albacului', '2A', '10:30:00', '19:00:00', 'sunati-ma'),
(NULL, 'Oradea', 'Dorobantilor', 'Str. Albacului', '22', '08:00:00', '14:40:00', 'scrieti-mi'),
(NULL, 'Oradea', 'Dorobantilor', 'Str. Albacului', '2B', '10:30:00', '23:00:00', ':)'),
(NULL, 'Oradea', 'Subcetate', 'Str. Grivitei', '1', '09:30:00', '14:50:00', 'sunati-ma'),
(NULL, 'Oradea', 'Subcetate', 'Str. Grivitei', '2', '10:30:00', '18:00:00', 'scrieti-mi'),
(NULL, 'Oradea', 'Subcetate', 'Str. Grivitei', '4', '09:30:00', '14:30:00', 'scrieti-mi'),
(NULL, 'Oradea', 'Subcetate', 'Str. Grivitei', '6', '10:30:00', '19:00:00', 'sunati-ma'),
(NULL, 'Oradea', 'Subcetate', 'Str. Grivitei', '15A', '08:00:00', '14:40:00', 'scrieti-mi'),
(NULL, 'Oradea', 'Subcetate', 'Str. Grivitei', '15B', '10:30:00', '23:00:00', ':)'),
(NULL, 'Deva', 'Micro 15', 'Str. Minerului', '1', '09:30:00', '14:50:00', 'sunati-ma'),
(NULL, 'Deva', 'Micro 15', 'Aleea Teilor', '2', '10:30:00', '18:00:00', 'scrieti-mi'),
(NULL, 'Deva', 'Micro 15', 'Aleea Armatei', '4', '09:30:00', '14:30:00', 'scrieti-mi'),
(NULL, 'Deva', 'Centrul Vechi', 'Str. Aleea Neptun', 'A6B', '10:30:00', '19:00:00', 'str langa biserica'),
(NULL, 'Deva', 'Centrul Vechi', 'Str. Magnoliei', '5A', '08:00:00', '14:40:00', 'scrieti-mi'),
(NULL, 'Deva', 'Centrul Vechi', 'Str. Magnoliei', '5B', '10:30:00', '23:00:00', ':)');


INSERT INTO `reservations` (`id`, `person_id`, `spot_id`, `start`, `ending`) VALUES
(NULL, '1', '26', '2019-07-02 05:06:00', NULL),
(NULL, '1', '7', '2019-07-03 05:06:00', '2019-07-03 05:06:00'),
(NULL, '2', '30', '2019-07-03 05:06:00', NULL),
(NULL, '2', '32', '2019-07-04 05:06:00', '2019-07-04 07:06:00'),
(NULL, '3', '23', '2019-07-03 05:06:00', NULL),
(NULL, '3', '37', '2019-07-05 06:00:00', '2019-07-05 08:00:00'),
(NULL, '1', '42', '2019-07-03 05:06:00', NULL),
(NULL, '2', '36', '2019-07-14 05:06:00', NULL),
(NULL, '3', '26', '2019-07-14 07:30:00', NULL),
(NULL, '5', '16', '2019-07-14 05:06:00', NULL),
(NULL, '10', '4', '2019-07-03 06:00:00', NULL),
(NULL, '9', '42', '2019-07-04 05:06:00', NULL),
(NULL, '5', '39', '2019-07-07 05:06:00', '2019-07-07 23:06:00'),
(NULL, '4', '39', '2019-07-08 07:06:00', '2019-07-08 08:00:00'),
(NULL, '6', '33', '2019-07-09 05:06:00', '2019-07-09 05:18:00'),
(NULL, '6', '34', '2019-07-10 06:06:00', '2019-07-10 15:36:00'),
(NULL, '8', '35', '2019-07-13 05:50:00', '2019-07-13 09:06:00'),
(NULL, '4', '23', '2019-07-23 07:00:00', '2019-07-23 12:30:00'),
(NULL, '3', '24', '2019-07-29 05:06:00', NULL),
(NULL, '10', '25', '2019-07-28 06:06:00', NULL),
(NULL, '9', '11', '2019-07-05 05:06:00', NULL),
(NULL, '2', '12', '2019-07-06 08:06:00', NULL),
(NULL, '1', '13', '2019-07-07 05:06:00', NULL),
(NULL, '1', '19', '2019-07-08 09:50:00', NULL),
(NULL, '5', '18', '2019-07-11 05:06:00', '2019-07-11 07:06:00'),
(NULL, '6', '20', '2019-07-12 16:06:00', '2019-07-12 17:00:00'),
(NULL, '7', '21', '2019-07-13 05:06:00', '2019-07-13 06:56:00'),
(NULL, '7', '15', '2019-07-15 05:06:00', '2019-07-15 06:45:00'),
(NULL, '9', '17', '2019-07-15 05:06:00', '2019-07-15 10:15:00'),
(NULL, '10', '34', '2019-07-15 06:56:00', '2019-07-15 09:16:00'),
(NULL, '8', '36', '2019-07-20 05:06:00', NULL),
(NULL, '9', '38', '2019-07-02 13:56:00', NULL),
(NULL, '3', '6', '2019-07-04 13:24:00', NULL),
(NULL, '3', '6', '2019-07-04 17:45:00', NULL),
(NULL, '2', '26', '2019-07-16 05:06:00', NULL),
(NULL, '5', '22', '2019-07-17 13:26:00', NULL),
(NULL, '4', '33', '2019-07-18 05:06:00', '2019-07-18 05:06:00'),
(NULL, '4', '19', '2019-07-19 15:46:00', '2019-07-19 05:06:00'),
(NULL, '1', '10', '2019-07-18 05:06:00', '2019-07-18 05:06:00'),
(NULL, '2', '7', '2019-07-17 05:06:00', '2019-07-17 05:06:00'),
(NULL, '3', '7', '2019-07-15 09:46:00', '2019-07-15 05:06:00'),
(NULL, '4', '4', '2019-07-13 04:30:00', '2019-07-13 22:26:00'),
(NULL, '6', '6', '2019-07-22 05:06:00', NULL),
(NULL, '7', '37', '2019-07-22 05:06:00', NULL),
(NULL, '8', '8', '2019-07-22 07:00:00', NULL),
(NULL, '9', '9', '2019-07-34 12:00:00', NULL),
(NULL, '1', '31', '2019-07-34 05:06:00', NULL),
(NULL, '2', '32', '2019-07-26 05:06:00', NULL),
(NULL, '10', '10', '2019-07-30 01:00:00', '2019-07-30 05:00:00'),
(NULL, '9', '19', '2019-07-27 05:36:00', '2019-07-27 09:23:00'),
(NULL, '7', '17', '2019-07-27 05:58:00', '2019-07-27 07:47:00'),
(NULL, '5', '29', '2019-07-26 09:06:00', '2019-07-26 18:08:00'),
(NULL, '4', '39', '2019-07-29 05:06:00', '2019-07-26 18:26:00'),
(NULL, '2', '28', '2019-07-30 10:06:00', '2019-07-30 14:27:00');