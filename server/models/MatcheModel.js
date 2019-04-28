// module.exports = (mongoose, Schema, relationship) => {
//   const matchSchema = new Schema({
//     matchName: { type: String, isRequire: true },
//     matchTime: { type: Date, default: Date.now },
//     matchType: { type: String, isRequired: true }, 
//     matchDetails: {
//       sponsors: [
//         { type: Schema.ObjectId, ref: "Sponsors", childPath: "SponsordMatches" }
//       ],
//       organizers: Array,
//       teamDetails: [{type: Schema.ObjectId, ref: "Teams"}],
//       fromEventOf: {type:Schema.ObjectId, ref:"Events", childPath:"matches"}
//     }
//   });

//   matchSchema.plugin(relationship, { relationshipPathName:'Sponsors' });
//   matchSchema.plugin(relationship, { relationshipPathName: 'Events'})

//   const Matches = mongoose.model("Matches", matchSchema);
//   return Matches;
// };
