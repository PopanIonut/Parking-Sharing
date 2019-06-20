USE parking;

DROP TABLE IF EXISTS spots;
CREATE TABLE spots
(
	id INT unsigned NOT NULL auto_increment,
	city_town VARCHAR(50) NOT NULL,		# City or town name where the parking spot is.
	str_address VARCHAR(255) NOT NULL,	# Street address & spot ID of the alotted parking spot.
	spot_nr VARCHAR(10) NOT NULL,		# Lawful id. number of the alotted parking spot.
	t_from datetime NOT NULL,
  	t_until datetime NOT NULL,

# ?? separate the date & time fields from this into a table of their own ??

	PRIMARY KEY (id)
	
	# ENGINE=InnoDB DEFAULT CHARSET=utf8_general_ci.
); 