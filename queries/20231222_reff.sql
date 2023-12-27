/*drop table status_staff_condition*/
select * from status_staff_condition;

insert into status_staff_condition (id, name, sort_order) value 
(RandString(8), 'Meninggal', 1),
(RandString(8), 'Dirawat', 2),
(RandString(8), 'Tidak Dapat Dihubungi', 3),
(RandString(8), 'Pegawai/Keluarga Tidak Terdampak', 4);

select * from status_indirect_unit;

insert into status_indirect_unit(id, name, sort_order) values
(RandString(8), 'Korporasi', 1),
(RandString(8), 'Menengah', 2),
(RandString(8), 'Kecil', 3),
(RandString(8), 'Konsumer', 4),
(RandString(8), 'Sinergi BUMN', 5),
(RandString(8), 'Perusahaan Anak', 6);

select * from status_app_testing_period;

insert into status_app_testing_period(code, name, sort_order) values
('I','Periode I',1),
('II','Periode II',2),
('III','Periode III',3),
('IV','Periode IV',4),
('V','Periode V',5);