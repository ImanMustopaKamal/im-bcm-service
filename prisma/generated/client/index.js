
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
 * Prisma Client JS version: 5.7.0
 * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
 */
Prisma.prismaVersion = {
  client: "5.7.0",
  engine: "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9"
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
  parent_org_id: 'parent_org_id',
  parent_org_name: 'parent_org_name',
  created_at: 'created_at',
  created_by: 'created_by',
  updated_at: 'updated_at',
  updated_by: 'updated_by'
};

exports.Prisma.Workflow_levelScalarFieldEnum = {
  id: 'id',
  wf_module_code: 'wf_module_code',
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
      "value": "/Users/mac/Documents/coding/dimy/im-bcm-service/prisma/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin",
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
  "clientVersion": "5.7.0",
  "engineVersion": "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9",
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
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgICAgICAgID0gImdlbmVyYXRlZC9jbGllbnQiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJ2aWV3cyJdCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gIm15c3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCB0aHJlYXRfdHlwZSB7CiAgaWQgICAgICAgICBTdHJpbmcgICAgQGlkIEBkYi5DaGFyKDQwKQogIHRlbmFudF9pZCAgU3RyaW5nICAgIEBkYi5DaGFyKDgpCiAgbmFtZSAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoMjUwKQogIGlzX2FjdGl2ZSAgQm9vbGVhbiAgIEBkZWZhdWx0KHRydWUpCiAgY3JlYXRlZF9hdCBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9hdCBEYXRlVGltZT8gQHVwZGF0ZWRBdAogIHRocmVhdHMgICAgdGhyZWF0W10KCiAgQEB1bmlxdWUoW3RlbmFudF9pZCwgbmFtZV0sIG1hcDogInVfdGhyZWF0X3R5cGVfbmFtZV90ZW5hbnQiKQp9Cgptb2RlbCB0aHJlYXQgewogIGlkICAgICAgICAgICBTdHJpbmcgICAgICAgICBAaWQgQGRiLkNoYXIoNDApCiAgdGVuYW50X2lkICAgIFN0cmluZyAgICAgICAgIEBkYi5DaGFyKDgpCiAgdHlwZV9pZCAgICAgIFN0cmluZyAgICAgICAgIEBkYi5DaGFyKDQwKQogIG5hbWUgICAgICAgICBTdHJpbmcgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgaXNfYWN0aXZlICAgIEJvb2xlYW4gICAgICAgIEBkZWZhdWx0KHRydWUpCiAgY3JlYXRlZF9hdCAgIERhdGVUaW1lICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfYXQgICBEYXRlVGltZT8gICAgICBAdXBkYXRlZEF0CiAgYmNtX2Rpc2FzdGVyIGJjbV9kaXNhc3RlcltdCiAgdGhyZWF0X3R5cGVzIHRocmVhdF90eXBlICAgIEByZWxhdGlvbihmaWVsZHM6IFt0eXBlX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogImZrX3RocmVhdF90eXBlcyIpCgogIEBAdW5pcXVlKFt0eXBlX2lkLCBuYW1lLCB0ZW5hbnRfaWRdLCBtYXA6ICJ1X3RocmVhdF90eXBlX25hbWVfdGVuYW50IikKICBAQGluZGV4KFt0eXBlX2lkXSwgbWFwOiAiZmtfdGhyZWF0X3R5cGUiKQp9Cgptb2RlbCBBcHBsaWNhdGlvbnMgewogIGlkICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGIuVmFyQ2hhcigyMikKICB0ZW5hbnRfaWQgIFN0cmluZyAgICBAZGIuQ2hhcig4KQogIGNvZGUgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDEyMCkKICBuYW1lICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcigyNTApCiAgc2V2ZXJpdHkgICBJbnQKICBpc19hY3RpdmUgIEJvb2xlYW4gICBAZGVmYXVsdCh0cnVlKQogIGNyZWF0ZWRfYXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfYXQgRGF0ZVRpbWU/IEB1cGRhdGVkQXQKCiAgQEB1bmlxdWUoW3RlbmFudF9pZCwgY29kZV0sIG1hcDogInVfYXBwX3RlbmFudF9jb2RlIikKICBAQG1hcCgicmVmZl9hcHBsaWNhdGlvbnMiKQp9Cgptb2RlbCBTdGFmZl9Db25kaXRpb24gewogIGlkICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGIuVmFyQ2hhcigyMikKICB0ZW5hbnRfaWQgIFN0cmluZyAgICBAZGIuQ2hhcig4KQogIG5hbWUgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDI1MCkKICBzb3J0X29yZGVyIEludAogIGlzX2FjdGl2ZSAgQm9vbGVhbiAgIEBkZWZhdWx0KHRydWUpCiAgY3JlYXRlZF9hdCBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9hdCBEYXRlVGltZT8gQHVwZGF0ZWRBdAoKICBAQHVuaXF1ZShbbmFtZSwgdGVuYW50X2lkXSwgbWFwOiAic3RhdHVzX3N0YWZmX2NvbmRpdGlvbl9uYW1lX2tleSIpCiAgQEBtYXAoInN0YXR1c19zdGFmZl9jb25kaXRpb24iKQp9Cgptb2RlbCBJbmRpcmVjdF9Vbml0IHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkYi5WYXJDaGFyKDIyKQogIHRlbmFudF9pZCAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuQ2hhcig4KQogIG5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTApCiAgc29ydF9vcmRlciAgICAgICAgICAgICAgICAgICAgICAgICAgIEludAogIGlzX2FjdGl2ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdCh0cnVlKQogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZWRBdAogIGJjbV9kaXNhc3Rlcl91bml0X2FmZmVjdGVkX2luZGlycmVjdCBiY21fZGlzYXN0ZXJfdW5pdF9hZmZlY3RlZF9pbmRpcnJlY3RbXQoKICBAQHVuaXF1ZShbdGVuYW50X2lkLCBuYW1lXSwgbWFwOiAidV9pX3VuaXRfdGVuYW50IikKICBAQG1hcCgic3RhdHVzX2luZGlyZWN0X3VuaXQiKQp9Cgptb2RlbCBBcHBfVGVzdGluZ19QZXJpb2QgewogIGNvZGUgICAgICAgU3RyaW5nICAgIEBpZCBAZGIuVmFyQ2hhcigyMikKICB0ZW5hbnRfaWQgIFN0cmluZyAgICBAZGIuQ2hhcig4KQogIG5hbWUgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDI1MCkKICBzb3J0X29yZGVyIEludAogIGlzX2FjdGl2ZSAgQm9vbGVhbiAgIEBkZWZhdWx0KHRydWUpCiAgY3JlYXRlZF9hdCBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9hdCBEYXRlVGltZT8gQHVwZGF0ZWRBdAoKICBAQHVuaXF1ZShbdGVuYW50X2lkLCBuYW1lXSwgbWFwOiAidV9hcHBfdGVzdGluZ19uYW1lX3RlbmFudCIpCiAgQEBtYXAoInN0YXR1c19hcHBfdGVzdGluZ19wZXJpb2QiKQp9Cgptb2RlbCBDdXJyZW5jeSB7CiAgY29kZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgQGlkIEBkYi5DaGFyKDUwKQogIHRlbmFudF9pZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgIEBkYi5DaGFyKDgpCiAgbmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgQGRiLkNoYXIoMTAwKQogIGRlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgIEBkYi5WYXJDaGFyKDI1MDApCiAgc29ydF9vcmRlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgQGRlZmF1bHQoMikKICBpc19hY3RpdmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICBAZGVmYXVsdCh0cnVlKQogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgIEB1cGRhdGVkQXQKICBiY21fZGlzYXN0ZXJfYmNtX2Rpc2FzdGVyX2VzdGltYXRlZF9sb3N0X2N1cnJlbmN5VG9yZWZmX2N1cnJlbmN5ICAgICAgICBiY21fZGlzYXN0ZXJbXSBAcmVsYXRpb24oImJjbV9kaXNhc3Rlcl9lc3RpbWF0ZWRfbG9zdF9jdXJyZW5jeVRvcmVmZl9jdXJyZW5jeSIpCiAgYmNtX2Rpc2FzdGVyX2JjbV9kaXNhc3Rlcl90b3RhbF9pbnN1cmFuY2VfY2xhaW1fY3VycmVuY3lUb3JlZmZfY3VycmVuY3kgYmNtX2Rpc2FzdGVyW10gQHJlbGF0aW9uKCJiY21fZGlzYXN0ZXJfdG90YWxfaW5zdXJhbmNlX2NsYWltX2N1cnJlbmN5VG9yZWZmX2N1cnJlbmN5IikKCiAgQEB1bmlxdWUoW3RlbmFudF9pZCwgbmFtZV0sIG1hcDogInVfY3Vycl9uYW1lX3RlbmFudCIpCiAgQEBtYXAoInJlZmZfY3VycmVuY3kiKQp9Cgptb2RlbCBiY21fZGlzYXN0ZXIgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRiLkNoYXIoNDApCiAgdGVuYW50X2lkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDQwKQogIG9yZ19pZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuQ2hhcig0MCkKICB0aHJlYXRfaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLkNoYXIoNDApCiAgZGlzYXN0ZXJfY2hyb25vbG9neSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MDApCiAgZGlzYXN0ZXJfZGF0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5EYXRlCiAgZGlzYXN0ZXJfbG9jYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDQwKQogIGVzdGltYXRlZF9sb3N0X2N1cnJlbmN5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuQ2hhcig1MCkKICBlc3RpbWF0ZWRfbG9zdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVjaW1hbD8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLkRlY2ltYWwoMTAsIDApCiAgdG90YWxfaW5zdXJhbmNlX2NsYWltX2N1cnJlbmN5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5DaGFyKDUwKQogIHRvdGFsX2luc3VyYW5jZV9jbGFpbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWNpbWFsPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuRGVjaW1hbCgxMCwgMCkKICB0ZW1wX2FjdGlvbl9wbGFuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwMCkKICByZWNvdmVyeV9wbGFuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwMCkKICBhbHRfY3VzdG9tZXJfc2VydmljZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwMCkKICBhbHRfc3RhZmYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjUwMCkKICB3Zl9zdGF0dXNfaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PwogIGFzc2lnbl9jdXJyX29yZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuQ2hhcig0MCkKICBhc3NpZ25fY3Vycl9yb2xlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLkNoYXIoNDApCiAgY3JlYXRlZF9ieSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDUwKQogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkgQGRiLkRhdGVUaW1lKDApCiAgdXBkYXRlZF9ieSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDUwKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBkYXRlZEF0IEBkYi5EYXRlVGltZSgwKQogIHJlZmZfY3VycmVuY3lfYmNtX2Rpc2FzdGVyX2VzdGltYXRlZF9sb3N0X2N1cnJlbmN5VG9yZWZmX2N1cnJlbmN5ICAgICAgICBDdXJyZW5jeT8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImJjbV9kaXNhc3Rlcl9lc3RpbWF0ZWRfbG9zdF9jdXJyZW5jeVRvcmVmZl9jdXJyZW5jeSIsIGZpZWxkczogW2VzdGltYXRlZF9sb3N0X2N1cnJlbmN5XSwgcmVmZXJlbmNlczogW2NvZGVdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiZmtfZGlzYXN0ZXJfZXN0aW1hdGVkX2xvc3RfY3VyciIpCiAgcmVmZl9jdXJyZW5jeV9iY21fZGlzYXN0ZXJfdG90YWxfaW5zdXJhbmNlX2NsYWltX2N1cnJlbmN5VG9yZWZmX2N1cnJlbmN5IEN1cnJlbmN5PyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiYmNtX2Rpc2FzdGVyX3RvdGFsX2luc3VyYW5jZV9jbGFpbV9jdXJyZW5jeVRvcmVmZl9jdXJyZW5jeSIsIGZpZWxkczogW3RvdGFsX2luc3VyYW5jZV9jbGFpbV9jdXJyZW5jeV0sIHJlZmVyZW5jZXM6IFtjb2RlXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogImZrX2Rpc2FzdGVyX2luc3VyYW5jZV9jbGFpbV9jdXJyIikKICB0aHJlYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWF0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3RocmVhdF9pZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uLCBtYXA6ICJma19kaXNhc3Rlcl90aHJlYXQiKQogIHdvcmtmbG93X3N0YXR1cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZmxvd19zdGF0dXM/ICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbd2Zfc3RhdHVzX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogImZrX2Rpc2FzdGVyX3dmX3N0YXR1cyIpCiAgYmNtX2Rpc2FzdGVyX2Fzc2lnbm1lbnRfaGlzdG9yeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJjbV9kaXNhc3Rlcl9hc3NpZ25tZW50X2hpc3RvcnlbXQogIGJjbV9kaXNhc3Rlcl9hdG1fYWZmZWN0ZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiY21fZGlzYXN0ZXJfYXRtX2FmZmVjdGVkW10KICBiY21fZGlzYXN0ZXJfc3RhZmZfYWZmZWN0ZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmNtX2Rpc2FzdGVyX3N0YWZmX2FmZmVjdGVkW10KICBiY21fZGlzYXN0ZXJfdW5pdF9hZmZlY3RlZF9kaXJyZWN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmNtX2Rpc2FzdGVyX3VuaXRfYWZmZWN0ZWRfZGlycmVjdFtdCiAgYmNtX2Rpc2FzdGVyX3VuaXRfYWZmZWN0ZWRfaW5kaXJyZWN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJjbV9kaXNhc3Rlcl91bml0X2FmZmVjdGVkX2luZGlycmVjdFtdCgogIEBAaW5kZXgoW2VzdGltYXRlZF9sb3N0X2N1cnJlbmN5XSwgbWFwOiAiZmtfZGlzYXN0ZXJfZXN0aW1hdGVkX2xvc3RfY3VyciIpCiAgQEBpbmRleChbdG90YWxfaW5zdXJhbmNlX2NsYWltX2N1cnJlbmN5XSwgbWFwOiAiZmtfZGlzYXN0ZXJfaW5zdXJhbmNlX2NsYWltX2N1cnIiKQogIEBAaW5kZXgoW3RocmVhdF9pZF0sIG1hcDogImZrX2Rpc2FzdGVyX3RocmVhdCIpCiAgQEBpbmRleChbd2Zfc3RhdHVzX2lkXSwgbWFwOiAiZmtfZGlzYXN0ZXJfd2Zfc3RhdHVzIikKfQoKbW9kZWwgYmNtX2Rpc2FzdGVyX2Fzc2lnbm1lbnRfaGlzdG9yeSB7CiAgaWQgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgQGlkIEBkYi5DaGFyKDQwKQogIGRpc2FzdGVyX2lkICAgICBTdHJpbmc/ICAgICAgICAgIEBkYi5DaGFyKDQwKQogIGhpc3RvcnlfZGF0ZSAgICBEYXRlVGltZT8gICAgICAgIEBkYi5EYXRlVGltZSgwKQogIHVzZXJfaWQgICAgICAgICBTdHJpbmc/ICAgICAgICAgIEBkYi5DaGFyKDQwKQogIHVzZXJfbmFtZSAgICAgICBTdHJpbmc/ICAgICAgICAgIEBkYi5WYXJDaGFyKDI1MDApCiAgd2Zfc3RhdHVzX2lkICAgIEludD8KICByZWFzb24gICAgICAgICAgU3RyaW5nPyAgICAgICAgICBAZGIuVmFyQ2hhcigyNTAwKQogIGJjbV9kaXNhc3RlciAgICBiY21fZGlzYXN0ZXI/ICAgIEByZWxhdGlvbihmaWVsZHM6IFtkaXNhc3Rlcl9pZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uLCBtYXA6ICJma19oaXN0b3J5X2Rpc2FzdGVyIikKICB3b3JrZmxvd19zdGF0dXMgd29ya2Zsb3dfc3RhdHVzPyBAcmVsYXRpb24oZmllbGRzOiBbd2Zfc3RhdHVzX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogImZrX2hpc3Rvcnlfd2Zfc3RhdHVzIikKCiAgQEBpbmRleChbZGlzYXN0ZXJfaWRdLCBtYXA6ICJma19oaXN0b3J5X2Rpc2FzdGVyIikKICBAQGluZGV4KFt3Zl9zdGF0dXNfaWRdLCBtYXA6ICJma19oaXN0b3J5X3dmX3N0YXR1cyIpCn0KCm1vZGVsIGJjbV9kaXNhc3Rlcl9hdG1fYWZmZWN0ZWQgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgQGlkIEBkYi5DaGFyKDQwKQogIGRpc2FzdGVyX2lkICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgQGRiLkNoYXIoNDApCiAgdG90YWxfYXRtICAgICAgICAgICAgICAgICAgSW50PwogIHRvdGFsX2F0bV9pc19vcGVyYXRpbmcgICAgIEludD8KICB0b3RhbF9hdG1faXNfbm90X29wZXJhdGluZyBJbnQ/CiAgYmNtX2Rpc2FzdGVyICAgICAgICAgICAgICAgYmNtX2Rpc2FzdGVyPyBAcmVsYXRpb24oZmllbGRzOiBbZGlzYXN0ZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiZmtfYXRtX2FmZmVjdGVkX2Rpc2FzdGVyIikKCiAgQEBpbmRleChbZGlzYXN0ZXJfaWRdLCBtYXA6ICJma19hdG1fYWZmZWN0ZWRfZGlzYXN0ZXIiKQp9Cgptb2RlbCBiY21fZGlzYXN0ZXJfc3RhZmZfYWZmZWN0ZWQgewogIGlkICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgIEBpZCBAZGIuQ2hhcig0MCkKICBkaXNhc3Rlcl9pZCAgICAgICAgU3RyaW5nPyAgICAgICBAZGIuQ2hhcig0MCkKICBzdGFmZl9jb25kaXRpb25faWQgU3RyaW5nPyAgICAgICBAZGIuVmFyQ2hhcigyMikKICB0b3RhbCAgICAgICAgICAgICAgSW50PwogIG5hbWUgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgIEBkYi5WYXJDaGFyKDI1MDApCiAgdG90YWxfZmFtaWx5ICAgICAgIEludD8KICBiY21fZGlzYXN0ZXIgICAgICAgYmNtX2Rpc2FzdGVyPyBAcmVsYXRpb24oZmllbGRzOiBbZGlzYXN0ZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiZmtfc3RhZmZfYWZmZWN0ZWRfZGlzYXN0ZXIiKQoKICBAQGluZGV4KFtkaXNhc3Rlcl9pZF0sIG1hcDogImZrX3N0YWZmX2FmZmVjdGVkX2Rpc2FzdGVyIikKfQoKbW9kZWwgYmNtX2Rpc2FzdGVyX3VuaXRfYWZmZWN0ZWRfZGlycmVjdCB7CiAgaWQgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgQGlkIEBkYi5DaGFyKDQwKQogIGRpc2FzdGVyX2lkICAgICBTdHJpbmc/ICAgICAgIEBkYi5DaGFyKDQwKQogIGxvY2F0aW9uX29yZ19pZCBTdHJpbmc/ICAgICAgIEBkYi5DaGFyKDQwKQogIGlzX29wZXJhdGluZyAgICBCb29sZWFuPwogIGJjbV9kaXNhc3RlciAgICBiY21fZGlzYXN0ZXI/IEByZWxhdGlvbihmaWVsZHM6IFtkaXNhc3Rlcl9pZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uLCBtYXA6ICJma191bml0X2FmZmVjdGVkX2RpcnJlY3RfZGlzYXN0ZXIiKQoKICBAQGluZGV4KFtkaXNhc3Rlcl9pZF0sIG1hcDogImZrX3VuaXRfYWZmZWN0ZWRfZGlycmVjdF9kaXNhc3RlciIpCn0KCm1vZGVsIGJjbV9kaXNhc3Rlcl91bml0X2FmZmVjdGVkX2luZGlycmVjdCB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgQGlkIEBkYi5DaGFyKDQwKQogIGRpc2FzdGVyX2lkICAgICAgICAgICAgIFN0cmluZz8gICAgICAgIEBkYi5DaGFyKDQwKQogIHN0YXR1c19pbmRpcmVjdF91bml0X2lkIFN0cmluZz8gICAgICAgIEBkYi5WYXJDaGFyKDIyKQogIGxvY2F0aW9uX29yZ19pZCAgICAgICAgIFN0cmluZz8gICAgICAgIEBkYi5DaGFyKDQwKQogIHN0YXR1c19pbmRpcmVjdF91bml0ICAgIEluZGlyZWN0X1VuaXQ/IEByZWxhdGlvbihmaWVsZHM6IFtzdGF0dXNfaW5kaXJlY3RfdW5pdF9pZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uLCBtYXA6ICJma19pbmRpcmVjdF91bml0X3N0YXR1cyIpCiAgYmNtX2Rpc2FzdGVyICAgICAgICAgICAgYmNtX2Rpc2FzdGVyPyAgQHJlbGF0aW9uKGZpZWxkczogW2Rpc2FzdGVyX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogImZrX3VuaXRfYWZmZWN0ZWRfaW5kaXJyZWN0X2Rpc2FzdGVyIikKCiAgQEBpbmRleChbc3RhdHVzX2luZGlyZWN0X3VuaXRfaWRdLCBtYXA6ICJma19pbmRpcmVjdF91bml0X3N0YXR1cyIpCiAgQEBpbmRleChbZGlzYXN0ZXJfaWRdLCBtYXA6ICJma191bml0X2FmZmVjdGVkX2luZGlycmVjdF9kaXNhc3RlciIpCn0KCm1vZGVsIHdvcmtmbG93X3N0YXR1cyB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlkCiAgbmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTAwKQogIGlzX2FjdGl2ZSAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbj8gICAgICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCIodHJ1ZSkiKSkKICBiY21fZGlzYXN0ZXIgICAgICAgICAgICAgICAgICAgIGJjbV9kaXNhc3RlcltdCiAgYmNtX2Rpc2FzdGVyX2Fzc2lnbm1lbnRfaGlzdG9yeSBiY21fZGlzYXN0ZXJfYXNzaWdubWVudF9oaXN0b3J5W10KfQoKbW9kZWwgc3lzX3Byb2Nlc3NfbGlzdCB7CiAgY29kZSAgICAgICAgU3RyaW5nICAgQGlkIEBkYi5DaGFyKDQwKQogIG5hbWUgICAgICAgIFN0cmluZyAgIEBkYi5DaGFyKDEwMCkKICBkZXNjcmlwdGlvbiBTdHJpbmc/ICBAZGIuVmFyQ2hhcigyNTAwKQogIGlzX2FjdGl2ZSAgIEJvb2xlYW4/IEBkZWZhdWx0KHRydWUpCn0KCm1vZGVsIG9yZ19zdHJ1Y3R1cmUgewogIGlkICAgICAgICAgICAgICBTdHJpbmcgICAgQGlkIEBkYi5DaGFyKDQwKQogIG9yZ19pZCAgICAgICAgICBTdHJpbmc/ICAgQGRiLkNoYXIoNDApCiAgb3JnX25hbWUgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyMDApCiAgcGFyZW50X29yZ19pZCAgIFN0cmluZz8gICBAZGIuQ2hhcig0MCkKICBwYXJlbnRfb3JnX25hbWUgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDIwMCkKICBjcmVhdGVkX2F0ICAgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKQogIGNyZWF0ZWRfYnkgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNTApCiAgdXBkYXRlZF9hdCAgICAgIERhdGVUaW1lPyBAdXBkYXRlZEF0CiAgdXBkYXRlZF9ieSAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1MCkKfQoKbW9kZWwgd29ya2Zsb3dfbGV2ZWwgewogIGlkICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgQGlkIEBkYi5DaGFyKDQwKQogIHdmX21vZHVsZV9jb2RlICBTdHJpbmcgICAgICAgICAgQGRiLkNoYXIoNDApCiAgbGV2ZWwgICAgICAgICAgIEludAogIHJvbGVfaWQgICAgICAgICBTdHJpbmcgICAgICAgICAgQGRiLkNoYXIoNDApCiAgb3JnX2lkICAgICAgICAgIFN0cmluZz8gICAgICAgICBAZGIuQ2hhcig0MCkKICBvcmdfdHlwZV9pZCAgICAgU3RyaW5nPyAgICAgICAgIEBkYi5DaGFyKDQwKQogIGRlcHRfaWQgICAgICAgICBTdHJpbmc/ICAgICAgICAgQGRiLkNoYXIoNDApCiAgcGFyZW50X2RlcHRfaWQgIFN0cmluZz8gICAgICAgICBAZGIuQ2hhcig0MCkKICBjcmVhdGVkX2F0ICAgICAgRGF0ZVRpbWU/ICAgICAgIEBkZWZhdWx0KG5vdygpKQogIGNyZWF0ZWRfYnkgICAgICBTdHJpbmc/ICAgICAgICAgQGRiLlZhckNoYXIoNTApCiAgdXBkYXRlZF9hdCAgICAgIERhdGVUaW1lPyAgICAgICBAdXBkYXRlZEF0CiAgdXBkYXRlZF9ieSAgICAgIFN0cmluZz8gICAgICAgICBAZGIuVmFyQ2hhcig1MCkKICB3Zl9zdGF0dXNfaWQgICAgSW50CiAgd29ya2Zsb3dfbW9kdWxlIHdvcmtmbG93X21vZHVsZSBAcmVsYXRpb24oZmllbGRzOiBbd2ZfbW9kdWxlX2NvZGVdLCByZWZlcmVuY2VzOiBbY29kZV0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uLCBtYXA6ICJma193Zl9sZXZlbF9tb2R1bGUiKQoKICBAQGluZGV4KFt3Zl9tb2R1bGVfY29kZV0sIG1hcDogImZrX3dmX2xldmVsX21vZHVsZSIpCn0KCm1vZGVsIHdvcmtmbG93X21vZHVsZSB7CiAgY29kZSAgICAgICAgICAgU3RyaW5nICAgICAgICAgICBAaWQgQGRiLkNoYXIoNDApCiAgdGVuYW50X2lkICAgICAgU3RyaW5nPyAgICAgICAgICBAZGIuQ2hhcig0MCkKICBuYW1lICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgIEBkYi5WYXJDaGFyKDIwMCkKICBpc19hY3RpdmUgICAgICBCb29sZWFuPwogIGNyZWF0ZWRfYXQgICAgIERhdGVUaW1lPyAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgY3JlYXRlZF9ieSAgICAgU3RyaW5nPyAgICAgICAgICBAZGIuVmFyQ2hhcig1MCkKICB1cGRhdGVkX2F0ICAgICBEYXRlVGltZT8gICAgICAgIEB1cGRhdGVkQXQKICB1cGRhdGVkX2J5ICAgICBTdHJpbmc/ICAgICAgICAgIEBkYi5WYXJDaGFyKDUwKQogIG9yZ19pZCAgICAgICAgIFN0cmluZz8gICAgICAgICAgQGRiLkNoYXIoNDApCiAgb3JnX3R5cGVfaWQgICAgU3RyaW5nPyAgICAgICAgICBAZGIuQ2hhcig0MCkKICBzeXNfY29kZSAgICAgICBTdHJpbmc/ICAgICAgICAgIEBkYi5DaGFyKDQwKQogIHdvcmtmbG93X2xldmVsIHdvcmtmbG93X2xldmVsW10KCiAgQEBpbmRleChbc3lzX2NvZGVdLCBtYXA6ICJma19tb2R1bGVfc3lzX2NvZGUiKQp9Cgptb2RlbCBjYWxsX3RyZWVfc2RtIHsKICBucHAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICBAaWQgQGRiLkNoYXIoNTApCiAgbmFtZSAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgQGRiLlZhckNoYXIoMTAwKQogIHBvc2l0aW9uICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgIEBkYi5WYXJDaGFyKDI1MDApCiAgc3VwZXJ2aXNvcl9ucHAgICAgICBTdHJpbmc/ICAgICAgICAgQGRiLkNoYXIoNTApCiAgb3JnX2lkICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgQGRiLkNoYXIoNTApCiAgcGhvbmVfbnVtYmVyICAgICAgICBTdHJpbmc/ICAgICAgICAgQGRiLkNoYXIoNTApCiAgcGhvbmVfaG9tZSAgICAgICAgICBTdHJpbmc/ICAgICAgICAgQGRiLkNoYXIoNTApCiAgYWRkcmVzcyAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgQGRiLlZhckNoYXIoMjUwMCkKICBlbXBsb3ltZW50X3N0YXR1cyAgIFN0cmluZz8gICAgICAgICBAZGIuQ2hhcigyMCkKICBjcmVhdGVkX2J5ICAgICAgICAgIFN0cmluZz8gICAgICAgICBAZGIuQ2hhcig1MCkKICBjcmVhdGVkX2F0ICAgICAgICAgIERhdGVUaW1lPyAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkX2J5ICAgICAgICAgIFN0cmluZz8gICAgICAgICBAZGIuQ2hhcig1MCkKICB1cGRhdGVkX2F0ICAgICAgICAgIERhdGVUaW1lPyAgICAgICBAdXBkYXRlZEF0CiAgY2FsbF90cmVlX3NkbSAgICAgICBjYWxsX3RyZWVfc2RtPyAgQHJlbGF0aW9uKCJjYWxsX3RyZWVfc2RtVG9jYWxsX3RyZWVfc2RtIiwgZmllbGRzOiBbc3VwZXJ2aXNvcl9ucHBdLCByZWZlcmVuY2VzOiBbbnBwXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogImZrX25wcF9zdXBlcnZpc29yIikKICBvdGhlcl9jYWxsX3RyZWVfc2RtIGNhbGxfdHJlZV9zZG1bXSBAcmVsYXRpb24oImNhbGxfdHJlZV9zZG1Ub2NhbGxfdHJlZV9zZG0iKQoKICBAQGluZGV4KFtzdXBlcnZpc29yX25wcF0sIG1hcDogImZrX25wcF9zdXBlcnZpc29yIikKfQoKdmlldyB2d190aHJlYXRfdHlwZXMgewogIGlkICAgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGIuQ2hhcig0MCkKICB0ZW5hbnRfaWQgICAgIFN0cmluZz8gICBAZGIuQ2hhcig4KQogIG5hbWUgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1MCkKICBpc19hY3RpdmUgICAgIEJvb2xlYW4/ICBAZGVmYXVsdCh0cnVlKQogIGNyZWF0ZWRfYXQgICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfYXQgICAgRGF0ZVRpbWU/CiAgZGVsZXRlX2VuYWJsZSBJbnQgICAgICAgQGRlZmF1bHQoMCkKfQo=",
  "inlineSchemaHash": "fbd1b805c17b176d5411fa98413143a11038bc7a01dcdbd056dffbf7dde618cc"
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

config.runtimeDataModel = JSON.parse("{\"models\":{\"threat_type\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"threats\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"threat\",\"relationName\":\"threatTothreat_type\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"tenant_id\",\"name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"tenant_id\",\"name\"]}],\"isGenerated\":false},\"threat\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"bcm_disaster\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster\",\"relationName\":\"bcm_disasterTothreat\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threat_types\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"threat_type\",\"relationName\":\"threatTothreat_type\",\"relationFromFields\":[\"type_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"type_id\",\"name\",\"tenant_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"type_id\",\"name\",\"tenant_id\"]}],\"isGenerated\":false},\"Applications\":{\"dbName\":\"reff_applications\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"severity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[[\"tenant_id\",\"code\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"tenant_id\",\"code\"]}],\"isGenerated\":false},\"Staff_Condition\":{\"dbName\":\"status_staff_condition\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort_order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[[\"name\",\"tenant_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"name\",\"tenant_id\"]}],\"isGenerated\":false},\"Indirect_Unit\":{\"dbName\":\"status_indirect_unit\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort_order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"bcm_disaster_unit_affected_indirrect\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster_unit_affected_indirrect\",\"relationName\":\"Indirect_UnitTobcm_disaster_unit_affected_indirrect\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"tenant_id\",\"name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"tenant_id\",\"name\"]}],\"isGenerated\":false},\"App_Testing_Period\":{\"dbName\":\"status_app_testing_period\",\"fields\":[{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort_order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[[\"tenant_id\",\"name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"tenant_id\",\"name\"]}],\"isGenerated\":false},\"Currency\":{\"dbName\":\"reff_currency\",\"fields\":[{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort_order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":2,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"bcm_disaster_bcm_disaster_estimated_lost_currencyToreff_currency\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster\",\"relationName\":\"bcm_disaster_estimated_lost_currencyToreff_currency\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster_bcm_disaster_total_insurance_claim_currencyToreff_currency\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster\",\"relationName\":\"bcm_disaster_total_insurance_claim_currencyToreff_currency\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"tenant_id\",\"name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"tenant_id\",\"name\"]}],\"isGenerated\":false},\"bcm_disaster\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"org_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threat_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disaster_chronology\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disaster_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disaster_location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estimated_lost_currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estimated_lost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_insurance_claim_currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_insurance_claim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"temp_action_plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recovery_plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alt_customer_services\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alt_staff\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wf_status_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assign_curr_org\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assign_curr_role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"reff_currency_bcm_disaster_estimated_lost_currencyToreff_currency\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Currency\",\"relationName\":\"bcm_disaster_estimated_lost_currencyToreff_currency\",\"relationFromFields\":[\"estimated_lost_currency\"],\"relationToFields\":[\"code\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reff_currency_bcm_disaster_total_insurance_claim_currencyToreff_currency\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Currency\",\"relationName\":\"bcm_disaster_total_insurance_claim_currencyToreff_currency\",\"relationFromFields\":[\"total_insurance_claim_currency\"],\"relationToFields\":[\"code\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threat\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"threat\",\"relationName\":\"bcm_disasterTothreat\",\"relationFromFields\":[\"threat_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workflow_status\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workflow_status\",\"relationName\":\"bcm_disasterToworkflow_status\",\"relationFromFields\":[\"wf_status_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster_assignment_history\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster_assignment_history\",\"relationName\":\"bcm_disasterTobcm_disaster_assignment_history\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster_atm_affected\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster_atm_affected\",\"relationName\":\"bcm_disasterTobcm_disaster_atm_affected\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster_staff_affected\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster_staff_affected\",\"relationName\":\"bcm_disasterTobcm_disaster_staff_affected\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster_unit_affected_dirrect\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster_unit_affected_dirrect\",\"relationName\":\"bcm_disasterTobcm_disaster_unit_affected_dirrect\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster_unit_affected_indirrect\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster_unit_affected_indirrect\",\"relationName\":\"bcm_disasterTobcm_disaster_unit_affected_indirrect\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"bcm_disaster_assignment_history\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disaster_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"history_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wf_status_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster\",\"relationName\":\"bcm_disasterTobcm_disaster_assignment_history\",\"relationFromFields\":[\"disaster_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workflow_status\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workflow_status\",\"relationName\":\"bcm_disaster_assignment_historyToworkflow_status\",\"relationFromFields\":[\"wf_status_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"bcm_disaster_atm_affected\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disaster_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_atm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_atm_is_operating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_atm_is_not_operating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster\",\"relationName\":\"bcm_disasterTobcm_disaster_atm_affected\",\"relationFromFields\":[\"disaster_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"bcm_disaster_staff_affected\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disaster_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff_condition_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_family\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster\",\"relationName\":\"bcm_disasterTobcm_disaster_staff_affected\",\"relationFromFields\":[\"disaster_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"bcm_disaster_unit_affected_dirrect\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disaster_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location_org_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_operating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster\",\"relationName\":\"bcm_disasterTobcm_disaster_unit_affected_dirrect\",\"relationFromFields\":[\"disaster_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"bcm_disaster_unit_affected_indirrect\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disaster_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_indirect_unit_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location_org_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_indirect_unit\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Indirect_Unit\",\"relationName\":\"Indirect_UnitTobcm_disaster_unit_affected_indirrect\",\"relationFromFields\":[\"status_indirect_unit_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster\",\"relationName\":\"bcm_disasterTobcm_disaster_unit_affected_indirrect\",\"relationFromFields\":[\"disaster_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"workflow_status\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"(true)\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster\",\"relationName\":\"bcm_disasterToworkflow_status\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bcm_disaster_assignment_history\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bcm_disaster_assignment_history\",\"relationName\":\"bcm_disaster_assignment_historyToworkflow_status\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sys_process_list\":{\"dbName\":null,\"fields\":[{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"org_structure\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"org_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"org_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_org_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_org_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"workflow_level\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wf_module_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"org_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"org_type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dept_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_dept_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wf_status_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workflow_module\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workflow_module\",\"relationName\":\"workflow_levelToworkflow_module\",\"relationFromFields\":[\"wf_module_code\"],\"relationToFields\":[\"code\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"workflow_module\":{\"dbName\":null,\"fields\":[{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"org_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"org_type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sys_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workflow_level\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workflow_level\",\"relationName\":\"workflow_levelToworkflow_module\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"call_tree_sdm\":{\"dbName\":null,\"fields\":[{\"name\":\"npp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"position\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"supervisor_npp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"org_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_home\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"employment_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"call_tree_sdm\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"call_tree_sdm\",\"relationName\":\"call_tree_sdmTocall_tree_sdm\",\"relationFromFields\":[\"supervisor_npp\"],\"relationToFields\":[\"npp\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"other_call_tree_sdm\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"call_tree_sdm\",\"relationName\":\"call_tree_sdmTocall_tree_sdm\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"vw_threat_types\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenant_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delete_enable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
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
path.join(__dirname, "libquery_engine-darwin.dylib.node");
path.join(process.cwd(), "prisma/generated/client/libquery_engine-darwin.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma")
