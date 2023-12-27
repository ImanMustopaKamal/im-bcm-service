/*drop table if exists threat;
drop table if exists threat_type;
create table threat_type
(
	id char(40) not null,
    name varchar(250) not null,
    is_active bool,
    primary key (id)
);
create table threat
(
	id CHAR(40) not null,
    type_id char(40) not null,
    name varchar(250) not null,
    is_active bool,
    primary key(id),
    constraint fk_threat_type foreign key (type_id)
    references threat_type(id)
);

truncate table threat;
truncate table threat_type;
*/
drop function if exists RandString;
DELIMITER $$

CREATE FUNCTION `RandString`(length SMALLINT(3)) RETURNS varchar(100) CHARSET utf8mb4
DETERMINISTIC
begin
    SET @returnStr = '';
    SET @allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    SET @i = 0;

    WHILE (@i < length) DO
        SET @returnStr = CONCAT(@returnStr, substring(@allowedChars, FLOOR(RAND() * LENGTH(@allowedChars) + 1), 1));
        SET @i = @i + 1;
    END WHILE;

    RETURN @returnStr;
END$$
DELIMITER ;
select RandString(8);
insert into threat_type(id, name, is_active) value
(RandString(8), 'Bencana Alam', 1),
(RandString(8), 'Insiden Teknis', 1),
(RandString(8), 'Bencana Buatan Manusia', 1);

select @typeID := id from threat_type where name = 'Bencana Alam';
insert into threat(id, type_id, name, is_active) values
(RandString(8), @typeID, 'Kebakaran', 1),
(RandString(8), @typeID, 'Gelombang Ekstrim', 1),
(RandString(8), @typeID, 'Kebakaran Hutan', 1),
(RandString(8), @typeID, 'Kekeringan', 1),
(RandString(8), @typeID, 'Likuifaksi', 1),
(RandString(8), @typeID, 'Tsunami', 1),
(RandString(8), @typeID, 'Wabah', 1),
(RandString(8), @typeID, 'Cuaca Ekstrim', 1),
(RandString(8), @typeID, 'Gunung Meletus', 1),
(RandString(8), @typeID, 'Tanah Longsor', 1),
(RandString(8), @typeID, 'Gempa Bumi', 1),
(RandString(8), @typeID, 'Banjir', 1);

select @typeID := id from threat_type where name = 'Insiden Teknis';
insert into threat(id, type_id, name, is_active) values
(RandString(8), @typeID, 'Genset Rusak', 1),
(RandString(8), @typeID, 'Kebakaran', 1),
(RandString(8), @typeID, 'Pipa Bocor', 1),
(RandString(8), @typeID, 'Data Center Down', 1),
(RandString(8), @typeID, 'Korsleting', 1);

select @typeID := id from threat_type where name = 'Bencana Buatan Manusia';
insert into threat(id, type_id, name, is_active) values
(RandString(8), @typeID, 'Radiasi Nuklir', 1),
(RandString(8), @typeID, 'Kerusuhan', 1),
(RandString(8), @typeID, 'Mogok Kerja', 1),
(RandString(8), @typeID, 'Perampokan', 1),
(RandString(8), @typeID, 'Sabotase', 1);

