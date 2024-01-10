drop view if exists vw_threat_types;

create view vw_threat_types as
select *, case when (select count(1) from threat where type_id = typ.id) = 0 then true else false end as delete_enable
from threat_type as typ
order by typ.name asc;
