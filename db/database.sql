CREATE DATABASE IF NOT EXISTS palaciochino;

use palaciochino;

CREATE TABLE products(
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) DEFAULT NULL,
  image VARCHAR(500) DEFAULT NULL,
  price decimal(8,2) DEFAULT NULL,
  PRIMARY KEY(id)
);

INSERT INTO products VALUES
(1,'product1','https://elcomercio.pe/resizer/6Wm-a6zYTS16Z4ykfZS8iTazVFk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/A7BZQJ4UVFFUJOPEUP2JCQPNQ4.jpg','12.50');