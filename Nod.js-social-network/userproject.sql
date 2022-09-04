/*
 Navicat Premium Data Transfer

 Source Server         : narek
 Source Server Type    : MySQL
 Source Server Version : 100138
 Source Host           : localhost:3306
 Source Schema         : userproject

 Target Server Type    : MySQL
 Target Server Version : 100138
 File Encoding         : 65001

 Date: 13/05/2019 20:55:45
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for freands
-- ----------------------------
DROP TABLE IF EXISTS `freands`;
CREATE TABLE `freands`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user1.id` int(11) NULL DEFAULT NULL,
  `user.2.id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user1.id`(`user1.id`) USING BTREE,
  INDEX `user.2.id`(`user.2.id`) USING BTREE,
  CONSTRAINT `freands_ibfk_1` FOREIGN KEY (`user1.id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `freands_ibfk_2` FOREIGN KEY (`user.2.id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for request
-- ----------------------------
DROP TABLE IF EXISTS `request`;
CREATE TABLE `request`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user1.id` int(11) NULL DEFAULT NULL,
  `user2.id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user1.id`(`user1.id`) USING BTREE,
  INDEX `user2.id`(`user2.id`) USING BTREE,
  CONSTRAINT `request_ibfk_1` FOREIGN KEY (`user1.id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `request_ibfk_2` FOREIGN KEY (`user2.id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `surname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `age` int(11) NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 40 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (35, 'Narek', 'Babayan', 21, 'babayan@mail.com', '$2b$10$7/mCtGObJuVeypIysahek.XSJiNHkujDrijDvupFE/XxE/JOm7OMm', '/img/avatar/1557760008436_3.jpg');
INSERT INTO `user` VALUES (36, 'Armen', 'Aramyan', 18, 'Aramyan32@mail.com', '$2b$10$Y9s1v0htCkUsAmvAFvtjtum/m2fJrEPPT/2gzhXRyRVOuESQeb/22', '/img/avatar/avatar.png');
INSERT INTO `user` VALUES (37, 'Davit', 'Hambardumyan', 39, 'Davit@mail.com', '$2b$10$i1h2M2Ugd1g1LinLxYHY2uUl4ig1cfJA2NpwIccXtFUDxfrabm4ne', '/img/avatar/avatar.png');
INSERT INTO `user` VALUES (38, 'Anush', 'Vardanyan', 25, 'Vardanyan@mail.com', '$2b$10$h7s0rJmTYNl7l11XtUYQQeX3ZqsjjmbE8Yiib8/NKlh3tKkSxTkzm', '/img/avatar/avatar.png');
INSERT INTO `user` VALUES (39, 'Hasmik', 'Minasyan', 22, 'Minasyan@gmail.com', '$2b$10$AiwOA2l6CaEYj.9YHXLyeeH8R7.C3ahc/UKuExYGo/URUkJZkq7SW', '/img/avatar/avatar.png');

SET FOREIGN_KEY_CHECKS = 1;
