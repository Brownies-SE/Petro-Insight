// TODO Add resolvers for data models

const {
  SpillReport,
  Production,
  NOAV,
  PendingPermits,
  WellStatus,
  InspectionData,
  InspectionCompletedHR,
  Notifications,
  OperatorChange,
} = require("../models");
const { Profile } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    spillReport_Id: async (parent, { OperatorNumber }) => {
      return await SpillReport.find({ OperatorNumber }).populate(
        "spillReport_Id"
      );
    },
    selectOperator: async () => {
      return await SpillReport.find();
    },
    selectOperatorName: async (parent, { OperatorNumber }) => {
      return await SpillReport.findOne({ OperatorNumber });
    },
    production_Id: async (parent, { OperatorNumber, Year }) => {
      return await Production.find({ OperatorNumber, Year }).populate(
        "production_Id"
      );
    },
    noav_Id: async (parent, { OperatorNumber }) => {
      return await NOAV.find({ OperatorNumber }).populate("noav_Id");
    },

    pendingPermits_Id: async (parent, { OperatorNumber }) => {
      return await PendingPermits.find({ OperatorNumber }).populate(
        "pendingPermits_Id"
      );
    },

    wellStatus_Id: async (parent, { OperatorNumber }) => {
      return await WellStatus.find({ OperatorNumber }).populate(
        "wellStatus_Id"
      );
    },

    inspectionData_Id: async (parent, { LocationId }) => {
      return await InspectionData.find({ LocationId }).populate(
        "inspectionData_Id"
      );
    },

    inspectionCompletedHR_Id: async () => {
      return await InspectionCompletedHR.find();
    },

    notifications_Id: async () => {
      return await Notifications.find();
    },

    operatorChange_Id: async (parent, { CurrentOperator }) => {
      return await OperatorChange.find({ CurrentOperator }).populate(
        "operatorChange_Id"
      );
    },

    // profiles: async () => {
    //   return await Profile.find().populate("saved_operator");
    // },
    // operator: async (parent, { operator }) => {
    //   console.log("INSIDE OPERATOR RESOLVER");
    //   return await Operator.find({ operator }).populate("operators");
    // },
  },
  Mutation: {
    signUp: async (parent, { email, password }) => {
      const profile = await Profile.create({ email, password });
      console.log(profile);
      const token = signToken(profile);
      return { token, profile };
    },
    //TODO pair up saved operator with profile
    // saved_operator: async (parent, { operator }, context) => {
    //   if (context.user) {
    //     console.log(operator_number);
    //     const profile = await Profile.findOneAndUpdate(
    //       { _id: context.user._id },
    //       {
    //         $addToSet: {
    //           saved_operator: oporator_number,
    //         },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     ).populate("operators");
    //     console.log(profile);
    //     return profile;
    //   } else {
    //     throw new AuthenticationError("You need to be logged in!");
    //   }
    // },

    signIn: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }
      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, profile };
    },
  },
};
module.exports = resolvers;
