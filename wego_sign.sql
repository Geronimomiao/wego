/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : wego_sign

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 27/08/2019 16:18:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for info
-- ----------------------------
DROP TABLE IF EXISTS `info`;
CREATE TABLE `info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `major` varchar(255) DEFAULT NULL,
  `class_num` varchar(255) DEFAULT NULL,
  `stu_num` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `reward` varchar(500) DEFAULT NULL,
  `hobby` varchar(500) DEFAULT NULL,
  `summary` varchar(500) DEFAULT NULL,
  `state` tinyint(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of info
-- ----------------------------
BEGIN;
INSERT INTO `info` VALUES (10, '王思邈', '男', '软件', '1701', '1711650121', '13001380337', '12', '1', '111', 0);
COMMIT;

-- ----------------------------
-- Table structure for manage
-- ----------------------------
DROP TABLE IF EXISTS `manage`;
CREATE TABLE `manage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of manage
-- ----------------------------
BEGIN;
INSERT INTO `manage` VALUES (1, 'wego', 'tjpu');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
