/*drop table if exists status_staff_condition*/
select * from status_staff_condition;

insert into status_staff_condition (id, tenant_id, name, sort_order) value 
(RandString(8), 'H3pZkf7W', 'Meninggal', 1),
(RandString(8), 'H3pZkf7W', 'Dirawat', 2),
(RandString(8), 'H3pZkf7W', 'Tidak Dapat Dihubungi', 3),
(RandString(8), 'H3pZkf7W', 'Pegawai/Keluarga Tidak Terdampak', 4);

select * from status_indirect_unit;

insert into status_indirect_unit(id, tenant_id, name, sort_order) values
(RandString(8), 'H3pZkf7W', 'Korporasi', 1),
(RandString(8), 'H3pZkf7W', 'Menengah', 2),
(RandString(8), 'H3pZkf7W', 'Kecil', 3),
(RandString(8), 'H3pZkf7W', 'Konsumer', 4),
(RandString(8), 'H3pZkf7W', 'Sinergi BUMN', 5),
(RandString(8), 'H3pZkf7W', 'Perusahaan Anak', 6);

select * from status_app_testing_period;

insert into status_app_testing_period(code, tenant_id, name, sort_order) values
('I', 'H3pZkf7W', 'Periode I', 1),
('II', 'H3pZkf7W', 'Periode II', 2),
('III', 'H3pZkf7W', 'Periode III', 3),
('IV', 'H3pZkf7W', 'Periode IV', 4),
('V', 'H3pZkf7W', 'Periode V', 5);

insert into reff_currency(code, tenant_id, name, description, sort_order) values
('392', 'H3pZkf7W','YEN','Japanese yen', 2),
('360', 'H3pZkf7W','IDR','Indonesian rupiah', 1),
('840', 'H3pZkf7W','USD','United States dollar', 2),
('702', 'H3pZkf7W','SGD','Singapore dollar', 2),
('344', 'H3pZkf7W','HKD','Hong Kong dollar', 2);

select * from reff_currency;