CREATE DATABASE parking;
CREATE TABLE IF NOT EXISTS "spaces" (
  "id" int(5) NOT NULL AUTO_INCREMENT,
  "city_town" varchar(255) NOT NULL,
  "spot_address" varchar(255) NOT NULL,
  "from" datetime NOT NULL,
  "until" datetime NOT NULL,
  PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8_general_ci
AUTO_INCREMENT=1;