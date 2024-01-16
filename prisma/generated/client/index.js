
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.8.0
 * Query Engine version: 0a83d8541752d7582de2ebc1ece46519ce72a848
 */
Prisma.prismaVersion = {
  client: "5.8.0",
  engine: "0a83d8541752d7582de2ebc1ece46519ce72a848"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Threat_typeScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  name: 'name',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ThreatScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  type_id: 'type_id',
  name: 'name',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ApplicationsScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  code: 'code',
  name: 'name',
  severity: 'severity',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Staff_ConditionScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  name: 'name',
  sort_order: 'sort_order',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Indirect_UnitScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  name: 'name',
  sort_order: 'sort_order',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.App_Testing_PeriodScalarFieldEnum = {
  code: 'code',
  tenant_id: 'tenant_id',
  name: 'name',
  sort_order: 'sort_order',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CurrencyScalarFieldEnum = {
  code: 'code',
  tenant_id: 'tenant_id',
  name: 'name',
  description: 'description',
  sort_order: 'sort_order',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Bcm_disasterScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  org_id: 'org_id',
  threat_id: 'threat_id',
  disaster_chronology: 'disaster_chronology',
  disaster_date: 'disaster_date',
  disaster_location: 'disaster_location',
  estimated_lost_currency: 'estimated_lost_currency',
  estimated_lost: 'estimated_lost',
  total_insurance_claim_currency: 'total_insurance_claim_currency',
  total_insurance_claim: 'total_insurance_claim',
  temp_action_plan: 'temp_action_plan',
  recovery_plan: 'recovery_plan',
  alt_customer_services: 'alt_customer_services',
  alt_staff: 'alt_staff',
  wf_status_id: 'wf_status_id',
  assign_curr_org: 'assign_curr_org',
  assign_curr_role: 'assign_curr_role',
  created_by: 'created_by',
  created_at: 'created_at',
  updated_by: 'updated_by',
  updated_at: 'updated_at'
};

exports.Prisma.Bcm_disaster_assignment_historyScalarFieldEnum = {
  id: 'id',
  disaster_id: 'disaster_id',
  history_date: 'history_date',
  user_id: 'user_id',
  user_name: 'user_name',
  wf_status_id: 'wf_status_id',
  reason: 'reason'
};

exports.Prisma.Bcm_disaster_atm_affectedScalarFieldEnum = {
  id: 'id',
  disaster_id: 'disaster_id',
  total_atm: 'total_atm',
  total_atm_is_operating: 'total_atm_is_operating',
  total_atm_is_not_operating: 'total_atm_is_not_operating'
};

exports.Prisma.Bcm_disaster_staff_affectedScalarFieldEnum = {
  id: 'id',
  disaster_id: 'disaster_id',
  staff_condition_id: 'staff_condition_id',
  total: 'total',
  name: 'name',
  total_family: 'total_family'
};

exports.Prisma.Bcm_disaster_unit_affected_dirrectScalarFieldEnum = {
  id: 'id',
  disaster_id: 'disaster_id',
  location_org_id: 'location_org_id',
  is_operating: 'is_operating'
};

exports.Prisma.Bcm_disaster_unit_affected_indirrectScalarFieldEnum = {
  id: 'id',
  disaster_id: 'disaster_id',
  status_indirect_unit_id: 'status_indirect_unit_id',
  location_org_id: 'location_org_id'
};

exports.Prisma.Workflow_statusScalarFieldEnum = {
  id: 'id',
  name: 'name',
  is_active: 'is_active'
};

exports.Prisma.Sys_process_listScalarFieldEnum = {
  code: 'code',
  name: 'name',
  description: 'description',
  is_active: 'is_active'
};

exports.Prisma.Org_structureScalarFieldEnum = {
  id: 'id',
  org_id: 'org_id',
  org_name: 'org_name',
  org_type_id: 'org_type_id',
  parent_org_id: 'parent_org_id',
  parent_org_name: 'parent_org_name',
  created_at: 'created_at',
  created_by: 'created_by',
  updated_at: 'updated_at',
  updated_by: 'updated_by'
};

exports.Prisma.Workflow_levelScalarFieldEnum = {
  id: 'id',
  wf_module_id: 'wf_module_id',
  level: 'level',
  role_id: 'role_id',
  org_id: 'org_id',
  org_type_id: 'org_type_id',
  dept_id: 'dept_id',
  parent_dept_id: 'parent_dept_id',
  created_at: 'created_at',
  created_by: 'created_by',
  updated_at: 'updated_at',
  updated_by: 'updated_by',
  wf_status_id: 'wf_status_id'
};

exports.Prisma.Workflow_moduleScalarFieldEnum = {
  id: 'id',
  code: 'code',
  tenant_id: 'tenant_id',
  name: 'name',
  is_active: 'is_active',
  created_at: 'created_at',
  created_by: 'created_by',
  updated_at: 'updated_at',
  updated_by: 'updated_by',
  org_id: 'org_id',
  org_type_id: 'org_type_id',
  sys_code: 'sys_code'
};

exports.Prisma.Call_tree_sdmScalarFieldEnum = {
  npp: 'npp',
  name: 'name',
  position: 'position',
  supervisor_npp: 'supervisor_npp',
  org_id: 'org_id',
  phone_number: 'phone_number',
  phone_home: 'phone_home',
  address: 'address',
  employment_status: 'employment_status',
  created_by: 'created_by',
  created_at: 'created_at',
  updated_by: 'updated_by',
  updated_at: 'updated_at'
};

exports.Prisma.Org_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  sort_order: 'sort_order',
  is_active: 'is_active',
  is_cmt: 'is_cmt',
  is_consol: 'is_consol',
  is_real: 'is_real',
  created_by: 'created_by',
  created_at: 'created_at',
  updated_by: 'updated_by',
  updated_at: 'updated_at'
};

exports.Prisma.Vw_threat_typesScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  name: 'name',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at',
  delete_enable: 'delete_enable'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  threat_type: 'threat_type',
  threat: 'threat',
  Applications: 'Applications',
  Staff_Condition: 'Staff_Condition',
  Indirect_Unit: 'Indirect_Unit',
  App_Testing_Period: 'App_Testing_Period',
  Currency: 'Currency',
  bcm_disaster: 'bcm_disaster',
  bcm_disaster_assignment_history: 'bcm_disaster_assignment_history',
  bcm_disaster_atm_affected: 'bcm_disaster_atm_affected',
  bcm_disaster_staff_affected: 'bcm_disaster_staff_affected',
  bcm_disaster_unit_affected_dirrect: 'bcm_disaster_unit_affected_dirrect',
  bcm_disaster_unit_affected_indirrect: 'bcm_disaster_unit_affected_indirrect',
  workflow_status: 'workflow_status',
  sys_process_list: 'sys_process_list',
  org_structure: 'org_structure',
  workflow_level: 'workflow_level',
  workflow_module: 'workflow_module',
  call_tree_sdm: 'call_tree_sdm',
  org_type: 'org_type',
  vw_threat_types: 'vw_threat_types'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\Works\\Learn_Repos\\BCM\\im-bcm-service\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "views"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.8.0",
  "engineVersion": "0a83d8541752d7582de2ebc1ece46519ce72a848",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyICAgICAgICA9ICJwcmlzbWEtY2xpZW50LWpzIg0KICBvdXRwdXQgICAgICAgICAgPSAiZ2VuZXJhdGVkL2NsaWVudCINCiAgcHJldmlld0ZlYXR1cmVzID0gWyJ2aWV3cyJdDQp9DQoNCmRhdGFzb3VyY2UgZGIgew0KICBwcm92aWRlciA9ICJteXNxbCINCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpDQp9DQoNCm1vZGVsIHRocmVhdF90eXBlIHsNCiAgaWQgICAgICAgICBTdHJpbmcgICAgQGlkIEBkYi5DaGFyKDQwKQ0KICB0ZW5hbnRfaWQgIFN0cmluZyAgICBAZGIuQ2hhcig4KQ0KICBuYW1lICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcigyNTApDQogIGlzX2FjdGl2ZSAgQm9vbGVhbiAgIEBkZWZhdWx0KHRydWUpDQogIGNyZWF0ZWRfYXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkX2F0IERhdGVUaW1lPyBAdXBkYXRlZEF0DQogIHRocmVhdHMgICAgdGhyZWF0W10NCg0KICBAQHVuaXF1ZShbdGVuYW50X2lkLCBuYW1lXSwgbWFwOiAidV90aHJlYXRfdHlwZV9uYW1lX3RlbmFudCIpDQp9DQoNCm1vZGVsIHRocmVhdCB7DQogIGlkICAgICAgICAgICBTdHJpbmcgICAgICAgICBAaWQgQGRiLkNoYXIoNDApDQogIHRlbmFudF9pZCAgICBTdHJpbmcgICAgICAgICBAZGIuQ2hhcig4KQ0KICB0eXBlX2lkICAgICAgU3RyaW5nICAgICAgICAgQGRiLkNoYXIoNDApDQogIG5hbWUgICAgICAgICBTdHJpbmcgICAgICAgICBAZGIuVmFyQ2hhcigyNTApDQogIGlzX2FjdGl2ZSAgICBCb29sZWFuICAgICAgICBAZGVmYXVsdCh0cnVlKQ0KICBjcmVhdGVkX2F0ICAgRGF0ZVRpbWUgICAgICAgQGRlZmF1bHQobm93KCkpDQogIHVwZGF0ZWRfYXQgICBEYXRlVGltZT8gICAgICBAdXBkYXRlZEF0DQogIGJjbV9kaXNhc3RlciBiY21fZGlzYXN0ZXJbXQ0KICB0aHJlYXRfdHlwZXMgdGhyZWF0X3R5cGUgICAgQHJlbGF0aW9uKGZpZWxkczogW3R5cGVfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiZmtfdGhyZWF0X3R5cGVzIikNCg0KICBAQHVuaXF1ZShbdHlwZV9pZCwgbmFtZSwgdGVuYW50X2lkXSwgbWFwOiAidV90aHJlYXRfdHlwZV9uYW1lX3RlbmFudCIpDQogIEBAaW5kZXgoW3R5cGVfaWRdLCBtYXA6ICJma190aHJlYXRfdHlwZSIpDQp9DQoNCm1vZGVsIEFwcGxpY2F0aW9ucyB7DQogIGlkICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGIuVmFyQ2hhcigyMikNCiAgdGVuYW50X2lkICBTdHJpbmcgICAgQGRiLkNoYXIoOCkNCiAgY29kZSAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoMTIwKQ0KICBuYW1lICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcigyNTApDQogIHNldmVyaXR5ICAgSW50DQogIGlzX2FjdGl2ZSAgQm9vbGVhbiAgIEBkZWZhdWx0KHRydWUpDQogIGNyZWF0ZWRfYXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkX2F0IERhdGVUaW1lPyBAdXBkYXRlZEF0DQoNCiAgQEB1bmlxdWUoW3RlbmFudF9pZCwgY29kZV0sIG1hcDogInVfYXBwX3RlbmFudF9jb2RlIikNCiAgQEBtYXAoInJlZmZfYXBwbGljYXRpb25zIikNCn0NCg0KbW9kZWwgU3RhZmZfQ29uZGl0aW9uIHsNCiAgaWQgICAgICAgICBTdHJpbmcgICAgQGlkIEBkYi5WYXJDaGFyKDIyKQ0KICB0ZW5hbnRfaWQgIFN0cmluZyAgICBAZGIuQ2hhcig4KQ0KICBuYW1lICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcigyNTApDQogIHNvcnRfb3JkZXIgSW50DQogIGlzX2FjdGl2ZSAgQm9vbGVhbiAgIEBkZWZhdWx0KHRydWUpDQogIGNyZWF0ZWRfYXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkX2F0IERhdGVUaW1lPyBAdXBkYXRlZEF0DQoNCiAgQEB1bmlxdWUoW25hbWUsIHRlbmFudF9pZF0sIG1hcDogInN0YXR1c19zdGFmZl9jb25kaXRpb25fbmFtZV9rZXkiKQ0KICBAQG1hcCgic3RhdHVzX3N0YWZmX2NvbmRpdGlvbiIpDQp9DQoNCm1vZGVsIEluZGlyZWN0X1VuaXQgew0KICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkYi5WYXJDaGFyKDIyKQ0KICB0ZW5hbnRfaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLkNoYXIoOCkNCiAgbmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MCkNCiAgc29ydF9vcmRlciAgICAgICAgICAgICAgICAgICAgICAgICAgIEludA0KICBpc19hY3RpdmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQodHJ1ZSkNCiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZWRBdA0KICBiY21fZGlzYXN0ZXJfdW5pdF9hZmZlY3RlZF9pbmRpcnJlY3QgYmNtX2Rpc2FzdGVyX3VuaXRfYWZmZWN0ZWRfaW5kaXJyZWN0W10NCg0KICBAQHVuaXF1ZShbdGVuYW50X2lkLCBuYW1lXSwgbWFwOiAidV9pX3VuaXRfdGVuYW50IikNCiAgQEBtYXAoInN0YXR1c19pbmRpcmVjdF91bml0IikNCn0NCg0KbW9kZWwgQXBwX1Rlc3RpbmdfUGVyaW9kIHsNCiAgY29kZSAgICAgICBTdHJpbmcgICAgQGlkIEBkYi5WYXJDaGFyKDIyKQ0KICB0ZW5hbnRfaWQgIFN0cmluZyAgICBAZGIuQ2hhcig4KQ0KICBuYW1lICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcigyNTApDQogIHNvcnRfb3JkZXIgSW50DQogIGlzX2FjdGl2ZSAgQm9vbGVhbiAgIEBkZWZhdWx0KHRydWUpDQogIGNyZWF0ZWRfYXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkX2F0IERhdGVUaW1lPyBAdXBkYXRlZEF0DQoNCiAgQEB1bmlxdWUoW3RlbmFudF9pZCwgbmFtZV0sIG1hcDogInVfYXBwX3Rlc3RpbmdfbmFtZV90ZW5hbnQiKQ0KICBAQG1hcCgic3RhdHVzX2FwcF90ZXN0aW5nX3BlcmlvZCIpDQp9DQoNCm1vZGVsIEN1cnJlbmN5IHsNCiAgY29kZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgQGlkIEBkYi5DaGFyKDUwKQ0KICB0ZW5hbnRfaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICBAZGIuQ2hhcig4KQ0KICBuYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICBAZGIuQ2hhcigxMDApDQogIGRlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgIEBkYi5WYXJDaGFyKDI1MDApDQogIHNvcnRfb3JkZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgIEBkZWZhdWx0KDIpDQogIGlzX2FjdGl2ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgIEBkZWZhdWx0KHRydWUpDQogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICBAdXBkYXRlZEF0DQogIGJjbV9kaXNhc3Rlcl9iY21fZGlzYXN0ZXJfZXN0aW1hdGVkX2xvc3RfY3VycmVuY3lUb3JlZmZfY3VycmVuY3kgICAgICAgIGJjbV9kaXNhc3RlcltdIEByZWxhdGlvbigiYmNtX2Rpc2FzdGVyX2VzdGltYXRlZF9sb3N0X2N1cnJlbmN5VG9yZWZmX2N1cnJlbmN5IikNCiAgYmNtX2Rpc2FzdGVyX2JjbV9kaXNhc3Rlcl90b3RhbF9pbnN1cmFuY2VfY2xhaW1fY3VycmVuY3lUb3JlZmZfY3VycmVuY3kgYmNtX2Rpc2FzdGVyW10gQHJlbGF0aW9uKCJiY21fZGlzYXN0ZXJfdG90YWxfaW5zdXJhbmNlX2NsYWltX2N1cnJlbmN5VG9yZWZmX2N1cnJlbmN5IikNCg0KICBAQHVuaXF1ZShbdGVuYW50X2lkLCBuYW1lXSwgbWFwOiAidV9jdXJyX25hbWVfdGVuYW50IikNCiAgQEBtYXAoInJlZmZfY3VycmVuY3kiKQ0KfQ0KDQptb2RlbCBiY21fZGlzYXN0ZXIgew0KICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkYi5DaGFyKDQwKQ0KICB0ZW5hbnRfaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLkNoYXIoNDApDQogIG9yZ19pZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuQ2hhcig0MCkNCiAgdGhyZWF0X2lkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDQwKQ0KICBkaXNhc3Rlcl9jaHJvbm9sb2d5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwMCkNCiAgZGlzYXN0ZXJfZGF0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5EYXRlDQogIGRpc2FzdGVyX2xvY2F0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuQ2hhcig0MCkNCiAgZXN0aW1hdGVkX2xvc3RfY3VycmVuY3kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDUwKQ0KICBlc3RpbWF0ZWRfbG9zdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVjaW1hbD8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLkRlY2ltYWwoMTAsIDApDQogIHRvdGFsX2luc3VyYW5jZV9jbGFpbV9jdXJyZW5jeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuQ2hhcig1MCkNCiAgdG90YWxfaW5zdXJhbmNlX2NsYWltICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlY2ltYWw/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5EZWNpbWFsKDEwLCAwKQ0KICB0ZW1wX2FjdGlvbl9wbGFuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwMCkNCiAgcmVjb3ZlcnlfcGxhbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MDApDQogIGFsdF9jdXN0b21lcl9zZXJ2aWNlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTAwKQ0KICBhbHRfc3RhZmYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwMCkNCiAgd2Zfc3RhdHVzX2lkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8NCiAgYXNzaWduX2N1cnJfb3JnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDQwKQ0KICBhc3NpZ25fY3Vycl9yb2xlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLkNoYXIoNDApDQogIGNyZWF0ZWRfYnkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig1MCkNCiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKSBAZGIuRGF0ZVRpbWUoMCkNCiAgdXBkYXRlZF9ieSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDUwKQ0KICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZWRBdCBAZGIuRGF0ZVRpbWUoMCkNCiAgcmVmZl9jdXJyZW5jeV9iY21fZGlzYXN0ZXJfZXN0aW1hdGVkX2xvc3RfY3VycmVuY3lUb3JlZmZfY3VycmVuY3kgICAgICAgIEN1cnJlbmN5PyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiYmNtX2Rpc2FzdGVyX2VzdGltYXRlZF9sb3N0X2N1cnJlbmN5VG9yZWZmX2N1cnJlbmN5IiwgZmllbGRzOiBbZXN0aW1hdGVkX2xvc3RfY3VycmVuY3ldLCByZWZlcmVuY2VzOiBbY29kZV0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uLCBtYXA6ICJma19kaXNhc3Rlcl9lc3RpbWF0ZWRfbG9zdF9jdXJyIikNCiAgcmVmZl9jdXJyZW5jeV9iY21fZGlzYXN0ZXJfdG90YWxfaW5zdXJhbmNlX2NsYWltX2N1cnJlbmN5VG9yZWZmX2N1cnJlbmN5IEN1cnJlbmN5PyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiYmNtX2Rpc2FzdGVyX3RvdGFsX2luc3VyYW5jZV9jbGFpbV9jdXJyZW5jeVRvcmVmZl9jdXJyZW5jeSIsIGZpZWxkczogW3RvdGFsX2luc3VyYW5jZV9jbGFpbV9jdXJyZW5jeV0sIHJlZmVyZW5jZXM6IFtjb2RlXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogImZrX2Rpc2FzdGVyX2luc3VyYW5jZV9jbGFpbV9jdXJyIikNCiAgdGhyZWF0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt0aHJlYXRfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiZmtfZGlzYXN0ZXJfdGhyZWF0IikNCiAgd29ya2Zsb3dfc3RhdHVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmbG93X3N0YXR1cz8gICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt3Zl9zdGF0dXNfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiZmtfZGlzYXN0ZXJfd2Zfc3RhdHVzIikNCiAgYmNtX2Rpc2FzdGVyX2Fzc2lnbm1lbnRfaGlzdG9yeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJjbV9kaXNhc3Rlcl9hc3NpZ25tZW50X2hpc3RvcnlbXQ0KICBiY21fZGlzYXN0ZXJfYXRtX2FmZmVjdGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmNtX2Rpc2FzdGVyX2F0bV9hZmZlY3RlZFtdDQogIGJjbV9kaXNhc3Rlcl9zdGFmZl9hZmZlY3RlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiY21fZGlzYXN0ZXJfc3RhZmZfYWZmZWN0ZWRbXQ0KICBiY21fZGlzYXN0ZXJfdW5pdF9hZmZlY3RlZF9kaXJyZWN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmNtX2Rpc2FzdGVyX3VuaXRfYWZmZWN0ZWRfZGlycmVjdFtdDQogIGJjbV9kaXNhc3Rlcl91bml0X2FmZmVjdGVkX2luZGlycmVjdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiY21fZGlzYXN0ZXJfdW5pdF9hZmZlY3RlZF9pbmRpcnJlY3RbXQ0KDQogIEBAaW5kZXgoW2VzdGltYXRlZF9sb3N0X2N1cnJlbmN5XSwgbWFwOiAiZmtfZGlzYXN0ZXJfZXN0aW1hdGVkX2xvc3RfY3VyciIpDQogIEBAaW5kZXgoW3RvdGFsX2luc3VyYW5jZV9jbGFpbV9jdXJyZW5jeV0sIG1hcDogImZrX2Rpc2FzdGVyX2luc3VyYW5jZV9jbGFpbV9jdXJyIikNCiAgQEBpbmRleChbdGhyZWF0X2lkXSwgbWFwOiAiZmtfZGlzYXN0ZXJfdGhyZWF0IikNCiAgQEBpbmRleChbd2Zfc3RhdHVzX2lkXSwgbWFwOiAiZmtfZGlzYXN0ZXJfd2Zfc3RhdHVzIikNCn0NCg0KbW9kZWwgYmNtX2Rpc2FzdGVyX2Fzc2lnbm1lbnRfaGlzdG9yeSB7DQogIGlkICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgIEBpZCBAZGIuQ2hhcig0MCkNCiAgZGlzYXN0ZXJfaWQgICAgIFN0cmluZz8gICAgICAgICAgQGRiLkNoYXIoNDApDQogIGhpc3RvcnlfZGF0ZSAgICBEYXRlVGltZT8gICAgICAgIEBkYi5EYXRlVGltZSgwKQ0KICB1c2VyX2lkICAgICAgICAgU3RyaW5nPyAgICAgICAgICBAZGIuQ2hhcig0MCkNCiAgdXNlcl9uYW1lICAgICAgIFN0cmluZz8gICAgICAgICAgQGRiLlZhckNoYXIoMjUwMCkNCiAgd2Zfc3RhdHVzX2lkICAgIEludD8NCiAgcmVhc29uICAgICAgICAgIFN0cmluZz8gICAgICAgICAgQGRiLlZhckNoYXIoMjUwMCkNCiAgYmNtX2Rpc2FzdGVyICAgIGJjbV9kaXNhc3Rlcj8gICAgQHJlbGF0aW9uKGZpZWxkczogW2Rpc2FzdGVyX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogImZrX2hpc3RvcnlfZGlzYXN0ZXIiKQ0KICB3b3JrZmxvd19zdGF0dXMgd29ya2Zsb3dfc3RhdHVzPyBAcmVsYXRpb24oZmllbGRzOiBbd2Zfc3RhdHVzX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogImZrX2hpc3Rvcnlfd2Zfc3RhdHVzIikNCg0KICBAQGluZGV4KFtkaXNhc3Rlcl9pZF0sIG1hcDogImZrX2hpc3RvcnlfZGlzYXN0ZXIiKQ0KICBAQGluZGV4KFt3Zl9zdGF0dXNfaWRdLCBtYXA6ICJma19oaXN0b3J5X3dmX3N0YXR1cyIpDQp9DQoNCm1vZGVsIGJjbV9kaXNhc3Rlcl9hdG1fYWZmZWN0ZWQgew0KICBpZCAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgIEBpZCBAZGIuQ2hhcig0MCkNCiAgZGlzYXN0ZXJfaWQgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICBAZGIuQ2hhcig0MCkNCiAgdG90YWxfYXRtICAgICAgICAgICAgICAgICAgSW50Pw0KICB0b3RhbF9hdG1faXNfb3BlcmF0aW5nICAgICBJbnQ/DQogIHRvdGFsX2F0bV9pc19ub3Rfb3BlcmF0aW5nIEludD8NCiAgYmNtX2Rpc2FzdGVyICAgICAgICAgICAgICAgYmNtX2Rpc2FzdGVyPyBAcmVsYXRpb24oZmllbGRzOiBbZGlzYXN0ZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiZmtfYXRtX2FmZmVjdGVkX2Rpc2FzdGVyIikNCg0KICBAQGluZGV4KFtkaXNhc3Rlcl9pZF0sIG1hcDogImZrX2F0bV9hZmZlY3RlZF9kaXNhc3RlciIpDQp9DQoNCm1vZGVsIGJjbV9kaXNhc3Rlcl9zdGFmZl9hZmZlY3RlZCB7DQogIGlkICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgIEBpZCBAZGIuQ2hhcig0MCkNCiAgZGlzYXN0ZXJfaWQgICAgICAgIFN0cmluZz8gICAgICAgQGRiLkNoYXIoNDApDQogIHN0YWZmX2NvbmRpdGlvbl9pZCBTdHJpbmc/ICAgICAgIEBkYi5WYXJDaGFyKDIyKQ0KICB0b3RhbCAgICAgICAgICAgICAgSW50Pw0KICBuYW1lICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICBAZGIuVmFyQ2hhcigyNTAwKQ0KICB0b3RhbF9mYW1pbHkgICAgICAgSW50Pw0KICBiY21fZGlzYXN0ZXIgICAgICAgYmNtX2Rpc2FzdGVyPyBAcmVsYXRpb24oZmllbGRzOiBbZGlzYXN0ZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiZmtfc3RhZmZfYWZmZWN0ZWRfZGlzYXN0ZXIiKQ0KDQogIEBAaW5kZXgoW2Rpc2FzdGVyX2lkXSwgbWFwOiAiZmtfc3RhZmZfYWZmZWN0ZWRfZGlzYXN0ZXIiKQ0KfQ0KDQptb2RlbCBiY21fZGlzYXN0ZXJfdW5pdF9hZmZlY3RlZF9kaXJyZWN0IHsNCiAgaWQgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgQGlkIEBkYi5DaGFyKDQwKQ0KICBkaXNhc3Rlcl9pZCAgICAgU3RyaW5nPyAgICAgICBAZGIuQ2hhcig0MCkNCiAgbG9jYXRpb25fb3JnX2lkIFN0cmluZz8gICAgICAgQGRiLkNoYXIoNDApDQogIGlzX29wZXJhdGluZyAgICBCb29sZWFuPw0KICBiY21fZGlzYXN0ZXIgICAgYmNtX2Rpc2FzdGVyPyBAcmVsYXRpb24oZmllbGRzOiBbZGlzYXN0ZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiZmtfdW5pdF9hZmZlY3RlZF9kaXJyZWN0X2Rpc2FzdGVyIikNCg0KICBAQGluZGV4KFtkaXNhc3Rlcl9pZF0sIG1hcDogImZrX3VuaXRfYWZmZWN0ZWRfZGlycmVjdF9kaXNhc3RlciIpDQp9DQoNCm1vZGVsIGJjbV9kaXNhc3Rlcl91bml0X2FmZmVjdGVkX2luZGlycmVjdCB7DQogIGlkICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgIEBpZCBAZGIuQ2hhcig0MCkNCiAgZGlzYXN0ZXJfaWQgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgQGRiLkNoYXIoNDApDQogIHN0YXR1c19pbmRpcmVjdF91bml0X2lkIFN0cmluZz8gICAgICAgIEBkYi5WYXJDaGFyKDIyKQ0KICBsb2NhdGlvbl9vcmdfaWQgICAgICAgICBTdHJpbmc/ICAgICAgICBAZGIuQ2hhcig0MCkNCiAgc3RhdHVzX2luZGlyZWN0X3VuaXQgICAgSW5kaXJlY3RfVW5pdD8gQHJlbGF0aW9uKGZpZWxkczogW3N0YXR1c19pbmRpcmVjdF91bml0X2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogImZrX2luZGlyZWN0X3VuaXRfc3RhdHVzIikNCiAgYmNtX2Rpc2FzdGVyICAgICAgICAgICAgYmNtX2Rpc2FzdGVyPyAgQHJlbGF0aW9uKGZpZWxkczogW2Rpc2FzdGVyX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogImZrX3VuaXRfYWZmZWN0ZWRfaW5kaXJyZWN0X2Rpc2FzdGVyIikNCg0KICBAQGluZGV4KFtzdGF0dXNfaW5kaXJlY3RfdW5pdF9pZF0sIG1hcDogImZrX2luZGlyZWN0X3VuaXRfc3RhdHVzIikNCiAgQEBpbmRleChbZGlzYXN0ZXJfaWRdLCBtYXA6ICJma191bml0X2FmZmVjdGVkX2luZGlycmVjdF9kaXNhc3RlciIpDQp9DQoNCm1vZGVsIHdvcmtmbG93X3N0YXR1cyB7DQogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpZA0KICBuYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMDApDQogIGlzX2FjdGl2ZSAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbj8gICAgICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCIodHJ1ZSkiKSkNCiAgYmNtX2Rpc2FzdGVyICAgICAgICAgICAgICAgICAgICBiY21fZGlzYXN0ZXJbXQ0KICBiY21fZGlzYXN0ZXJfYXNzaWdubWVudF9oaXN0b3J5IGJjbV9kaXNhc3Rlcl9hc3NpZ25tZW50X2hpc3RvcnlbXQ0KfQ0KDQptb2RlbCBzeXNfcHJvY2Vzc19saXN0IHsNCiAgY29kZSAgICAgICAgU3RyaW5nICAgQGlkIEBkYi5DaGFyKDQwKQ0KICBuYW1lICAgICAgICBTdHJpbmcgICBAZGIuQ2hhcigxMDApDQogIGRlc2NyaXB0aW9uIFN0cmluZz8gIEBkYi5WYXJDaGFyKDI1MDApDQogIGlzX2FjdGl2ZSAgIEJvb2xlYW4/IEBkZWZhdWx0KHRydWUpDQp9DQoNCm1vZGVsIG9yZ19zdHJ1Y3R1cmUgew0KICBpZCAgICAgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGIuQ2hhcig0MCkNCiAgb3JnX2lkICAgICAgICAgIFN0cmluZz8gICBAZGIuQ2hhcig0MCkNCiAgb3JnX25hbWUgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyMDApDQogIG9yZ190eXBlX2lkICAgICBTdHJpbmc/ICAgQGRiLkNoYXIoNDApDQogIHBhcmVudF9vcmdfaWQgICBTdHJpbmc/ICAgQGRiLkNoYXIoNDApDQogIHBhcmVudF9vcmdfbmFtZSBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjAwKQ0KICBjcmVhdGVkX2F0ICAgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKQ0KICBjcmVhdGVkX2J5ICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUwKQ0KICB1cGRhdGVkX2F0ICAgICAgRGF0ZVRpbWU/IEB1cGRhdGVkQXQNCiAgdXBkYXRlZF9ieSAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1MCkNCn0NCg0KbW9kZWwgd29ya2Zsb3dfbGV2ZWwgew0KICBpZCAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgIEBpZCBAZGIuQ2hhcig0MCkNCiAgd2ZfbW9kdWxlX2lkICAgIFN0cmluZyAgICAgICAgICBAZGIuQ2hhcig0MCkNCiAgbGV2ZWwgICAgICAgICAgIEludA0KICByb2xlX2lkICAgICAgICAgU3RyaW5nICAgICAgICAgIEBkYi5DaGFyKDQwKQ0KICBvcmdfaWQgICAgICAgICAgU3RyaW5nPyAgICAgICAgIEBkYi5DaGFyKDQwKQ0KICBvcmdfdHlwZV9pZCAgICAgU3RyaW5nPyAgICAgICAgIEBkYi5DaGFyKDQwKQ0KICBkZXB0X2lkICAgICAgICAgU3RyaW5nPyAgICAgICAgIEBkYi5DaGFyKDQwKQ0KICBwYXJlbnRfZGVwdF9pZCAgU3RyaW5nPyAgICAgICAgIEBkYi5DaGFyKDQwKQ0KICBjcmVhdGVkX2F0ICAgICAgRGF0ZVRpbWU/ICAgICAgIEBkZWZhdWx0KG5vdygpKQ0KICBjcmVhdGVkX2J5ICAgICAgU3RyaW5nPyAgICAgICAgIEBkYi5WYXJDaGFyKDUwKQ0KICB1cGRhdGVkX2F0ICAgICAgRGF0ZVRpbWU/ICAgICAgIEB1cGRhdGVkQXQNCiAgdXBkYXRlZF9ieSAgICAgIFN0cmluZz8gICAgICAgICBAZGIuVmFyQ2hhcig1MCkNCiAgd2Zfc3RhdHVzX2lkICAgIEludA0KICB3b3JrZmxvd19tb2R1bGUgd29ya2Zsb3dfbW9kdWxlIEByZWxhdGlvbihmaWVsZHM6IFt3Zl9tb2R1bGVfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiZmtfd2ZfbGV2ZWxfbW9kdWxlIikNCg0KICBAQGluZGV4KFt3Zl9tb2R1bGVfaWRdLCBtYXA6ICJma193Zl9sZXZlbF9tb2R1bGUiKQ0KfQ0KDQptb2RlbCB3b3JrZmxvd19tb2R1bGUgew0KICBpZCAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgIEBpZCBAZGIuQ2hhcig0MCkNCiAgY29kZSAgICAgICAgICAgU3RyaW5nICAgICAgICAgICBAZGIuQ2hhcig0MCkNCiAgdGVuYW50X2lkICAgICAgU3RyaW5nPyAgICAgICAgICBAZGIuQ2hhcig0MCkNCiAgbmFtZSAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICBAZGIuVmFyQ2hhcigyMDApDQogIGlzX2FjdGl2ZSAgICAgIEJvb2xlYW4/DQogIGNyZWF0ZWRfYXQgICAgIERhdGVUaW1lPyAgICAgICAgQGRlZmF1bHQobm93KCkpDQogIGNyZWF0ZWRfYnkgICAgIFN0cmluZz8gICAgICAgICAgQGRiLlZhckNoYXIoNTApDQogIHVwZGF0ZWRfYXQgICAgIERhdGVUaW1lPyAgICAgICAgQHVwZGF0ZWRBdA0KICB1cGRhdGVkX2J5ICAgICBTdHJpbmc/ICAgICAgICAgIEBkYi5WYXJDaGFyKDUwKQ0KICBvcmdfaWQgICAgICAgICBTdHJpbmc/ICAgICAgICAgIEBkYi5DaGFyKDQwKQ0KICBvcmdfdHlwZV9pZCAgICBTdHJpbmc/ICAgICAgICAgIEBkYi5DaGFyKDQwKQ0KICBzeXNfY29kZSAgICAgICBTdHJpbmc/ICAgICAgICAgIEBkYi5DaGFyKDQwKQ0KICB3b3JrZmxvd19sZXZlbCB3b3JrZmxvd19sZXZlbFtdDQoNCiAgQEBpbmRleChbc3lzX2NvZGVdLCBtYXA6ICJma19tb2R1bGVfc3lzX2NvZGUiKQ0KfQ0KDQptb2RlbCBjYWxsX3RyZWVfc2RtIHsNCiAgbnBwICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgQGlkIEBkYi5DaGFyKDUwKQ0KICBuYW1lICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICBAZGIuVmFyQ2hhcigxMDApDQogIHBvc2l0aW9uICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgIEBkYi5WYXJDaGFyKDI1MDApDQogIHN1cGVydmlzb3JfbnBwICAgICAgU3RyaW5nPyAgICAgICAgIEBkYi5DaGFyKDUwKQ0KICBvcmdfaWQgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICBAZGIuQ2hhcig1MCkNCiAgcGhvbmVfbnVtYmVyICAgICAgICBTdHJpbmc/ICAgICAgICAgQGRiLkNoYXIoNTApDQogIHBob25lX2hvbWUgICAgICAgICAgU3RyaW5nPyAgICAgICAgIEBkYi5DaGFyKDUwKQ0KICBhZGRyZXNzICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICBAZGIuVmFyQ2hhcigyNTAwKQ0KICBlbXBsb3ltZW50X3N0YXR1cyAgIFN0cmluZz8gICAgICAgICBAZGIuQ2hhcigyMCkNCiAgY3JlYXRlZF9ieSAgICAgICAgICBTdHJpbmc/ICAgICAgICAgQGRiLkNoYXIoNTApDQogIGNyZWF0ZWRfYXQgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkX2J5ICAgICAgICAgIFN0cmluZz8gICAgICAgICBAZGIuQ2hhcig1MCkNCiAgdXBkYXRlZF9hdCAgICAgICAgICBEYXRlVGltZT8gICAgICAgQHVwZGF0ZWRBdA0KICBjYWxsX3RyZWVfc2RtICAgICAgIGNhbGxfdHJlZV9zZG0/ICBAcmVsYXRpb24oImNhbGxfdHJlZV9zZG1Ub2NhbGxfdHJlZV9zZG0iLCBmaWVsZHM6IFtzdXBlcnZpc29yX25wcF0sIHJlZmVyZW5jZXM6IFtucHBdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiZmtfbnBwX3N1cGVydmlzb3IiKQ0KICBvdGhlcl9jYWxsX3RyZWVfc2RtIGNhbGxfdHJlZV9zZG1bXSBAcmVsYXRpb24oImNhbGxfdHJlZV9zZG1Ub2NhbGxfdHJlZV9zZG0iKQ0KDQogIEBAaW5kZXgoW3N1cGVydmlzb3JfbnBwXSwgbWFwOiAiZmtfbnBwX3N1cGVydmlzb3IiKQ0KfQ0KDQptb2RlbCBvcmdfdHlwZSB7DQogIGlkICAgICAgICAgICAgU3RyaW5nICAgICAgICAgIEBpZCBAZGIuQ2hhcig0MCkNCiAgbmFtZSAgICAgICAgICBTdHJpbmcgICAgICAgICAgQGRiLkNoYXIoNDApDQogIGRlc2NyaXB0aW9uICAgU3RyaW5nPyAgICAgICAgIEBkYi5DaGFyKDI1MCkNCiAgc29ydF9vcmRlciAgICBJbnQgICAgICAgICAgICAgQGRlZmF1bHQoMCkNCiAgaXNfYWN0aXZlICAgICBCb29sZWFuICAgICAgICAgQGRlZmF1bHQodHJ1ZSkNCiAgaXNfY210ICAgICAgICBCb29sZWFuICAgICAgICAgQGRlZmF1bHQoZmFsc2UpDQogIGlzX2NvbnNvbCAgICAgQm9vbGVhbiAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQ0KICBpc19yZWFsICAgICAgIEJvb2xlYW4gICAgICAgICBAZGVmYXVsdCh0cnVlKQ0KICBjcmVhdGVkX2J5ICAgIFN0cmluZz8gICAgICAgICBAZGIuQ2hhcig1MCkNCiAgY3JlYXRlZF9hdCAgICBEYXRlVGltZT8gICAgICAgQGRlZmF1bHQobm93KCkpDQogIHVwZGF0ZWRfYnkgICAgU3RyaW5nPyAgICAgICAgIEBkYi5DaGFyKDUwKQ0KICB1cGRhdGVkX2F0ICAgIERhdGVUaW1lPyAgICAgICBAdXBkYXRlZEF0DQp9DQoNCnZpZXcgdndfdGhyZWF0X3R5cGVzIHsNCiAgaWQgICAgICAgICAgICBTdHJpbmcgICAgQGlkIEBkYi5DaGFyKDQwKQ0KICB0ZW5hbnRfaWQgICAgIFN0cmluZz8gICBAZGIuQ2hhcig4KQ0KICBuYW1lICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTApDQogIGlzX2FjdGl2ZSAgICAgQm9vbGVhbj8gIEBkZWZhdWx0KHRydWUpDQogIGNyZWF0ZWRfYXQgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkX2F0ICAgIERhdGVUaW1lPw0KICBkZWxldGVfZW5hYmxlIEludCAgICAgICBAZGVmYXVsdCgwKQ0KfQ0K",
  "inlineSchemaHash": "3186ca0a90126ac7a78efc99d4591faf20000dabfdefb7df5a7fa9677b4f4db2"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"threat_type\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"threats\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"threat\",\"relationName\":\"threatTothreat_type\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"tenant_id\",\"name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"tenant_id\",\"name\"]}],\"isGenerated\":false},\"threat\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"bcm_disaster\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster\",\"relationName\":\"bcm_disasterTothreat\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threat_types\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"threat_type\",\"relationName\":\"threatTothreat_type\",\"relationFromFields\":[\"type_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"type_id\",\"name\",\"tenant_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"type_id\",\"name\",\"tenant_id\"]}],\"isGenerated\":false},\"Applications\":{\"dbName\":\"reff_applications\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"severity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[[\"tenant_id\",\"code\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"tenant_id\",\"code\"]}],\"isGenerated\":false},\"Staff_Condition\":{\"dbName\":\"status_staff_condition\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort_order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[[\"name\",\"tenant_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"name\",\"tenant_id\"]}],\"isGenerated\":false},\"Indirect_Unit\":{\"dbName\":\"status_indirect_unit\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort_order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"bcm_disaster_unit_affected_indirrect\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster_unit_affected_indirrect\",\"relationName\":\"Indirect_UnitTobcm_disaster_unit_affected_indirrect\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"tenant_id\",\"name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"tenant_id\",\"name\"]}],\"isGenerated\":false},\"App_Testing_Period\":{\"dbName\":\"status_app_testing_period\",\"fields\":[{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort_order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[[\"tenant_id\",\"name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"tenant_id\",\"name\"]}],\"isGenerated\":false},\"Currency\":{\"dbName\":\"reff_currency\",\"fields\":[{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort_order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":2,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"bcm_disaster_bcm_disaster_estimated_lost_currencyToreff_currency\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster\",\"relationName\":\"bcm_disaster_estimated_lost_currencyToreff_currency\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster_bcm_disaster_total_insurance_claim_currencyToreff_currency\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster\",\"relationName\":\"bcm_disaster_total_insurance_claim_currencyToreff_currency\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"tenant_id\",\"name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"tenant_id\",\"name\"]}],\"isGenerated\":false},\"bcm_disaster\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"org_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threat_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disaster_chronology\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disaster_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disaster_location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estimated_lost_currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estimated_lost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_insurance_claim_currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_insurance_claim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"temp_action_plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recovery_plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alt_customer_services\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alt_staff\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wf_status_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assign_curr_org\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assign_curr_role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"reff_currency_bcm_disaster_estimated_lost_currencyToreff_currency\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Currency\",\"relationName\":\"bcm_disaster_estimated_lost_currencyToreff_currency\",\"relationFromFields\":[\"estimated_lost_currency\"],\"relationToFields\":[\"code\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reff_currency_bcm_disaster_total_insurance_claim_currencyToreff_currency\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Currency\",\"relationName\":\"bcm_disaster_total_insurance_claim_currencyToreff_currency\",\"relationFromFields\":[\"total_insurance_claim_currency\"],\"relationToFields\":[\"code\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threat\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"threat\",\"relationName\":\"bcm_disasterTothreat\",\"relationFromFields\":[\"threat_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workflow_status\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workflow_status\",\"relationName\":\"bcm_disasterToworkflow_status\",\"relationFromFields\":[\"wf_status_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster_assignment_history\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster_assignment_history\",\"relationName\":\"bcm_disasterTobcm_disaster_assignment_history\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster_atm_affected\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster_atm_affected\",\"relationName\":\"bcm_disasterTobcm_disaster_atm_affected\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster_staff_affected\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster_staff_affected\",\"relationName\":\"bcm_disasterTobcm_disaster_staff_affected\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster_unit_affected_dirrect\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster_unit_affected_dirrect\",\"relationName\":\"bcm_disasterTobcm_disaster_unit_affected_dirrect\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster_unit_affected_indirrect\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster_unit_affected_indirrect\",\"relationName\":\"bcm_disasterTobcm_disaster_unit_affected_indirrect\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"bcm_disaster_assignment_history\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disaster_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"history_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wf_status_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster\",\"relationName\":\"bcm_disasterTobcm_disaster_assignment_history\",\"relationFromFields\":[\"disaster_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workflow_status\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workflow_status\",\"relationName\":\"bcm_disaster_assignment_historyToworkflow_status\",\"relationFromFields\":[\"wf_status_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"bcm_disaster_atm_affected\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disaster_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_atm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_atm_is_operating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_atm_is_not_operating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster\",\"relationName\":\"bcm_disasterTobcm_disaster_atm_affected\",\"relationFromFields\":[\"disaster_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"bcm_disaster_staff_affected\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disaster_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff_condition_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_family\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster\",\"relationName\":\"bcm_disasterTobcm_disaster_staff_affected\",\"relationFromFields\":[\"disaster_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"bcm_disaster_unit_affected_dirrect\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disaster_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location_org_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_operating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster\",\"relationName\":\"bcm_disasterTobcm_disaster_unit_affected_dirrect\",\"relationFromFields\":[\"disaster_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"bcm_disaster_unit_affected_indirrect\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disaster_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_indirect_unit_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location_org_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_indirect_unit\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Indirect_Unit\",\"relationName\":\"Indirect_UnitTobcm_disaster_unit_affected_indirrect\",\"relationFromFields\":[\"status_indirect_unit_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster\",\"relationName\":\"bcm_disasterTobcm_disaster_unit_affected_indirrect\",\"relationFromFields\":[\"disaster_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"workflow_status\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"(true)\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster\",\"relationName\":\"bcm_disasterToworkflow_status\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster_assignment_history\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster_assignment_history\",\"relationName\":\"bcm_disaster_assignment_historyToworkflow_status\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sys_process_list\":{\"dbName\":null,\"fields\":[{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"org_structure\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"org_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"org_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"org_type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_org_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_org_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"workflow_level\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wf_module_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"org_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"org_type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dept_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_dept_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wf_status_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workflow_module\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workflow_module\",\"relationName\":\"workflow_levelToworkflow_module\",\"relationFromFields\":[\"wf_module_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"workflow_module\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"org_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"org_type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sys_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workflow_level\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workflow_level\",\"relationName\":\"workflow_levelToworkflow_module\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"call_tree_sdm\":{\"dbName\":null,\"fields\":[{\"name\":\"npp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"position\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"supervisor_npp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"org_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_home\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"employment_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"call_tree_sdm\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"call_tree_sdm\",\"relationName\":\"call_tree_sdmTocall_tree_sdm\",\"relationFromFields\":[\"supervisor_npp\"],\"relationToFields\":[\"npp\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"other_call_tree_sdm\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"call_tree_sdm\",\"relationName\":\"call_tree_sdmTocall_tree_sdm\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"org_type\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort_order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_cmt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_consol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_real\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"vw_threat_types\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delete_enable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma")
