drop table if exists call_tree_sdm;

create table call_tree_sdm (
	npp char(50),
    name varchar(100),
    position varchar(2500),
    supervisor_npp char(50),
    org_id char(50),
    phone_number char(50),
    phone_home char(50),
    address varchar(2500),
    employment_status char(20),
    created_by char(50),
    created_at datetime,
    updated_by char(50),
    updated_at datetime,
    primary key (npp),
    constraint fk_npp_supervisor foreign key (supervisor_npp)
    references call_tree_sdm(npp)
)