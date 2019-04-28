// module.exports = (mongoose, Schema, relationship) => {
//   const teamSchema = new Schema({
//     teamName: String,
//     teamCaptainName: String,
//     teamMembers: [
//       { type: Schema.ObjectId, ref: "Users", childPath: "RegisteredTeams" }
//     ],
//     Matches:[{type: Schema.ObjectId, ref: "Matches", childPath:"teamDetails"}]
//   });

//   teamSchema.plugin(relationship, { relationshipPathName:'Users' });
//   teamSchema.plugin(relationship, { relationshipPathName: 'Matches'})

//   const Matches = mongoose.model("Matches", teamSchema);
//   return Matches;
// };
