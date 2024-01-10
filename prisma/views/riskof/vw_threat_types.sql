SELECT
  `typ`.`id` AS `id`,
  `typ`.`tenant_id` AS `tenant_id`,
  `typ`.`name` AS `name`,
  `typ`.`is_active` AS `is_active`,
  `typ`.`created_at` AS `created_at`,
  `typ`.`updated_at` AS `updated_at`,
(
    CASE
      WHEN (
        (
          SELECT
            count(1)
          FROM
            `riskof`.`threat`
          WHERE
            (`riskof`.`threat`.`type_id` = `typ`.`id`)
        ) = 0
      ) THEN TRUE
      ELSE false
    END
  ) AS `delete_enable`
FROM
  `riskof`.`threat_type` `typ`
ORDER BY
  `typ`.`name`