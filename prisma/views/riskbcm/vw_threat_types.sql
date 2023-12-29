SELECT
  `typ`.`id` AS `id`,
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
            `riskbcm`.`threat`
          WHERE
            (`riskbcm`.`threat`.`type_id` = `typ`.`id`)
        ) = 0
      ) THEN TRUE
      ELSE false
    END
  ) AS `delete_enable`
FROM
  `riskbcm`.`threat_type` `typ`
ORDER BY
  `typ`.`name`