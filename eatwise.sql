CREATE DATABASE IF NOT EXISTS `eatwise` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `eatwise`;


create table if not exists user(
	userId int(5) not null auto_increment,
	adminAccess boolean NOT NULL,
	username varchar(50),
	email varchar(50),
	displayName varchar(50),
	password varchar(50),
	location varchar(50) not null,
	primary key(userId)
); /*ENGINE = InnoDB DEFAULT CHARSET = latin1*/

create table if not exists shop(
	shopId int(5) not null auto_increment,
	name varchar(50),
	avgPrice varchar(50),
	type varchar(50),
	location varchar(50),
	description varchar(50),
	menu varchar(50),
	votes int(10),
	primary key(shopId)
); /*ENGINE = InnoDB DEFAULT CHARSET = latin1*/

create table if not exists review(
	reviewId int(5) not null auto_increment,
	userId int(5) not null,
	reviewCreation TIMESTAMP NOT NULL DEFAULT(curdate()),
	shopId int(5) not null,
	comment varchar(150),
	tips varchar(150),
	rating int(1) not null,
	primary key(reviewId)
); /*ENGINE = InnoDB DEFAULT CHARSET = latin1;*/

create table if not exists report(
	reportId int(5) not null auto_increment,
	userId int(5) not null,
	reportCreation TIMESTAMP NOT NULL DEFAULT(current_timestamp()),
	shopId int(5) not null,
	reason varchar(150),
	primary key(reportId)
); /*ENGINE = InnoDB DEFAULT CHARSET = latin1;*/

create table if not exists log_user(
	logId int(5) not null auto_increment,
	time_stamp TIMESTAMP NOT NULL DEFAULT(current_timestamp()),
	action varchar(10),
	userId int(5) not null,
	adminAccess boolean,
	username varchar(50),
	displayName varchar(50),
	password varchar(50),
	location varchar(50),
	primary key(logId)
);

create table if not exists log_shop(
	logId int(5) not null auto_increment,
	time_stamp TIMESTAMP NOT NULL DEFAULT(current_timestamp()),
	action varchar(10),
	shopId int(5) not null,
	name varchar(50),
	avgPrice varchar(50),
	type varchar(50),
	location varchar(50),
	description varchar(50),
	menu varchar(50),
	votes int(10),
	primary key(logId)
);

create table if not exists log_review(
	logId int(5) not null auto_increment,
	time_stamp TIMESTAMP NOT NULL DEFAULT(current_timestamp()),
	action varchar(10),
	reviewId int(5) not null,
	userId int(5),
	reviewCreation TIMESTAMP,
	shopId int(5),
	comment varchar(150),
	tips varchar(150),
	rating int(1),
	primary key(logId)
);

create table if not exists log_report(
	logId int(5) not null auto_increment,
	time_stamp TIMESTAMP NOT NULL DEFAULT(current_timestamp()),
	action varchar(10),
	reportId int(5) not null,
	userId int(5),
	reportCreation TIMESTAMP,
	shopId int(5),
	reason varchar(150),
	primary key(logId)
);

insert into user (userId, adminAccess, username, email, displayName, password, location) values (1, false, 'cchambers0', 'cc@gmail.com', 'Crosby', 'AeA60qT1Ms', 'Taranovskoye');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (2, false, 'gjensen1', 'cc@gmail.com', 'Gordon', 'RlsFC2Q', 'Dalmeny');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (3, false, 'hpaish2', 'cc@gmail.com', 'Hewe', 'WGkQiejkPV5', 'Mahendranagar');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (4, true, 'ccasbolt3', 'cc@gmail.com', 'Curr', 'h9oqbCR', 'Souto');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (5, false, 'hcastelin4', 'cc@gmail.com', 'Herman', 'bmumzBKqCW', 'Keruguya');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (6, true, 'cabramchik5', 'cc@gmail.com', 'Clywd', 'FzHd5i5HJpiW', 'Budapest');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (7, false, 'nbedo6', 'cc@gmail.com', 'Niel', 'w6inM9P0', 'Madamba');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (8, true, 'mmoakson7', 'cc@gmail.com', 'Matthias', '7fLi78phE', 'Pasarbaru');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (9, true, 'wbrimm8', 'cc@gmail.com', 'Warde', '4oZ3CK', 'Wakimachi');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (10, false, 'bternent9', 'cc@gmail.com', 'Bealle', 'AtHVgTI3iJw', 'Neftegorsk');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (11, true, 'lfeaka', 'cc@gmail.com', 'Lemmy', 'O7rPKc85', 'Saint-Augustin-de-Desmaures');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (12, true, 'bdonoherb', 'cc@gmail.com', 'Brandon', 'Gfwm36p', 'Batanamang');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (13, true, 'rcutmerec', 'cc@gmail.com', 'Redford', 'TgxEbRa9Si', 'Karangbaru');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (14, true, 'climerickd', 'cc@gmail.com', 'Cullie', '7oIYddL', 'Aguitu');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (15, true, 'esivyere', 'cc@gmail.com', 'Erhart', 'wvFMTuJiK', 'Examília');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (16, true, 'nyeldingf', 'cc@gmail.com', 'Niko', '4Yar7N', 'Usquil');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (17, true, 'bhamillg', 'cc@gmail.com', 'Benny', 'RRY8Bihp5VSJ', 'Shahr-e Qods');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (18, true, 'fturfsh', 'cc@gmail.com', 'Freeman', 'aqXiKMi', 'Bang Nam Priao');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (19, false, 'hbegginii', 'cc@gmail.com', 'Hayes', 'osKhcsLXTFN', 'La Rochelle');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (20, false, 'bonnj', 'cc@gmail.com', 'Brook', '1pClrq', 'Innoshima');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (21, true, 'ggreenroadk', 'cc@gmail.com', 'Giffie', 'uzeSLPlY', 'Bieniewice');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (22, false, 'tyackiminiel', 'cc@gmail.com', 'Torry', 'aDwp3z', 'Plettenberg Bay');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (23, false, 'ndunnettm', 'cc@gmail.com', 'Neel', 'gzR8c6IF6b', 'Venda Nova');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (24, false, 'aliesn', 'cc@gmail.com', 'Alex', 'rnVQADDfTxhq', 'Tunoshna');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (25, false, 'evalentino', 'cc@gmail.com', 'Ebeneser', 'fnU1xzxzt', 'Jiupu');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (26, true, 'tilchukp', 'cc@gmail.com', 'Trstram', '0glnwA6Zs', 'Penhascoso');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (27, true, 'ikiehnltq', 'cc@gmail.com', 'Isacco', 'V9QlVPh', 'Paris La Défense');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (28, true, 'rbrightyr', 'cc@gmail.com', 'Ron', '9mS9RwdQKVb', 'Santo Domingo');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (29, true, 'kwinsers', 'cc@gmail.com', 'Kyle', 'ErakDecIAJo9', 'Yeniköy');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (30, true, 'lzohrert', 'cc@gmail.com', 'Laurie', 'hy18PmskdYZs', 'Candoso');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (31, true, 'wohannayu', 'cc@gmail.com', 'Wallace', 'P3Li6pPU', 'Sano');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (32, false, 'ddunbletonv', 'cc@gmail.com', 'Dylan', 'd34eWrBOhgAn', 'Markivka');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (33, true, 'giwanowiczw', 'cc@gmail.com', 'Gothart', 'dyMl6cbq', 'Chornyanka');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (34, true, 'rbeverstockx', 'cc@gmail.com', 'Ryan', '9y4Ic72G2sgK', 'Lyubech');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (35, false, 'ngoldspinky', 'cc@gmail.com', 'Nicolai', 'Ey52QLzJh', 'Qinshi');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (36, true, 'charnorz', 'cc@gmail.com', 'Cully', 'OauhZG', 'Nedakonice');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (37, true, 'ckerton10', 'cc@gmail.com', 'Corbet', 'W0JdTSAe7SnE', 'Hengxizhen');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (38, true, 'zscrimgeour11', 'cc@gmail.com', 'Zacharias', 'KBvU6g', 'Floriana');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (39, true, 'tgriffoen12', 'cc@gmail.com', 'Travus', 'W7T0ZFQx2E', 'Long Loreh');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (40, true, 'cricardon13', 'cc@gmail.com', 'Calv', 'wevxlg', 'Pajung');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (41, true, 'mdavidescu14', 'cc@gmail.com', 'Mervin', 'NCfrv1zt', 'Poitiers');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (42, true, 'ntabbernor15', 'cc@gmail.com', 'Nikolaus', 'MiIhgz3MJk02', 'Wushi');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (43, true, 'cbrightey16', 'cc@gmail.com', 'Ches', '3SfBdQycn', 'Viana');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (44, true, 'hattow17', 'cc@gmail.com', 'Horace', 'PGAp7Mx4A', 'Bandeirantes');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (45, false, 'rbrandenberg18', 'cc@gmail.com', 'Raimundo', 'gXcpcgPKUs2', 'Birayang');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (46, false, 'lharteley19', 'cc@gmail.com', 'Land', 'SJb0Kfz2', 'La Paz');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (47, true, 'dmoakes1a', 'cc@gmail.com', 'Dirk', 'ZnXEq9JU', 'Gerong');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (48, true, 'sscutter1b', 'cc@gmail.com', 'Sid', 'CQ1A7HW', 'Stoney Ground');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (49, true, 'candrivel1c', 'cc@gmail.com', 'Craig', 'CrRhTP', 'Communal');
insert into user (userId, adminAccess, username, email, displayName, password, location) values (50, false, 'rdhooge1d', 'cc@gmail.com', 'Ronny', 'bLd7PjdXF', 'Xiaozhi');