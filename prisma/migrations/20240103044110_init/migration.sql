-- CreateTable
CREATE TABLE `threat_type` (
    `id` CHAR(40) NOT NULL,
    `tenant_id` CHAR(8) NOT NULL,
    `name` VARCHAR(250) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `u_threat_type_name_tenant`(`tenant_id`, `name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `threat` (
    `id` CHAR(40) NOT NULL,
    `tenant_id` CHAR(8) NOT NULL,
    `type_id` CHAR(40) NOT NULL,
    `name` VARCHAR(250) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    INDEX `fk_threat_type`(`type_id`),
    UNIQUE INDEX `u_threat_type_name_tenant`(`type_id`, `name`, `tenant_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reff_applications` (
    `id` VARCHAR(22) NOT NULL,
    `tenant_id` CHAR(8) NOT NULL,
    `code` VARCHAR(120) NOT NULL,
    `name` VARCHAR(250) NOT NULL,
    `severity` INTEGER NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `u_app_tenant_code`(`tenant_id`, `code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `status_staff_condition` (
    `id` VARCHAR(22) NOT NULL,
    `tenant_id` CHAR(8) NOT NULL,
    `name` VARCHAR(250) NOT NULL,
    `sort_order` INTEGER NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `status_staff_condition_name_key`(`name`, `tenant_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `status_indirect_unit` (
    `id` VARCHAR(22) NOT NULL,
    `tenant_id` CHAR(8) NOT NULL,
    `name` VARCHAR(250) NOT NULL,
    `sort_order` INTEGER NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `u_i_unit_tenant`(`tenant_id`, `name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `status_app_testing_period` (
    `id` VARCHAR(22) NOT NULL,
    `code` VARCHAR(22) NOT NULL,
    `tenant_id` CHAR(8) NOT NULL,
    `name` VARCHAR(250) NOT NULL,
    `sort_order` INTEGER NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `u_app_testing_code_tenant`(`code`, `tenant_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reff_currency` (
    `code` CHAR(50) NOT NULL,
    `tenant_id` CHAR(8) NOT NULL,
    `name` CHAR(100) NOT NULL,
    `description` VARCHAR(2500) NOT NULL,
    `sort_order` INTEGER NOT NULL DEFAULT 2,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `u_curr_name_tenant`(`tenant_id`, `name`),
    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `threat` ADD CONSTRAINT `fk_threat_types` FOREIGN KEY (`type_id`) REFERENCES `threat_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- view vw_threat_types
drop view if exists vw_threat_types;
create view vw_threat_types as
select *, case when (select count(1) from threat where type_id = typ.id) = 0 then true else false end as delete_enable
from threat_type as typ
order by typ.name asc;
