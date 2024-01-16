-- AlterTable
ALTER TABLE `reff_currency` MODIFY `tenant_id` CHAR(8) NULL;

-- CreateTable
CREATE TABLE `sys_process_list` (
    `code` CHAR(40) NOT NULL,
    `name` CHAR(100) NOT NULL,
    `description` VARCHAR(2500) NULL,
    `is_active` BOOLEAN NULL DEFAULT true,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `org_structure` (
    `id` CHAR(40) NOT NULL,
    `org_id` CHAR(40) NULL,
    `org_name` VARCHAR(200) NULL,
    `parent_org_id` CHAR(40) NULL,
    `parent_org_name` VARCHAR(200) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created_by` VARCHAR(50) NULL,
    `updated_at` DATETIME(3) NULL,
    `updated_by` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `workflow_level` (
    `id` CHAR(40) NOT NULL,
    `wf_module_code` CHAR(40) NOT NULL,
    `level` INTEGER NOT NULL,
    `role_id` CHAR(40) NOT NULL,
    `org_id` CHAR(40) NULL,
    `org_type_id` CHAR(40) NULL,
    `dept_id` CHAR(40) NULL,
    `parent_dept_id` CHAR(40) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created_by` VARCHAR(50) NULL,
    `updated_at` DATETIME(3) NULL,
    `updated_by` VARCHAR(50) NULL,
    `wf_status_id` INTEGER NOT NULL,

    INDEX `fk_wf_level_module`(`wf_module_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `workflow_module` (
    `code` CHAR(40) NOT NULL,
    `tenant_id` CHAR(40) NULL,
    `name` VARCHAR(200) NULL,
    `is_active` BOOLEAN NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created_by` VARCHAR(50) NULL,
    `updated_at` DATETIME(3) NULL,
    `updated_by` VARCHAR(50) NULL,
    `org_id` CHAR(40) NULL,
    `org_type_id` CHAR(40) NULL,
    `sys_code` CHAR(40) NOT NULL,

    INDEX `fk_module_sys_code`(`sys_code`),
    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `workflow_level` ADD CONSTRAINT `fk_wf_level_module` FOREIGN KEY (`wf_module_code`) REFERENCES `workflow_module`(`code`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `workflow_module` ADD CONSTRAINT `fk_module_sys_code` FOREIGN KEY (`sys_code`) REFERENCES `sys_process_list`(`code`) ON DELETE NO ACTION ON UPDATE NO ACTION;
