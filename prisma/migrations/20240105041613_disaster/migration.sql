-- CreateTable
CREATE TABLE `bcm_disaster` (
    `id` CHAR(40) NOT NULL,
    `tenant_id` CHAR(40) NOT NULL,
    `org_id` CHAR(40) NOT NULL,
    `threat_id` CHAR(40) NOT NULL,
    `disaster_chronology` VARCHAR(2500) NULL,
    `disaster_date` DATE NULL,
    `disaster_location` CHAR(40) NULL,
    `estimated_lost_currency` CHAR(50) NULL,
    `estimated_lost` DECIMAL(10, 0) NULL,
    `total_insurance_claim_currency` CHAR(50) NULL,
    `total_insurance_claim` DECIMAL(10, 0) NULL,
    `temp_action_plan` VARCHAR(2500) NULL,
    `recovery_plan` VARCHAR(2500) NULL,
    `alt_customer_services` VARCHAR(2500) NULL,
    `alt_staff` VARCHAR(2500) NULL,
    `wf_status_id` INTEGER NULL,
    `assign_curr_org` CHAR(40) NULL,
    `assign_curr_role` CHAR(40) NULL,
    `created_by` VARCHAR(50) NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_by` VARCHAR(50) NULL,
    `updated_at` DATETIME(0) NULL,

    INDEX `fk_disaster_estimated_lost_curr`(`estimated_lost_currency`),
    INDEX `fk_disaster_insurance_claim_curr`(`total_insurance_claim_currency`),
    INDEX `fk_disaster_threat`(`threat_id`),
    INDEX `fk_disaster_wf_status`(`wf_status_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bcm_disaster_assignment_history` (
    `id` CHAR(40) NOT NULL,
    `disaster_id` CHAR(40) NULL,
    `history_date` DATETIME(0) NULL,
    `user_id` CHAR(40) NULL,
    `user_name` VARCHAR(2500) NULL,
    `wf_status_id` INTEGER NULL,
    `reason` VARCHAR(2500) NULL,

    INDEX `fk_history_disaster`(`disaster_id`),
    INDEX `fk_history_wf_status`(`wf_status_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bcm_disaster_atm_affected` (
    `id` CHAR(40) NOT NULL,
    `disaster_id` CHAR(40) NULL,
    `total_atm` INTEGER NULL,
    `total_atm_is_operating` INTEGER NULL,
    `total_atm_is_not_operating` INTEGER NULL,

    INDEX `fk_atm_affected_disaster`(`disaster_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bcm_disaster_staff_affected` (
    `id` CHAR(40) NOT NULL,
    `disaster_id` CHAR(40) NULL,
    `staff_condition_id` VARCHAR(22) NULL,
    `total` INTEGER NULL,
    `name` VARCHAR(2500) NULL,
    `total_family` INTEGER NULL,

    INDEX `fk_staff_affected_disaster`(`disaster_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bcm_disaster_unit_affected_dirrect` (
    `id` CHAR(40) NOT NULL,
    `disaster_id` CHAR(40) NULL,
    `location_org_id` CHAR(40) NULL,
    `is_operating` BOOLEAN NULL,

    INDEX `fk_unit_affected_dirrect_disaster`(`disaster_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bcm_disaster_unit_affected_indirrect` (
    `id` CHAR(40) NOT NULL,
    `disaster_id` CHAR(40) NULL,
    `status_indirect_unit_id` VARCHAR(22) NULL,
    `location_org_id` CHAR(40) NULL,

    INDEX `fk_indirect_unit_status`(`status_indirect_unit_id`),
    INDEX `fk_unit_affected_indirrect_disaster`(`disaster_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `workflow_status` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(100) NULL,
    `is_active` BOOLEAN NULL DEFAULT (true),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `bcm_disaster` ADD CONSTRAINT `fk_disaster_estimated_lost_curr` FOREIGN KEY (`estimated_lost_currency`) REFERENCES `reff_currency`(`code`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `bcm_disaster` ADD CONSTRAINT `fk_disaster_insurance_claim_curr` FOREIGN KEY (`total_insurance_claim_currency`) REFERENCES `reff_currency`(`code`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `bcm_disaster` ADD CONSTRAINT `fk_disaster_threat` FOREIGN KEY (`threat_id`) REFERENCES `threat`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `bcm_disaster` ADD CONSTRAINT `fk_disaster_wf_status` FOREIGN KEY (`wf_status_id`) REFERENCES `workflow_status`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `bcm_disaster_assignment_history` ADD CONSTRAINT `fk_history_disaster` FOREIGN KEY (`disaster_id`) REFERENCES `bcm_disaster`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `bcm_disaster_assignment_history` ADD CONSTRAINT `fk_history_wf_status` FOREIGN KEY (`wf_status_id`) REFERENCES `workflow_status`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `bcm_disaster_atm_affected` ADD CONSTRAINT `fk_atm_affected_disaster` FOREIGN KEY (`disaster_id`) REFERENCES `bcm_disaster`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `bcm_disaster_staff_affected` ADD CONSTRAINT `fk_staff_affected_disaster` FOREIGN KEY (`disaster_id`) REFERENCES `bcm_disaster`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `bcm_disaster_unit_affected_dirrect` ADD CONSTRAINT `fk_unit_affected_dirrect_disaster` FOREIGN KEY (`disaster_id`) REFERENCES `bcm_disaster`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `bcm_disaster_unit_affected_indirrect` ADD CONSTRAINT `fk_indirect_unit_status` FOREIGN KEY (`status_indirect_unit_id`) REFERENCES `status_indirect_unit`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `bcm_disaster_unit_affected_indirrect` ADD CONSTRAINT `fk_unit_affected_indirrect_disaster` FOREIGN KEY (`disaster_id`) REFERENCES `bcm_disaster`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
