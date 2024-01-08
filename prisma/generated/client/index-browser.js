
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


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

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

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
  vw_threat_types: 'vw_threat_types'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
