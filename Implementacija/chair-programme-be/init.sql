-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 11, 2017 at 11:18 AM
-- Server version: 5.7.17-0ubuntu0.16.04.2
-- PHP Version: 7.0.15-0ubuntu0.16.04.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

DROP SCHEMA IF EXISTS `tim5` ;
CREATE DATABASE tim5;
USE  tim5;

--
-- Database: `tim5`
--

-- --------------------------------------------------------

--
-- Table structure for table `Document`
--

DROP TABLE IF EXISTS `tim5`.`Document`;

CREATE TABLE `Document` (
  `ID` int(11) NOT NULL,
  `UserID` int(11) DEFAULT NULL,
  `DocumentLink` varchar(255) COLLATE utf8_slovenian_ci DEFAULT NULL,
  `IsApproved` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Role`
--

DROP TABLE IF EXISTS `tim5`.`Role`;

CREATE TABLE `Role` (
  `ID` int(11) NOT NULL,
  `RoleName` varchar(20) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Speaker`
--

DROP TABLE IF EXISTS `tim5`.`Speaker`;

CREATE TABLE `Speaker` (
  `ID` int(11) NOT NULL,
  `FirstName` varchar(50) COLLATE utf8_slovenian_ci NOT NULL,
  `LastName` varchar(50) COLLATE utf8_slovenian_ci NOT NULL,
  `CV` varchar(255) COLLATE utf8_slovenian_ci DEFAULT NULL,
  `ImageLink` varchar(255) COLLATE utf8_slovenian_ci NOT NULL,
  `Info` varchar(1000) COLLATE utf8_slovenian_ci NOT NULL,
  `Link` varchar(255) COLLATE utf8_slovenian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `tim5`.`User`;

CREATE TABLE `User` (
  `ID` int(11) NOT NULL,
  `FirstName` varchar(50) COLLATE utf8_slovenian_ci DEFAULT NULL,
  `LastName` varchar(50) COLLATE utf8_slovenian_ci DEFAULT NULL,
  `Email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `Password` varchar(255) COLLATE utf8_slovenian_ci DEFAULT NULL,
  `RoleID` int(11) DEFAULT NULL,
  `IsVerified` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Document`
--
ALTER TABLE `Document`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_Document_1_idx` (`UserID`);

--
-- Indexes for table `Role`
--
ALTER TABLE `Role`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `index2` (`RoleName`);

--
-- Indexes for table `Speaker`
--
ALTER TABLE `Speaker`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `index3` (`Email`),
  ADD KEY `fk_User_1_idx` (`RoleID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Role`
--
ALTER TABLE `Role`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Speaker`
--
ALTER TABLE `Speaker`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Document`
--
ALTER TABLE `Document`
  ADD CONSTRAINT `fk_Document_1` FOREIGN KEY (`UserID`) REFERENCES `User` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `User`
--
ALTER TABLE `User`
  ADD CONSTRAINT `fk_User_1` FOREIGN KEY (`RoleID`) REFERENCES `Role` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

