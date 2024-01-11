-- DropForeignKey
ALTER TABLE `workflow_module` DROP FOREIGN KEY `fk_module_sys_code`;

-- AlterTable
ALTER TABLE `workflow_module` MODIFY `sys_code` CHAR(40) NULL;

-- CreateTable
CREATE TABLE `call_tree_sdm` (
    `id` CHAR(40) NOT NULL,
    `tenant_id` CHAR(10) NOT NULL,
    `npp` CHAR(50) NOT NULL,
    `name` VARCHAR(100) NULL,
    `position` VARCHAR(2500) NULL,
    `supervisor_id` CHAR(50) NULL,
    `org_id` CHAR(50) NULL,
    `phone_number` CHAR(50) NULL,
    `phone_home` CHAR(50) NULL,
    `address` VARCHAR(2500) NULL,
    `employment_status` CHAR(20) NULL,
    `created_by` CHAR(50) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_by` CHAR(50) NULL,
    `updated_at` DATETIME(3) NULL,

    INDEX `fk_npp_supervisor`(`supervisor_id`),
    UNIQUE INDEX `u_call_tree_sdm_npp_tenant`(`tenant_id`, `npp`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `call_tree_sdm` ADD CONSTRAINT `fk_npp_supervisor` FOREIGN KEY (`supervisor_id`) REFERENCES `call_tree_sdm`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
