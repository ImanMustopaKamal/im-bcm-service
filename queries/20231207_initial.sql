drop table if exists threat;
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
/*truncate table threat_types;
truncate table threat;*/

insert into threat_type(id, name, is_active) value
(uuid(), 'Bencana Alam', 1),
(uuid(), 'Insiden Teknis', 1),
(uuid(), 'Bencana Buatan Manusia', 1);

select @typeID := id from threat_type where name = 'Bencana Alam';
insert into threat(id, type_id, name, is_active) values
(uuid(), @typeID, 'Kebakaran', 1),
(uuid(), @typeID, 'Gelombang Ekstrim', 1),
(uuid(), @typeID, 'Kebakaran Hutan', 1),
(uuid(), @typeID, 'Kekeringan', 1),
(uuid(), @typeID, 'Likuifaksi', 1),
(uuid(), @typeID, 'Tsunami', 1),
(uuid(), @typeID, 'Wabah', 1),
(uuid(), @typeID, 'Cuaca Ekstrim', 1),
(uuid(), @typeID, 'Gunung Meletus', 1),
(uuid(), @typeID, 'Tanah Longsor', 1),
(uuid(), @typeID, 'Gempa Bumi', 1),
(uuid(), @typeID, 'Banjir', 1);

select @typeID := id from threat_type where name = 'Insiden Teknis';
insert into threat(id, type_id, name, is_active) values
(uuid(), @typeID, 'Genset Rusak', 1),
(uuid(), @typeID, 'Kebakaran', 1),
(uuid(), @typeID, 'Pipa Bocor', 1),
(uuid(), @typeID, 'Data Center Down', 1),
(uuid(), @typeID, 'Korsleting', 1);

select @typeID := id from threat_type where name = 'Bencana Buatan Manusia';
insert into threat(id, type_id, name, is_active) values
(uuid(), @typeID, 'Radiasi Nuklir', 1),
(uuid(), @typeID, 'Kerusuhan', 1),
(uuid(), @typeID, 'Mogok Kerja', 1),
(uuid(), @typeID, 'Perampokan', 1),
(uuid(), @typeID, 'Sabotase', 1);
