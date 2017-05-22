-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2017 at 01:48 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tim5`
--

-- --------------------------------------------------------

--
-- Table structure for table `document`
--

CREATE TABLE `document` (
  `ID` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `document_link` varchar(255) COLLATE utf8_slovenian_ci DEFAULT NULL,
  `is_approved` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

--
-- Dumping data for table `document`
--

INSERT INTO `document` (`ID`, `user_id`, `document_link`, `is_approved`) VALUES
(1, 1, 'https://docs.google.com/document/d/1Re5X0-H_Mu_sEWvXvKYLtwnT1Lgqaz-p2s0zXCu8T4Q/edit', b'1'),
(2, 1, 'https://docs.google.com/document/d/1iZf5sk7MumqJbQJJgChgaJMb5BGzHrCKdLofVxFqvDE/edit', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `ID` int(11) NOT NULL,
  `role_name` varchar(20) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`ID`, `role_name`) VALUES
(1, 'Administrator'),
(2, 'Korisnik'),
(3, 'Recenzent');

-- --------------------------------------------------------

--
-- Table structure for table `speaker`
--

CREATE TABLE `speaker` (
  `id` int(11) NOT NULL,
  `cv` varchar(255) COLLATE utf8_slovenian_ci DEFAULT NULL,
  `info` varchar(1000) COLLATE utf8_slovenian_ci NOT NULL,
  `link` varchar(255) COLLATE utf8_slovenian_ci DEFAULT NULL,
  `first_name` varchar(255) COLLATE utf8_slovenian_ci DEFAULT NULL,
  `image_link` varchar(255) COLLATE utf8_slovenian_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_slovenian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

--
-- Dumping data for table `speaker`
--

INSERT INTO `speaker` (`id`, `cv`, `info`, `link`, `first_name`, `image_link`, `last_name`) VALUES
(1, '', 'Napomena: ', 'https://www.youtube.com/watch?v=XgtopghkBZc', 'Petar', 'http://cdn.zmescience.com/wp-content/uploads/2016/12/giraffe-912182_960_720.jpg', 'Petrovic'),
(2, 'moj cv', 'moje info', 'www.google.ba', 'Lejla', 'http://www.clipartbest.com/cliparts/yik/bbr/yikbbrkiE.png', 'Kesko'),
(3, 'cv2', 'info', 'www.google.ba', 'Lejlaaaa', 'http://www.clipartbest.com/cliparts/yik/bbr/yikbbrkiE.png', 'Keskoooo');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) COLLATE utf8_slovenian_ci DEFAULT NULL,
  `last_name` varchar(50) COLLATE utf8_slovenian_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `password` varchar(255) COLLATE utf8_slovenian_ci DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `is_verified` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `role_id`, `is_verified`) VALUES
(1, 'Lela', 'Kesko', 'lela.kesko@gmail.com', 'nemasifre', 1, b'1'),
(2, 'Nejla', 'Klisura', 'nejla.klisura@gmail.com', 'nemasifre1', 3, b'1'),
(3, 'Imenko', 'Prezimenko', 'imenko.prezimenko@gmail.com', 'nemasifre3', 2, b'1'),
(4, 'Simba', 'Limba', 'simba.limba@hotmail.com', 'simbalimba', 3, b'1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `document`
--
ALTER TABLE `document`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_Document_1_idx` (`user_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `index2` (`role_name`);

--
-- Indexes for table `speaker`
--
ALTER TABLE `speaker`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `index3` (`email`),
  ADD KEY `fk_User_1_idx` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `document`
--
ALTER TABLE `document`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `speaker`
--
ALTER TABLE `speaker`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `document`
--
ALTER TABLE `document`
  ADD CONSTRAINT `FKjhdxdv9sijhujiynqbb5jc010` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `fk_Document_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FKn82ha3ccdebhokx3a8fgdqeyy` FOREIGN KEY (`role_id`) REFERENCES `role` (`ID`),
  ADD CONSTRAINT `fk_User_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
