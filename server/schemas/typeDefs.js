// TODO Add type defs for oracle models/queries

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    profileId: ID
    email: String!
    password: String!
  }
  type SpillReport {
    DocNumber: String
    SubmitDate: String
    FacilityId: String
    API: String
    Operator: String
    OperatorNumber: String
    Complaintant: String
    FacilityType: String
    GroundwaterImpact: String
    SurfacewaterImpact: String
    BermContained: String
    SpillArea: String
    Closed: String
    IncidentDate: String
    ResolutionDate: String
    Lat: String
    Long: String
    County: String
    URL: String
    Municipality: String
  }
  type Production {
    County: String
    Sequence: String
    Sidetrack: String
    Year: Int
    OilProduction: Int
    OilSales: Float
    GasProduction: Int
    GasSales: Float
    WaterProduced: Int
    Location: String
    OperatorNumber: String
    Operator: String
  }
  type NOAV {
    DocumentNumber: String
    NOAVIssueDate: String
    OperatorNumber: String
    OperatorName: String
    APICountyCode: String
    APISequenceNumber: String
    FacilityID: String
    FacilityOrWellName: String
    FacilityOrWellNumber: String
    County: String
    Rule: String
    RuleDescription: String
    InitialDiscoveryDate: String
    SelfReported: String
    DateOfViolation: String
    AllegedViolationDescription: String
    CorrectiveActionDescription: String
    CorrectiveDueDate: String
    CorrectiveStartDate: String
    CorrectiveActionCompleteData: String
    CorrectiveActionComplete: String
    CauseNumber: String
    OrderNumber: String
    DocketNumber: String
    EnforcementAction: String
    FinalResolutionDate: String
    FinalResolutionComments: String
    ObviousDuration: String
    PerformedAsRequired: String
    URL: String
    Year: String
    chartdate: String
    Municipality: String
  }
  type PendingPermits {
    DocNumber: String
    WellName: String
    WellNumber: String
    Operator: String
    OperatorNumber: String
    QtrQtr: String
    Section: String
    Township: String
    Range: String
    Lat: String
    Long: String
    County: String
    Type: String
    Municipality: String
    Related02A: String
  }
  type WellStatus {
    APICountyCode: String
    APISequenceNumber: String
    WellName: String
    WellNumber: String
    Operator: String
    OperatorNumber: String
    QtrQtr: String
    Section: String
    Township: String
    Range: String
    Status: String
    StatusDate: String
    ScoutCard: String
    FacilityId: String
    Lat: String
    Long: String
    Chart: String
    County: String
    Municipality: String
  }

  type InspectionData {
    InspectionDate: String
    DocNumber: String
    LocationId: String
    CountyCode: String
    SequenceNumber: String
    InspectionStatus: String
    WellName: String
    Lat: String
    Long: String
    County: String
    Link: String
    Municipality: String
    CorrectiveAction: String
  }

  type InspectionCompletedHR {
    CountyCode: String
    Inspected: String
  }

  type Notifications {
    DocNumber: String
    Abbr: String
    Date: String
    FacilityId: String
    NoteDescription: String
    County: String
    ApiCountyCode: String
    ApiSequenceCode: String
    Lat: String
    Long: String
    LocationId: String
    Municipality: String
  }

  type OperatorChange {
    APICountyCode: String
    APISequenceNumber: String
    FacilityID: String
    WellName: String
    WellNumber: String
    CurrentOperator: String
    CurrentOperatorNumber: String
    FormerOperator: String
    FormerOperatorNumber: String
    EndDate: String
    WellStatus: String
    StatusDate: String
    QtrQtr: String
    Section: String
    Township: String
    Range: String
    Meridian: String
    Lat: String
    Long: String
    Municipality: String
    County: String
    Year: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }
  type Query {
    profiles: [Profile]
    spillReport_Id(OperatorNumber: String!): [SpillReport]
    selectOperator: [SpillReport]
    production_Id(OperatorNumber: String!, Year: String!): [Production]
    noav_Id(OperatorNumber: String!): [NOAV]
    pendingPermits_Id(OperatorNumber: String!): [PendingPermits]
    wellStatus_Id(OperatorNumber: String!): [WellStatus]
    inspectionData_Id(LocationId: String!): [InspectionData]
    inspectionCompletedHR_Id: [InspectionCompletedHR]
    notifications_Id: [Notifications]
    operatorChange_Id(CurrentOperator: String): [OperatorChange]
    selectOperatorName(OperatorNumber: String!): SpillReport
  }
  type Mutation {
    signUp(email: String!, password: String!): Auth
    signIn(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
