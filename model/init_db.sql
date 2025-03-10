/* THIS DATABASE NEEDS UPDATING WITH THE IMAGE URLS FROM THE ARRAY + A REVIEW ROW ADDING */



-- MySQL dump 10.13  Distrib 9.2.0, for Win64 (x86_64)
--
-- Host: localhost    Database: board_games_tracker
-- ------------------------------------------------------
-- Server version	9.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `board_games`
--

DROP TABLE IF EXISTS `board_games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board_games` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `game_type` text NOT NULL,
  `description` text NOT NULL,
  `company` varchar(255) NOT NULL,
  `players_required` int NOT NULL,
  `time_required` int NOT NULL,
  `published` year NOT NULL,
  `image` varchar(255) NOT NULL,
  /*`reviews` varchar(255)*/
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board_games`
--

LOCK TABLES `board_games` WRITE;
/*!40000 ALTER TABLE `board_games` DISABLE KEYS */;
INSERT INTO `board_games` VALUES (1,'Wingspan','Engine-Building, Card Game','Wingspan is a competitive, medium-weight, card-driven, engine-building board game where players take on the role of bird enthusiasts working to attract the best birds to their wildlife preserves. The game is played over four rounds, where players collect food, lay eggs, and draw bird cards in order to build their engine and score points.','Stonemaier Games',5,70,2019,''),(2,'Root','Area Control, Strategy, Adventure','Root is a strategy game of woodland might and right where players take on the role of asymmetrical factions vying for control of a vast forest. Each faction plays differently and has its own unique way to interact with the other players, leading to an ever-changing strategic experience.','Leder Games',4,90,2018,'https://www.gameslore.com/acatalog/LED01018500.jpg'),(3,'Catan','Strategy, Resource Management, Trading','Catan (formerly The Settlers of Catan) is a popular strategy board game where players collect and trade resources to build settlements, cities, and roads in a race to reach 10 victory points. The game involves resource management, trading, and building strategies.','Catan Studio',4,120,1995,'https://cf.geekdo-images.com/PyUol9QxBnZQCJqZI6bmSA__itemrep/img/zUs-jB7S9JTuLPOcY9pUxaqYNqA=/fit-in/246x300/filters:strip_icc()/pic8632666.png'),(4,'Codenames','Word Game, Party Game, Social Deduction','Codenames is a social word game where two teams of spymasters give one-word clues to their teams to guess the words that correspond to their agents on the board. It`s a fun and quick game that involves deduction and creativity, ideal for parties.','Czech Games Edition',8,60,2015,'https://cf.geekdo-images.com/BZjXYbxjm9zyYBOg9taFvQ__original/img/RF_qzIt8vf2q8Sry9EY8-34OTpc=/0x0/filters:format(webp)/pic2437169.jpg'),(5,'Monopoly Deluxe Edition','Strategy, Economic','Monopoly Deluxe Edition is a high-quality version of the classic Monopoly game, featuring a deluxe board, luxury playing pieces, and a smooth, updated playing experience. Players aim to buy, sell, and trade properties to accumulate wealth and bankrupt their opponents.','Hasbro',6,120,1997,'https://cf.geekdo-images.com/xjK2feN8MPlOEK3-aWlwlg__original/img/aSyQccRmZGvG6Z9d-hGRz-LG1l8=/0x0/filters:format(webp)/pic3596357.jpg'),(6,'Flamecraft','Strategy, Engine-Building, Fantasy','Flamecraft is a worker placement game set in a magical world where players take on the role of artisans, crafting powerful items with the help of adorable dragons. It features a unique theme and charming artwork while offering deep strategic gameplay.','Cardboard Alchemy',5,60,2022,'https://cf.geekdo-images.com/qZK8o1_Kf4H6gk2AnruUPg__original/img/kV0UR_tjpcpt-K_cZySnl0DYoH8=/0x0/filters:format(webp)/pic7025020.jpg'),(7,'Cards Against Humanity','Party Game, Social Deduction, Word Game','Cards Against Humanity is a party game in which players fill in blanks of incomplete sentences using cards with humorous or controversial phrases. It is designed for mature players and is known for its irreverent humor.','Cards Against Humanity LLC',20,60,2011,'https://cf.geekdo-images.com/7tH2A1m_9gffXa3mAhI1Mw__original/img/VfT-B8cR1gJ-8ezqxZdAqEedFjk=/0x0/filters:format(webp)/pic913106.jpg'),(8,'Bananagrams','Word Game, Party Game','Bananagrams is a fast-paced word game where players race to build their own crossword grid using letter tiles. The game is quick, easy to learn, and great for parties.','Bananagrams Inc.',8,30,2006,'https://cf.geekdo-images.com/e0EgoBv0DCiv9Gb-V2kdGg__original/img/hg62GzBcn7jZ4m00jlQLN9F28bI=/0x0/filters:format(webp)/pic478410.jpg'),(9,'Sounds Fishy','Party Game, Social Deduction','In Sounds Fishy, players take turns being the \"Liar\" who has to make up a story about a given topic while the other players try to guess if the story is true or a lie. It?s a fun and lighthearted game of bluffing and deception.','Big Potato Games',6,30,2021,'https://cf.geekdo-images.com/3n0vqrzvkw3BHK2TK88eyw__original/img/hkz23M9wKvNCvGp0pVNOz7Z76Ho=/0x0/filters:format(webp)/pic7026331.jpg'),(10,'Ticket to Ride: Europe','Strategy, Route Building, Family Game','Ticket to Ride: Europe is a variation of the classic Ticket to Ride game, where players build train routes across Europe. The game introduces tunnels, ferries, and stations, adding extra layers of strategy and excitement.','Days of Wonder',5,60,2005,'https://cf.geekdo-images.com/-1wVp6bpSLoF5gZ-x99Mkw__original/img/BzHhKNkqUBeesg48TjveVpi6S9Y=/0x0/filters:format(webp)/pic1872522.jpg'),(11,'Clue','Deduction, Mystery','Clue is a classic murder mystery board game where players must deduce who committed the murder, with what weapon, and in which room. The game involves logical thinking and deduction as players gather clues and eliminate possibilities.','Hasbro',6,60,1949,'https://cf.geekdo-images.com/ahPQE-DiczkDtbKTV9OZ4g__original/img/BYsAx5uXKujfJ5lZa4-JO6aA5iA=/0x0/filters:format(webp)/pic2019846.jpg'),(12,'Scrabble','Word Game','Scrabble is a classic word game where players use letter tiles to form words on a game board. Points are scored based on the letter values and the placement of words on premium squares.','Hasbro',4,60,1938,'https://cf.geekdo-images.com/7Ojo1fuDLfL0AL4_zQ9Gbw__original/img/6n8F3axjC7S7dMz7hxuVKETnS9M=/0x0/filters:format(webp)/pic3579215.jpg'),(13,'Hues and Cues','Party Game, Word Game, Color Recognition','In Hues and Cues, players give and guess clues based on colors to try to identify a particular hue on the board. It?s a fun and challenging game that tests your color perception and your ability to communicate it effectively to others.','The OP',10,45,2020,'https://cf.geekdo-images.com/udt5gD-9gtAgNNwm6m7PpA__original/img/9PA6hNfu7gR8ZkjmhFYhl2gk3YM=/0x0/filters:format(webp)/pic5083284.jpg'),(14,'Quoridor','Abstract Strategy, Grid Movement','Quoridor is an abstract strategy game where players race to move their pawn to the opposite side of the board. Players can block each other\'s paths using walls, creating a tense and strategic game of positioning.','Gigamic',4,30,1997,'https://cf.geekdo-images.com/8eWbZYjr9M4eFwz1h3Onvw__original/img/PITG9F0ykiwV9O2Vsn5hAY7sd2c=/0x0/filters:format(webp)/pic1366890.jpg'),(15,'Pandemic','Cooperative, Strategy, Disease Simulation','Pandemic is a cooperative strategy game where players work together to stop the spread of diseases around the world. Players take on different roles and must strategize to find cures and prevent outbreaks before time runs out.','Z-Man Games',4,60,2008,'https://cf.geekdo-images.com/3U2n_FekbpHNR4WjvjYw0Q__original/img/8Txl-F6YsG2wN0T7pSPrbz1frKw=/0x0/filters:format(webp)/pic1275735.jpg'),(16,'Articulate','Party Game, Word Game, Communication','Articulate is a fast-paced word guessing game where players describe words without saying them directly. The aim is to get your team to guess as many words as possible within a set time limit.','Drumond Park',20,60,1992,'https://cf.geekdo-images.com/Yz_51lreSyzO0DtS3p92Yw__original/img/gUB7TS7QsY4e8Onj3wa4T0O0RLg=/0x0/filters:format(webp)/pic3356710.jpg'),(17,'Wavelength','Party Game, Social Deduction, Communication','Wavelength is a social guessing game where players try to get their teammates to guess a position on a spectrum between two extremes. It?s about giving clues that will be interpreted accurately by your team while understanding their thought process.','Palm Court',12,45,2019,'https://cf.geekdo-images.com/T1OkB_7Vcl57yqJbFh-1lg__original/img/TzpEKzM-hysp6kBxXzzVbwbeKXI=/0x0/filters:format(webp)/pic4961337.jpg'),(18,'Calico','Strategy, Tile-Laying, Puzzle','Calico is a tile-laying game where players create beautiful quilts by placing colorful tiles in a strategic manner. The goal is to complete patterns and meet the specific goals of the game while competing for the best quilt design.','Flatout Games',4,45,2020,'https://cf.geekdo-images.com/i0B37U3LthvhgOU0Mmcjkw__original/img/oZX9MLe9HHiPj-2R6Gh-X86wnl8=/0x0/filters:format(webp)/pic5769861.jpg'),(19,'Mysterium','Cooperative, Social Deduction, Mystery','Mysterium is a cooperative game where one player takes the role of a ghost trying to communicate the details of their murder to the other players. Using abstract vision cards, the ghost provides clues for the other players to deduce the correct combination of suspect, weapon, and location.','Libellud',7,60,2015,'https://cf.geekdo-images.com/5r5niLmeYo-VocgO6gEzYw__original/img/7Fw1ftckVdughqDXb1h9VLeBzfs=/0x0/filters:format(webp)/pic2805751.jpg'),(20,'Turing Machine','Puzzle, Deduction, Cooperative','Turing Machine is a game of deduction where players must use a set of clues to figure out the hidden code. Players test their hypotheses using a set of mechanical machines, making it a mix of logic and hands-on experimentation. The goal is to deduce the correct code before time runs out.','Scorpion Masqué',4,60,2022,'https://cf.geekdo-images.com/fXcOdX-x1T9A0kt3vDmiFg__original/img/0PrBHIr0RJ0Px_Hov8h7uQWL-Fg=/0x0/filters:format(webp)/pic6562143.jpg');
/*!40000 ALTER TABLE `board_games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `game_id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `username` varchar(255) NOT NULL,
  `rating` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-04 15:37:44
