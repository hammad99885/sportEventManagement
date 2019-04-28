// module.exports = (mongoose, Schema, relationship) => {
//   const eventSchema = new Schema({
//     eventName: { type: String, isRequired: true },
//     eventShotDesc: { type: String, isRequired: true },
//     eventTimings: {
//       start: { type: Date, default: Date.now },
//       end: { type: Date }
//     },
//     eventType: String,
//     eventDetils: {
//       matches: [{type:Schema.ObjectId, ref:"Matches"}],
//       organizers: Array, // relation to be build
//       eventDetailedDesc: String
//     }
//   });

//   const Events = mongoose.model("Events", eventSchema);
//   return Events;
// };

// var date = new Date

// var te = date.now + date.getDay+2

module.exports = (mongoose, Schema, relationship) => {
  // ********************************
  const sponsorSchema = new Schema({
    name: { type: String, isRequired: true }
    // SponsordTeams: [{type:Schema.ObjectId, ref:"Teams"}]
  });

  const Sponsors = mongoose.model("Sponsors", sponsorSchema);
  // ********************************
  const teamSchema = new Schema({
    teamName: String,
    teamCaptainName: String,
    teamMembers: [
      // { type: Schema.ObjectId, ref: "Users", childPath: "RegisteredTeams" }
    ]
  });
  // teamSchema.plugin(relationship, { relationshipPathName: "Users" });
  // ********************************
  const matchSchema = new Schema({
    matchName: { type: String, isRequire: true },
    matchTime: { type: Date, default: Date.now },
    matchType: { type: String, isRequired: true },
    matchDetails: {
      // sponsors: [
      //   { type: Schema.ObjectId, ref: "Sponsors", childPath: "SponsordMatches" }
      // ],
      organizers: Array,
      teamDetails: [teamSchema]
    }
  });

  // ********************************
  const eventSchema = new Schema({
    eventName: { type: String, isRequired: true },
    eventShotDesc: { type: String, isRequired: true },
    eventTimings: {
      start: {
        date: { type: String, isRequire: true },
        time: { date: { type: String, isRequire: true } }
      },
      end: {
        date: { type: String },
        time: { date: { type: String } }
      }
    },
    eventType: String,
    eventDetails: {
      matches: [matchSchema],
      organizers: Array, // relation to be build
      eventDetailedDesc: String
    }
  });

  const Events = mongoose.model("Events", eventSchema);
  return Events;
};
